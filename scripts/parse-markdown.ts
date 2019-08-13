import * as FileHandler from "fs";
import { parse } from "himalaya";
import * as MarkdownIt from "markdown-it";
import {
    dataDir,
    mdToAST,
    mdToHtml,
    questionsDir,
    resolve,
    websitesDir,
} from "./utils";

const { promises: fs } = FileHandler;
const md = new MarkdownIt();

fs.readdir(questionsDir).then(async (files: string[]) => {
    const readFilesAsync: Array<Promise<Buffer>> = files.map((file: string) =>
        fs.readFile(resolve(file, questionsDir)),
    );
    const BufferFiles: Buffer[] = await Promise.all(readFilesAsync);

    BufferFiles.forEach(async (item: Buffer, i: number) => {
        const str: string = item.toString();
        const html: string = md.render(str);
        const file: string = files[i];
        const content: HTMLElement[] = parse(html);

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
