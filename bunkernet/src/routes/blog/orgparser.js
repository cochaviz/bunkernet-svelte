import org from "org";
import { parse } from "node-html-parser";

export function parseRaw(string) {
  // Convert ORG to HTML
  var parser = new org.Parser();
  var orgDocument = parser.parse(string);
  var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
      headerOffset: 1,
      exportFromLineNumber: false,
      suppressSubScriptHandling: false,
      suppressAutoLink: false
  });

  return orgHTMLDocument;
}

export function matchOrgBang(string, bang) {
    let reg = new RegExp(`#\+${bang}:.*`, 'g')
    return string.match(reg);
}

export function readTags(string) {
    let matchedLine = string.match(/#\+TAGS:.*/g);

    if (matchedLine != null) {
        let groups = matchedLine[0].match(/@\w+/g);
        return groups.map((group) => group.substring(1, group.length));
    }
    return [];
}

export function readDate(string) {
    let matchedLine = string.match(/#\+DATE:.*/g);

    if  (matchedLine != null) {
        let date = matchedLine[0].match(/<.*?>/g);
        return date;
    }
}

export function getOrgMeta(string) {
    // Convert ORG to HTML
    const parsed = parseRaw(string);

    return { title: parsed.title, tags: readTags(string), date: readDate(string) };
}
