import fs from "fs";
import org from "org";

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
  return orgHTMLDocument.toString();
}

export async function get({ params }) {
  return { body : { post : await getPostHTML(params.postid) } };
}
