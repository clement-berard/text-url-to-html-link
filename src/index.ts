const regexFull = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const regexLight = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

export const textUrlToHtmlLink = (text: string, attrs: object = {}, restrictive: boolean = true) => {
    let attrsStr = '';
    for (let [key, value] of (<any>Object).entries(attrs)) {
        attrsStr += `${key}="${value}" `
    }

    return text.replace(!restrictive ? regexLight : regexFull, url => `<a href="${url}" ${attrsStr.slice(0, -1)}>${url}</a>`);
}
