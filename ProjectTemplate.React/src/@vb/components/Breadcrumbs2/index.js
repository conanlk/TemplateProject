import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduce } from 'lodash'
import styles from './style.module.scss'

const mapStateToProps = ({ menu }) => ({
  menuData: menu.menuData,
})

const Breadcrumbs2 = (props) => {
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
            <li className={styles.breadcrumb} key={item}>
              <strong className={`${styles.breadcrumbLink} ${styles.breadcrumbLink__current}`}>
                {toUpper(activeMenuItem.title)}
              </strong>
            </li>
          )
        }
        return (
          <li className={styles.breadcrumb} key={item}>
            <span>{toUpper(item)}</span>
          </li>
        )
      })
    }

    return (
      <li className={styles.breadcrumb}>
        <strong className={styles.current}>{activeMenuItem.title}</strong>
      </li>
    )
  }

  return (
    <div className={styles.subbar}>
      <ul className={`${styles.breadcrumbs} mr-4`}>
        <li className={styles.breadcrumb}>
          <a href="#" className={styles.breadcrumbLink}>
            Main
          </a>
        </li>
        {breadcrumbs}
        {/* <li className={styles.breadcrumb}>
          <a href="#" className={`${styles.breadcrumbLink} ${styles.breadcrumbLink__current}`}>
            Dashboard
          </a>
        </li> */}
      </ul>
      <div className={`${styles.divider} mr-4 d-none d-xl-block`} />
      <p className="color-gray-4 text-uppercase font-size-16 mb-0 mr-4 d-none d-xl-block">
        INV-00125
      </p>
      <button
        type="button"
        className="btn btn-primary btn-with-addon mr-auto text-nowrap d-none d-md-block"
      >
        <span className="btn-addon">
          <i className="btn-addon-icon fe fe-plus-circle" />
        </span>
        New Request
      </button>
      <div className={`${styles.amount} mr-3 ml-auto d-none d-sm-flex`}>
        <p className={styles.amountText}>
          This month
          <span className={styles.amountValue}>$251.12</span>
        </p>
        <div className={styles.amountGraph}>
          <i className={styles.amountGraphItem} style={{ height: '80%' }} />
          <i className={styles.amountGraphItem} style={{ height: '50%' }} />
          <i className={styles.amountGraphItem} style={{ height: '70%' }} />
          <i className={styles.amountGraphItem} style={{ height: '60%' }} />
          <i className={styles.amountGraphItem} style={{ height: '50%' }} />
          <i className={styles.amountGraphItem} style={{ height: '65%' }} />
        </div>
      </div>
      <div className={`${styles.amount} d-none d-sm-flex`}>
        <p className={styles.amountText}>
          Last month
          <span className={styles.amountValue}>$12,256.12</span>
        </p>
        <div className={styles.amountGraph}>
          <i className={styles.amountGraphItem} style={{ height: '60%' }} />
          <i className={styles.amountGraphItem} style={{ height: '65%' }} />
          <i className={styles.amountGraphItem} style={{ height: '75%' }} />
          <i className={styles.amountGraphItem} style={{ height: '55%' }} />
          <i className={styles.amountGraphItem} style={{ height: '100%' }} />
          <i className={styles.amountGraphItem} style={{ height: '85%' }} />
        </div>
      </div>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(Breadcrumbs2))
