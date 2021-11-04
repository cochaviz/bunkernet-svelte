import fs from "fs";
import org from "org";
import path from "path";

function matchOrgBang(string, bang) {
    let reg = new RegExp(`#\+${bang}:.*`, 'g')
    console.log(string);
    return string.match(reg);
}

function readTags(string) {
    let matchedLine = string.match(/#\+TAGS:.*/g);
    console.log(matchedLine);

    if (matchedLine != null) {
        let groups = matchedLine[0].match(/@\w+/g);
        return groups.map((group) => group.substring(1, group.length));
    }
    return [];
}

function readDate(string) {
    let matchedLine = string.match(/#\+DATE:.*/g);

    if  (matchedLine != null) {
        let date = matchedLine[0].match(/<.*?>/g);
        console.log(date);
        return date;
    }
}

function getFiles(dir) {
  return fs.readdirSync(dir).flatMap((item) => {
    const path = `${dir}/${item}`;
    if (fs.statSync(path).isDirectory()) {
      return getFiles(path);
    }
    return path;
  });
}

function getFileName(path) {
    return path.slice(path.lastIndexOf('/')+1, path.lastIndexOf('.'));
}

function getOrgMeta(path) {
    const fileData = fs.readFileSync(path, {encoding:'utf8', flag:'r'}).toString();

    // Convert ORG to HTML
    var parser = new org.Parser();
    var orgDocument = parser.parse(fileData);
    var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
        headerOffset: 1,
        exportFromLineNumber: false,
        suppressSubScriptHandling: false,
        suppressAutoLink: false
    });
    return { postid: getFileName(path), title: orgHTMLDocument.title, tags: readTags(fileData), date: readDate(fileData) };
}

export async function get() {
    return {
        body : {
            posts: getFiles("./static/posts").map((path) => { return getOrgMeta(path) })
        }
    };
}
