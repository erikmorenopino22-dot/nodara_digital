// Resaltado de sintaxis mínimo para los ejemplos de código.
// Divide el texto en trozos { text, type } con una única expresión regular.

const TOKEN =
  /(\/\/.*$)|('[^']*')|(<\/?[A-Z][A-Za-z]*|\/?>)|\b(export|function|const|return|async|await|if)\b|([A-Za-z_]\w*(?=\())/gm

const TYPES = ['comment', 'string', 'tag', 'keyword', 'call']

export function highlight(code) {
  const tokens = []
  let last = 0
  for (const match of code.matchAll(TOKEN)) {
    if (match.index > last) tokens.push({ text: code.slice(last, match.index), type: 'plain' })
    const group = match.slice(1).findIndex((value) => value !== undefined)
    tokens.push({ text: match[0], type: TYPES[group] })
    last = match.index + match[0].length
  }
  if (last < code.length) tokens.push({ text: code.slice(last), type: 'plain' })
  return tokens
}
