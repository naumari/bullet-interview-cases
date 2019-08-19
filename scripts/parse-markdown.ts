import * as FileHandler from "fs";
import { JSDOM } from "jsdom";
import * as MarkdownIt from "markdown-it";
import * as Prism from "prismjs";
import * as Towxml from "towxml";
import {
    dataDir,
    mdToAST,
    mdToHtml,
    questionsDir,
    resolve,
    textToLang,
    websitesDir,
} from "./utils";

const { promises: fs } = FileHandler;
const md = new MarkdownIt();
const towxml = new Towxml();

fs.readdir(questionsDir).then(async (files: string[]) => {
    const readFilesAsync: Array<Promise<Buffer>> = files.map((file: string) =>
        fs.readFile(resolve(file, questionsDir)),
    );
    const BufferFiles: Buffer[] = await Promise.all(readFilesAsync);
    const result: string[] = [];

    BufferFiles.forEach(async (item: Buffer, i: number) => {
        const str: string = item.toString();
        const type: RegExpMatchArray = str.match(/(?<=(<!-- tags: \()).*(?=(\) -->))/g);
        const file: string = files[i];
        const html: string = md.render(str.replace(/(###)(.|\W)*/, ""));
        const dom = new JSDOM(html);
        const codes: HTMLElement[] = dom.window.document.querySelectorAll("pre code");
        // highlight code block
        codes.forEach((code: HTMLElement) => {
            const { textContent, className } = code;
            const lang: string = textToLang[className];

            code.innerHTML = Prism.highlight(textContent, Prism.languages[lang], lang);
        });
        // serialize hmtl => string
        const codeHtml = dom.serialize();
        const content: object = { ...towxml.toJson(codeHtml), type };
        // generate
        result.push(JSON.stringify(content));
        await fs.writeFile(resolve(mdToHtml(file), websitesDir), html);
        await fs.writeFile(
            resolve(mdToAST(file), dataDir),
            JSON.stringify(content),
        );
    });

    await fs.writeFile(
        resolve("index.json", dataDir),
        result.join("\n"),
    );
});
// todo
// * finish generate README
// * finish questions
