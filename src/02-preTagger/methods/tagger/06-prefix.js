import setTag from './_setTag.js'
const prefixes = /^(anti|re|un|non|extra|inter|intra|over)([a-z-]{3})/

// only allow prefixes on adjectives, verbs
const allowed = {
  Adjective: true,
  Verb: true,
  PresentTense: true,
  Infinitive: true,
  PastTense: true,
}

// give 'overwork' the same tag as 'work'
const checkPrefix = function (term, model) {
  if (prefixes.test(term.normal) === true) {
    let root = term.normal.replace(prefixes, '$2')
    root = root.replace(/^-/, '')
    if (model.two.lexicon.hasOwnProperty(root) === true) {
      let tag = model.two.lexicon[root]
      if (allowed[tag] === true) {
        setTag(term, tag, 'prefix')
        return true
      }
    }
  }
  return null
}
export default checkPrefix