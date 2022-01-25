import fs from "fs";
import path from "path";
import { getOrgMeta } from "./orgparser";


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

function getFileData(path) {
    return fs.readFileSync(path, {encoding:'utf8', flag:'r'}).toString();
}

export async function get() {

    return {
        body : {
            posts: getFiles("./static/posts").map((path) => {
                return { postid : getFileName(path), data: getOrgMeta(getFileData(path)) }
            })
        }
    };
}
