import * as FileHandler from "fs";
import * as htmlparser from "htmlparser2";
import * as MarkdownIt from "markdown-it";
import {
    astToJson,
    dataDir,
    mdToAST,
    mdToHtml,
    questionsDir,
    resolve,
    websitesDir,
} from "./utils";

const { promises: fs } = FileHandler;
const md = new MarkdownIt();
const parserAsync = (html: string): Promise<htmlparser.DomElement[]> =>
    new Promise((resolve, reject) => {
        const handler = new htmlparser.DomHandler((error, dom) => {
            if (error) { reject(error); } else { resolve(dom); }
        });

        const parser = new htmlparser.Parser(handler);

        parser.write(html);
        parser.end();
    });

fs.readdir(questionsDir).then(async (files: string[]) => {
    const readFilesAsync: Array<Promise<Buffer>> = files.map((file: string) =>
        fs.readFile(resolve(file, questionsDir)),
    );
    const BufferFiles: Buffer[] = await Promise.all(readFilesAsync);

    BufferFiles.forEach(async (item: Buffer, i: number) => {
        const str: string = item.toString();
        const html: string = md.render(str);
        const file: string = files[i];
        const content: htmlparser.DomElement[] = await parserAsync(html);

        content.forEach(astToJson);

        await fs.writeFile(resolve(mdToHtml(file), websitesDir), html);
        await fs.writeFile(
            resolve(mdToAST(file), dataDir),
            JSON.stringify(content),
        );
    });
});
// todo
// * finish generate README
// * finish questions
