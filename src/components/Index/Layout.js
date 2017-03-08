import React from 'react';
import { Layout, Menu, Tabs, Icon } from 'antd';
import AccountManager from '../System/AccountManager';
import AccountParamsSet from '../System/AccountParamsSet';
import Header from './Header'
import styles from './Layout.css';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false,
    mode: 'inline'
  };

  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    });
  }

  changeTab = (key) => {
    console.log(key);
  }

  render() {
    return (
      <Layout className={styles.layout}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode={this.state.mode} defaultOpenKeys={['sub1']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="desktop" /><span className="nav-text">系统</span></span>}
            >
              <Menu.Item key="1">帐号管理</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header} {...this.props.headerProps} />
          <Content style={{ margin: '0 16px' }}>
            <Tabs defaultActiveKey="2" onChange={this.changeTab}>
              <TabPane tab="帐号管理" key="1">
                <AccountManager />
              </TabPane>
              <TabPane tab="参数配置" key="2">
                <AccountParamsSet />
              </TabPane>
            </Tabs>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;
