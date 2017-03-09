import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import menuArray from '../../utils/menu'

// 获取第一级菜单
const topMenus = menuArray.map(item => item.key)
// 遍历生成菜单
const getMenus = function (menuArray, siderCollapsed, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    // 如果当前菜单拥有子菜单
    if(item.child) {
      return (
        <Menu.SubMenu key={item.key} title={<span>{item.icon ? <Icon type={item.icon} /> : ''}{siderCollapsed && topMenus.indexOf(item.key) >= 0 ? '' : item.name}</span>}>
          {getMenus(item.child, siderCollapsed, parentPath + item.key + '/')}
        </Menu.SubMenu>
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

function SiderMenu(props) {
	console.log(props)
	const menuItems = getMenus(menuArray, props.siderCollapsed)

	return (
		<Menu mode={props.siderCollapsed ? 'vertical' : 'inline'} theme="dark" >
			{menuItems}
		</Menu>
	)
}

export default SiderMenu
