const MarkdownIt = require('markdown-it')
const fs = require('promise-fs')
const htmlparser = require('htmlparser2')
const {
    resolve,
    questionsDir,
    websitesDir,
    dataDir,
    mdToHtml,
    mdToAST,
    astToJson,
} = require('./utils')

const md = new MarkdownIt()
const parser = (html: string): Promise<[]> =>
    new Promise((resolve, reject) => {
        const handler = new htmlparser.DomHandler(function(error, dom) {
            if (error) reject(error)
            else resolve(dom)
        })

        const parser = new htmlparser.Parser(handler)

        parser.write(html)
        parser.end()
    })

fs.readdir(questionsDir).then(async (files: string[]) => {
    const readFilesAsync: Promise<Buffer>[] = files.map((file: string) =>
        fs.readFile(resolve(file, questionsDir))
    )
    const BufferFiles: Buffer[] = await Promise.all(readFilesAsync)

    BufferFiles.forEach(async (item: Buffer, i: number) => {
        const str: string = item.toString()
        const html: string = md.render(str)
        const file: string = files[i]
        const content: [] = await parser(html)

        content.forEach(astToJson)

        await fs.writeFile(resolve(mdToHtml(file), websitesDir), html)
        await fs.writeFile(
            resolve(mdToAST(file), dataDir),
            JSON.stringify(content)
        )
    })
})
// todo
// * finish generate README
// * finish questions
