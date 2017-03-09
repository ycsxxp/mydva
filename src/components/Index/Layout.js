import React from 'react';
import { Layout, Menu, Tabs, Icon } from 'antd';

import SiderMenu from './SiderMenu'
import AccountManager from '../System/AccountManager';
import AccountParamsSet from '../System/AccountParamsSet';
import Header from './Header'
import styles from './Layout.less';

const { Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

function LayoutComponent(props) {
  const siderMenuProps = {
    siderCollapsed: props.siderCollapsed
  }
  return (
    <Layout className={styles.layout}>
      <Sider collapsed={props.siderCollapsed} mode={props.siderCollapsed ? 'vertical' : 'inline'} >
        <div className={styles.logo} />
        <SiderMenu {...siderMenuProps} />
      </Sider>
      <Layout>
        <Header className={styles.header} {...props} />
        <Content style={{ margin: '0 16px' }} >
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default LayoutComponent;
