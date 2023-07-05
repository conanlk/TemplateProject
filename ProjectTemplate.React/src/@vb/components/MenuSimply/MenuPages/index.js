import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const mapStateToProps = ({ menu, settings: { menuColor } }) => ({
  menuData: menu.menuData,
  menuColor,
})

const MenuPages = ({ menuData = [], menuColor }) => {
  const menu = () => {
    return (
      <Menu selectable={false} style={{ width: 200 }}>
        {menuData.map((item) => {
          if (!item.category && item.children) {
            return (
              <Menu.SubMenu
                title={
                  <span>
                    <i className={`${item.icon} mr-2`} />
                    {item.title}
                  </span>
                }
                key={item.key}
              >
                {item.children.map((subItem) => {
                  return (
                    <Menu.Item key={subItem.key}>
                      <Link to={subItem.url}>{subItem.title}</Link>
                    </Menu.Item>
                  )
                })}
              </Menu.SubMenu>
            )
          }

          if (!item.category && item.url) {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.url}>
                  <i className={`${item.icon} mr-2`} />
                  {item.title}
                </Link>
              </Menu.Item>
            )
          }

          return null
        })}
      </Menu>
    )
  }

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
      <div
        className={classNames(styles.dropdown, {
          [styles.dropdownDark]: menuColor === 'dark',
          [styles.dropdownGray]: menuColor === 'gray',
        })}
      >
        <i className={`${styles.icon} fe fe-menu`} />
        Menu
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps)(MenuPages)
