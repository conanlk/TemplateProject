const colors = require('./colors')

module.exports = (string, color = 'clean', prefix = '') => {
  return console.log(
    colors[color] ? colors[color](prefix + string) : colors['clean'](prefix + string),
  )
}
