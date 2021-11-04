import fs from "fs";
import org from "org";
import { parse } from "node-html-parser";

async function parseLatex(string) {
  return "OI";
}

async function asyncAssign(elements) {
}

async function getPostHTML(postid) {
  // Get post
  const fileName = `./static/posts/${postid}.org`;
  const fileData = fs.readFileSync(fileName, {encoding:'utf8', flag:'r'}).toString();

  // Convert ORG to HTML
  var parser = new org.Parser();
  var orgDocument = parser.parse(fileData);
  var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
      headerOffset: 1,
      exportFromLineNumber: false,
      suppressSubScriptHandling: false,
      suppressAutoLink: false
  });

  // Process latex
  let content = parse(orgHTMLDocument.contentHTML);

  for (const el in content.getElementsByTagName('p')) {
    if(el.childNodes != null) {
      el.childNodes[0]['_rawText'] = await parseLatex(el.childNodes[0]._rawText);
    }
  }
  return orgHTMLDocument.toString();
}

export async function get({ params }) {
  return { body : { post : await getPostHTML(params.postid) } };
}
