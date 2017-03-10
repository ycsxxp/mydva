import React, { PropTypes } from 'react';
import { connect } from 'dva';
// import { Spin } from 'antd';
import Layout from '../components/Index/Layout'
// import { classnames } from '../utils'
import Login from '../components/Login/login';
import styles from './nfapp.css';

function Nfapp({ children, location, dispatch, nfapp }) {
	const { loginStatus, siderCollapsed } = nfapp

	const loginProps = {
    // loading,
    // loginButtonLoading,
    doLogin(data) {
      dispatch({ type: 'nfapp/login', payload: data })
    }
  }
  // 传给layout组件模块的变量
  const layoutProps = {
    location,
    siderCollapsed,
    toggleSider(data) {
      dispatch({ type: 'nfapp/toggleSider', payload: data })
    },
    logout() {
      dispatch({ type: 'nfapp/logout' })
    }
  }

  return (
		<div className={styles.body} >{loginStatus
        ? <Layout {...layoutProps} >{children}</Layout>
        : <Login {...loginProps} />}</div>
  );
}

Nfapp.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  nfapp: PropTypes.object.isRequired
}

export default connect(({ nfapp }) => ({ nfapp }))(Nfapp)
