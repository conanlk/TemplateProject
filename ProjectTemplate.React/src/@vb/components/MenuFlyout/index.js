import React from 'react'
import { connect } from 'react-redux'
import MenuLeft from './MenuLeft'
import MenuTop from './MenuTop'

const mapStateToProps = ({ settings: { menuLayoutType } }) => ({ menuLayoutType })

const Menu = ({ menuLayoutType }) => {
  switch (menuLayoutType) {
    case 'left':
      return <MenuLeft />
    default:
      return <MenuTop />
  }
}

export default connect(mapStateToProps)(Menu)
