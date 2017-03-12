import React from 'react';
import { Layout, Menu, Tabs, Icon, Breadcrumb } from 'antd';

import SiderMenu from './SiderMenu'
import Bread from './Bread'
import Header from './Header'
import styles from './Layout.less';

const { Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

function LayoutComponent(props) {
  const siderMenuProps = {
    location: props.location,
    siderCollapsed: props.siderCollapsed
  }

  const breadProps = {
    location: props.location
  }

  return (
    <Layout className={styles.layout} >
      <Sider collapsed={props.siderCollapsed} mode={props.siderCollapsed ? 'vertical' : 'inline'} >
        <div className={styles.logo} />
        <SiderMenu {...siderMenuProps} />
      </Sider>
      <Layout className={styles.layoutright} >
        <Header className={styles.header} {...props} />
        <Content style={{ margin: '0 16px' }} >
          <Bread {...breadProps} />
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
