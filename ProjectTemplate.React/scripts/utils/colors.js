const chalk = require('chalk')

module.exports = {
  clean: (string) => string,
  bold: (string) => chalk.bold(string),
  white: (string) => chalk.bgWhite.black(string),
  red: (string) => chalk.bgRed.white(string),
  green: (string) => chalk.bgGreen.black(string),
}
