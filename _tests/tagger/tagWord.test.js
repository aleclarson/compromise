const test = require('tape')
const nlp = require('../_lib')

// done
//test a word from each file in ./data/**
test('pos from-lexicon', function (t) {
  const arr = [
    ['toronto', 'City'],
    ['mexico', 'Country'],
    ['Jamaica', 'Country'],
    ['legendary', 'Adjective'],
    ['above', 'Adjective'],
    ['moderate', 'Adjective'],
    ['extreme', 'Adjective'],
    ['august', 'Month'],
    ['saturday', 'WeekDay'],
    ['really', 'Adverb'],
    ['each', 'Determiner'],
    ['voila', 'Expression'],
    ['new england', 'Place'],
    ['hers', 'Possessive'],
    ['onto', 'Preposition'],
    ['blvd', 'Place'],
    ['belgian', 'Demonym'],
    ['cactus', 'Singular'],
    ['cacti', 'Plural'],
    ['economy', 'Noun'],
    ['engineer', 'Noun'],
    ['clothing', 'Noun'],
    ['duran duran', 'Organization'],
    ['american express', 'Organization'],
    ['brotherhood', 'Noun'],
    ['oakland athletics', 'SportsTeam'],
    ['jamie', 'Person'],
    ['claire', 'FemaleName'],
    ['arthur', 'MaleName'],
    ['¥', 'Currency'],
    ['pence', 'Currency'],
    ['seven', 'Value'],
    ['seventeen', 'Value'],
    ['twenty', 'Value'],
    ['thousand', 'Value'],
    ['eighteenth', 'Value'],
    ['tbsp', 'Unit'],
    ['wrote', 'PastTense'],
    ['write', 'Verb'],
    ['survive', 'Verb'],
    ['attempt', 'Verb'],
    ["mc'adams", 'LastName'],
    ['Müller', 'LastName'],
    ['muller', 'LastName'],
    ['425-1231', 'PhoneNumber'],
    ['823-425-1231', 'PhoneNumber'],
    ['823 425-1231', 'PhoneNumber'],
    ['(823) 425-1231', 'PhoneNumber'],
    ['+1-123-444-5655', 'PhoneNumber'],
    ['invest', 'Verb'],
    ['investing', 'Verb'],
    [`wallys'`, 'Possessive'],
    // [`JDI University'`, 'Organization'],
    ['ocean', 'Noun'],
    ['shiver', 'Verb'],
    [`flanders'`, 'Possessive'],
    [`chillin'`, 'Gerund'],
    [`'cool'`, 'Adjective'],
    ['MMMCMXXIII', 'RomanNumeral'],
    // ['MIMMCMXXIII', 'Acronym'], //invalid roman numeral
    ['c.e.o', 'Acronym'],
    ['MDMA', 'Acronym'],
    ['unless', 'Condition'],
  ]
  arr.forEach(function (a) {
    const term = nlp(a[0]).termList()[0]
    t.equal(term.tags[a[1]], true, a[0] + ' lexicon')
  })
  t.end()
})