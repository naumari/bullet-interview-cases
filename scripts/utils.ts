import * as path from "path";

export const resolve = (url: string, root: string = __dirname): string =>
    path.resolve(root, url);

export const questionsDir: string = resolve("../questions");

export const websitesDir: string = resolve("../websites");

export const dataDir: string = resolve("../data");

export const mdToHtml = (url: string): string =>
    `${path.basename(url, ".md")}.html`;

export const mdToAST = (url: string): string =>
    `${path.basename(url, ".md")}.json`;
