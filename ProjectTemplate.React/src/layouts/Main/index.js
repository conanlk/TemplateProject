import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import TopBar from '@vb/components/TopBar'
import Breadcrumbs from '@vb/components/Breadcrumbs'
import Breadcrumbs2 from '@vb/components/Breadcrumbs2'
import MenuClassic from '@vb/components/MenuClassic'
import MenuFlyout from '@vb/components/MenuFlyout'
import MenuSimply from '@vb/components/MenuSimply'
import Footer from '@vb/components/Footer'
import Footer2 from '@vb/components/Footer2'
import Footer3 from '@vb/components/Footer3'
import Footer4 from '@vb/components/Footer4'
import Sidebar from '@vb/components/Sidebar'
import SupportChat from '@vb/components/SupportChat'
import Variants from '@vb/components/Variants'
import Tutorial from '@vb/components/Tutorial'

const mapStateToProps = ({ settings }) => ({
  isMobileMenuOpen: settings.isMobileMenuOpen,
  isContentMaxWidth: settings.isContentMaxWidth,
  isAppMaxWidth: settings.isAppMaxWidth,
  isGrayBackground: settings.isGrayBackground,
  isSquaredBorders: settings.isSquaredBorders,
  isCardShadow: settings.isCardShadow,
  isBorderless: settings.isBorderless,
  isTopbarFixed: settings.isTopbarFixed,
  isTopbarSeparated: settings.isTopbarSeparated,
  isGrayTopbar: settings.isGrayTopbar,
  layoutTopbar: settings.layoutTopbar,
  layoutBreadcrumbs: settings.layoutBreadcrumbs,
  layoutFooter: settings.layoutFooter,
  layoutMenu: settings.layoutMenu,
})

let touchStartPrev = 0
let touchStartLocked = false

const MainLayout = ({
  dispatch,
  children,
  isMobileMenuOpen,
  isContentMaxWidth,
  isAppMaxWidth,
  isGrayBackground,
  isSquaredBorders,
  isCardShadow,
  isBorderless,
  isTopbarFixed,
  isTopbarSeparated,
  isGrayTopbar,
  layoutTopbar,
  layoutBreadcrumbs,
  layoutFooter,
  layoutMenu,
}) => {
  // touch slide mobile menu opener
  useEffect(() => {
    const unify = (e) => {
      return e.changedTouches ? e.changedTouches[0] : e
    }
    document.addEventListener(
      'touchstart',
      (e) => {
        const x = unify(e).clientX
        touchStartPrev = x
        touchStartLocked = x > 70
      },
      { passive: false },
    )
    document.addEventListener(
      'touchmove',
      (e) => {
        const x = unify(e).clientX
        const prev = touchStartPrev
        if (x - prev > 50 && !touchStartLocked) {
          toggleMobileMenu()
          touchStartLocked = true
        }
      },
      { passive: false },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const toggleMobileMenu = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMobileMenuOpen',
        value: !isMobileMenuOpen,
      },
    })
  }

  const TopbarWrapper = ({ children: c }) => (
    <Layout.Header
      className={classNames('vb__layout__header', {
        vb__layout__fixedHeader: isTopbarFixed,
        vb__layout__headerGray: isGrayTopbar,
        vb__layout__separatedHeader: isTopbarSeparated,
      })}
    >
      {c}
    </Layout.Header>
  )

  return (
    <div
      className={classNames({
        vb__layout__grayBackground: isGrayBackground,
      })}
    >
      <Layout
        className={classNames('vb__layout', {
          vb__layout__contentMaxWidth: isContentMaxWidth,
          vb__layout__appMaxWidth: isAppMaxWidth,
          vb__layout__squaredBorders: isSquaredBorders,
          vb__layout__cardsShadow: isCardShadow,
          vb__layout__borderless: isBorderless,
        })}
      >
        <Tutorial />
        <Variants />
        <Sidebar />
        <SupportChat />
        {layoutMenu === 'classic' && <MenuClassic />}
        {layoutMenu === 'flyout' && <MenuFlyout />}
        {layoutMenu === 'simply' && <MenuSimply />}
        <Layout>
          {layoutTopbar === 'v1' && (
            <TopbarWrapper>
              <TopBar />
            </TopbarWrapper>
          )}
          {layoutBreadcrumbs === 'v1' && <Breadcrumbs />}
          {layoutBreadcrumbs === 'v2' && <Breadcrumbs2 />}
          <Layout.Content className="vb__layout__content">{children}</Layout.Content>
          {layoutFooter === 'v1' && (
            <Layout.Footer>
              <Footer />
            </Layout.Footer>
          )}
          {layoutFooter === 'v2' && (
            <Layout.Footer>
              <Footer2 />
            </Layout.Footer>
          )}
          {layoutFooter === 'v3' && (
            <Layout.Footer>
              <Footer3 />
            </Layout.Footer>
          )}
          {layoutFooter === 'v4' && (
            <Layout.Footer>
              <Footer4 />
            </Layout.Footer>
          )}
        </Layout>
      </Layout>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainLayout))
