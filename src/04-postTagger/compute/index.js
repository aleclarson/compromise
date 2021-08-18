// runs all match/tag patterns in model.two.matches
const postTagger = function (document, world) {
  const { model, methods } = world
  let byGroup = methods.two.compile(model.two.matches, methods)
  let found = methods.two.bulkMatch(document, byGroup, methods)
  methods.two.bulkTagger(found, document, model, methods)
  // 2nd time?
  // let subset = new Set(found.map(todo => todo.pointer[0]))
  // subset = Array.from(subset).map(n => document[n])
  // found = methods.two.bulkMatch(subset, byGroup, methods)
  // methods.two.bulkTagger(found, subset, model, methods)
  return document
}

export default { postTagger }