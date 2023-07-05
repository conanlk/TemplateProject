const { REPLACE_BETWEEN } = require('../utils/io')

const menuFile = 'src/services/menu/index.js'

const itemTpl = (item, convert) => `{
  title: '${item.title}',
  key: '${item.key}',
  url: '${item.url}',
  ${item.icon ? 'icon: "' + item.icon + '",' : ''}
  ${item.children ? 'children: [' + convert(item.children) + ']' : ''}
},\n`

const categoryTpl = (item) => `{
  category: true,
  title: '${item.title}',
  key: '${item.key}',
},\n`

module.exports = (config) => {
  const convert = (data) => {
    let temp = ``
    data.forEach((item) => {
      if (item.category) {
        temp = temp + categoryTpl(item)
        return
      }
      temp = temp + itemTpl(item, convert)
    })
    return temp
  }
  const code = convert(config)

  // replace menu
  REPLACE_BETWEEN(
    menuFile,
    `VB:REPLACE-START:MENU-CONFIG`,
    `VB:REPLACE-END:MENU-CONFIG`,
    code
  )
}
