import test from 'tape'
import nlp from '../_lib.js'

test('soft-match', function (t) {
  let doc = nlp(`a priest walked into the bars`)
  doc.cache({ root: true })
  t.equal(doc.match('bars').found, true, 'found bars')
  t.equal(doc.match('bar').found, false, 'missed bar without ~')
  t.equal(doc.match('~bars~').found, true, 'found ~ bars')
  t.equal(doc.match('~bar~').found, true, 'found ~ bar')
  t.equal(doc.match('~walk~ into').found, true, 'found infinitive')
  t.equal(doc.match('~bar~').found, true, 'found singular')
  t.equal(doc.text('root'), 'a priest walk into the bar', 'root-output')
  t.end()
})
