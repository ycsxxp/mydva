import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './Header.less';

const SubMenu = Menu.SubMenu

function Header({ user, logout, toggleSider, siderCollapsed }) {
  function handleClickMenu(e) {
    logout()
  }
  return (
    <div className={styles.header}>
    	<div className={styles.siderbutton} onClick={toggleSider}>
        <Icon type={siderCollapsed ? 'menu-unfold' : 'menu-fold'} />
      </div>
      <Menu className="header-menu" mode="horizontal" onClick={handleClickMenu}>
        <SubMenu style={{ float: 'right' }} title={<span> <Icon type="user" />ceshi </span>}>
          <Menu.Item key="logout">
            <a>注销</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Header;
