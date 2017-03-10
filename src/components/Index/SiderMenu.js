import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import menuArray from '../../utils/menu'

const SubMenu = Menu.SubMenu;

// 获取第一级菜单
const topMenus = menuArray.map(item => item.key)
// 遍历生成菜单
const getMenus = function (menuArray, siderCollapsed, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    // 如果当前菜单拥有子菜单
    if(item.child) {
      return (
        <SubMenu key={item.key} title={<span>{item.icon ? <Icon type={item.icon} /> : ''}{siderCollapsed && topMenus.indexOf(item.key) >= 0 ? '' : item.name}</span>}>
          {getMenus(item.child, siderCollapsed, parentPath + item.key + '-')}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            {siderCollapsed && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
          </Link>
        </Menu.Item>
      )
    }
  })
}

function SiderMenu({ location, siderCollapsed }) {
	const menuItems = getMenus(menuArray, siderCollapsed)
  let pathNameLength = location.pathname.substr(1).split('-').length
  let defaultOpenKeys = pathNameLength > 1 ? location.pathname.substr(1).split('-').slice(0, location.pathname.substr(1).split('-').length - 1) : ['home']
  let defaultSelectedKeys = pathNameLength > 2 ? location.pathname.substr(1).split('-').slice(-1) : ['status']


	return (
		<Menu mode={siderCollapsed ? 'vertical' : 'inline'} theme="dark" defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys}>
			{menuItems}
		</Menu>
	)
}

export default SiderMenu
