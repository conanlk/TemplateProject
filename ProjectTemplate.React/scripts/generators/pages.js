const { GET_DIR_FOLDERS, DELETE_FOLDERS, WRITE_FILE } = require('../utils/io')
const logg = require('../utils/logg')

const pagesFolder = 'src/pages'

const pageTpl = (imports, title, formattedTitle, pageContent) => `
import React from 'react'
${imports}

const ${formattedTitle} = () => {
  return (
    <div>
      <Helmet title="${title}" />
      ${pageContent}
    </div>
  )
}

export default ${formattedTitle}
`

const rowTpl = (row) => row && `<div className="row">${columnsTpl(row.columns)}</div>`

const columnsTpl = (items) => {
  let columns = ''
  items && items.forEach((column) => {
    columns = columns + `<div className="${column.className}">${cardTpl(column.cards)}</div>`
  })
  return columns
}

const cardTpl = (items) => {
  let cards = ''
  items && items.forEach((card) => {
    cards = cards + `<div className="${card.extraClass ? card.extraClass : 'card'}">${widgetTpl(card.widgets)}</div>`
  })
  return cards
}

const widgetTpl = (items) => {
  let widgets = ''
  items && items.forEach((widget) => {
    const [folder, name] = widget.name.split('-')
    const props = widget.data ? ` data={${JSON.stringify(widget.data).replace(/"/ig, '\'')}}` : ''
    let widgetCode = ''
    if (widget.wrapper === false) {
      widgetCode = `<${folder}${name}${props} />`
    } else {
      widgetCode = `<div className="${widget.wrapper ? widget.wrapper : 'card-body'}"><${folder}${name}${props} /></div>`
    }
    widgets = widgets + widgetCode
  })
  return widgets
}

module.exports = (config, content) => {
  // wipe directory folders, excluding 'auth' folder
  const foldersToRemove = GET_DIR_FOLDERS(pagesFolder)
    .filter((item) => {
      return item !== 'auth'
    })
  DELETE_FOLDERS(pagesFolder, foldersToRemove)

  // generate pages
  const generatePages = (config, level = 1) => {
    let prefixSpaces = ''
    Array(level)
      .fill()
      .forEach(() => (prefixSpaces = prefixSpaces + '   '))

    config.forEach((page) => {
      const { key, category, title, url: path } = page
      const pageContent = content[key]
      // skip category items & auth pages
      if (category || path === '/auth') {
        return
      }

      const generateImports = (content) => {
        const widgetsList = []
        content && content.forEach(row => {
          row.columns && row.columns.forEach(columns => {
            columns.cards && columns.cards.forEach(cards => {
              cards.widgets && cards.widgets.forEach(widget => {
                widget && widgetsList.push(widget.name)
              })
            })
          })
        })
        const filteredWidgetsList = widgetsList.filter((value, index, self) => self.indexOf(value) === index)
        let imports = ''
        filteredWidgetsList.forEach(widget => {
          const [folder, name] = widget.split('-')
          imports = imports + 'import ' + folder + name + ' from \'@vb/widgets/' + folder + '/' + name + '\'\n'
        })
        return `import { Helmet } from 'react-helmet'
          ${imports}
        `
      }

      const generateContent = (content) => {
        if (!content) {
          return `<div />`
        }
        let code = ''
        content.forEach((row) => {
          code = code + rowTpl(row)
        })
        return code
      }

      const imports = generateImports(pageContent)
      const formattedTitle = title
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .replace(/[^a-zA-Z]/g, '')
      const generatedPageContent = generateContent(pageContent)
      const generatedPage = pageTpl(imports, title, formattedTitle, generatedPageContent)

      WRITE_FILE(pagesFolder, path, 'index.js', generatedPage)
      logg(`${path}/index.js`, 'clean', `${prefixSpaces} └─ `)

      if (page.children) {
        generatePages(page.children, level + 1)
      }
    })
  }
  generatePages(config)
}
