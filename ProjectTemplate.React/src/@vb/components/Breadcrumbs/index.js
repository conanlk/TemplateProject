import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduce } from 'lodash'
import styles from './style.module.scss'

const mapStateToProps = ({ menu }) => ({
  menuData: menu.menuData,
})

const Breadcrumbs = (props) => {
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const {
    location: { pathname },
    menuData = [],
  } = props
  useEffect(() => {
    setBreadcrumbs(() => getBreadcrumbs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menuData])

  const getPath = (data, url, parents = []) => {
    const items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result
        }
        if (entry.url === url) {
          return [entry].concat(parents)
        }
        if (entry.children) {
          const nested = getPath(entry.children, url, [entry].concat(parents))
          return (result || []).concat(nested.filter((e) => !!e))
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : [false]
  }

  const toUpper = (str) => str.replace(/\b\w/g, (l) => l.toUpperCase())

  const getBreadcrumbs = () => {
    const [activeMenuItem] = getPath(menuData, pathname)
    const pathUrl = pathname.split('/')

    if (activeMenuItem && pathUrl.length > 1) {
      return pathUrl.map((item, index) => {
        if (index === 0) {
          return null
        }

        if (index === pathUrl.length - 1) {
          return (
            <span key={item}>
              <span className={styles.arrow} />
              <strong className={styles.current}>{toUpper(activeMenuItem.title)}</strong>
            </span>
          )
        }
        return (
          <span key={item}>
            <span className={styles.arrow} />
            <span>{toUpper(item)}</span>
          </span>
        )
      })
    }

    return (
      <span>
        <span className={styles.arrow} />
        <strong className={styles.current}>{activeMenuItem.title}</strong>
      </span>
    )
  }

  return (
    breadcrumbs &&
    (breadcrumbs.length ? (
      <div className={styles.breadcrumbs}>
        <div className={styles.path}>
          <Link to="/">Home</Link>
          {breadcrumbs}
        </div>
      </div>
    ) : null)
  )
}

export default withRouter(connect(mapStateToProps)(Breadcrumbs))
