const cliSelect = require('cli-select')
const readlineSync = require('readline-sync')
const path = require('path')
const fs = require('fs')

const { white } = require('./utils/colors')
const logg = require('./utils/logg')
const generate = require('./generate')

cliSelect({
  cleanup: false,
  values: [
    'Init seed version',
    'Init full version (all pages from the preview)',
    'Enter config file path',
  ],
  valueRenderer: (value, selected) => (selected ? white(value) : value),
})
  .then((response) => {
    if (response.id === 0) {
      const resolvedSeedFile = path.resolve(__dirname, 'config-seed.json')
      logg('Generating seed version...', 'green')
      logg('Config: ' + resolvedSeedFile, 'green')
      generate(resolvedSeedFile)
    }
    if (response.id === 1) {
      const resolvedFullFile = path.resolve(__dirname, 'config-full.json')
      logg('Generating full preview version...', 'green')
      logg('Config: ' + resolvedFullFile, 'green')
      generate(resolvedFullFile)
    }
    if (response.id === 2) {
      const configPath = readlineSync.question('Enter relative config file path: ')
      const resolvedCustomFile = path.resolve(configPath)
      if (fs.existsSync(resolvedCustomFile)) {
        logg('Generating version with custom config file...', 'green')
        logg('Config: ' + resolvedCustomFile, 'green')
        generate(resolvedCustomFile)
      } else {
        logg('Config file not found: ' + resolvedCustomFile, 'red')
      }
    }
  })
  .catch(() => {
    logg('Init skipped.', 'red')
  })
