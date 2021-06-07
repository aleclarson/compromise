const debug = require('./methods/debug')

const methods = {
  /** return data */
  json: function () {
    return this.document
  },
  text: function () {
    return this.document.reduce((txt, terms) => {
      terms.forEach(t => (txt += t.pre + t.text + t.post))
      return txt
    }, '')
  },
  fork: function () {
    this.document = JSON.parse(JSON.stringify(this.document))
    return this
  },
  debug: function () {
    debug(this)
    return this
  },
}

module.exports = function (View) {
  Object.assign(View.prototype, methods)
}
