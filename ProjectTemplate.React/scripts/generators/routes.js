const { REPLACE_NEXT_LINE, REPLACE_BETWEEN } = require('../utils/io')

const routerFile = 'src/router.js'

const routeTpl = (route) => `{
  path: '${route.url}',
  Component: lazy(() => import('pages${route.url}')),
  exact: true,
},\n`

module.exports = (config) => {
  // prepare data
  let redirectTo
  const convert = (data) => {
    let temp = ``
    data.forEach((item) => {
      if (item.category || item.url === '/auth') {
        return
      }
      if (!redirectTo) {
        redirectTo = process.env.REDIRECT_URL || item.url
      }
      temp = temp + routeTpl(item)
      if (item.children) {
        temp = temp + convert(item.children)
      }
    })
    return temp
  }
  const code = convert(config)

  // replace redirectTo
  REPLACE_NEXT_LINE(
    routerFile,
    `VB:REPLACE-NEXT-LINE:ROUTER-REDIRECT`,
    `<Route exact path="/" render={() => <Redirect to="${redirectTo}" />} />`,
  )

  // replace routes
  REPLACE_BETWEEN(
    routerFile,
    `VB:REPLACE-START:ROUTER-CONFIG`,
    `VB:REPLACE-END:ROUTER-CONFIG`,
    code,
  )
}
