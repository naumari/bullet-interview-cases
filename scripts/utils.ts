const path = require('path')

export const resolve = (url: string, root: string = __dirname): string =>
    path.resolve(root, url)

export const questionsDir: string = resolve('../questions')

export const websitesDir: string = resolve('../websites')

export const dataDir: string = resolve('../data')

export const mdToHtml = (url: string): string =>
    `${path.basename(url, '.md')}.html`

export const mdToAST = (url: string): string =>
    `${path.basename(url, '.md')}.json`

export const astToJson = ast => {
    Object.keys(ast).forEach(key => {
        if (key === 'next' || key === 'prev' || key === 'parent') delete ast[key]
        else if (Array.isArray(ast[key])) ast[key].forEach(item => astToJson(item))
        else if (typeof ast[key] === 'object') ast[key] = astToJson[key]
    })
}