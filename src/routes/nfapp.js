import React, { PropTypes } from 'react';
import { connect } from 'dva';
// import { Spin } from 'antd';
import Layout from '../components/Index/Layout'
// import { classnames } from '../utils'
import Login from '../components/Login/login';
import styles from './nfapp.css';

function Nfapp({ dispatch, nfapp }) {
	const { loginStatus, siderCollapsed } = nfapp

	const loginProps = {
    // loading,
    // loginButtonLoading,
    doLogin(data) {
      dispatch({ type: 'nfapp/login', payload: data })
    }
  }

  const headerProps = {
    logout() {
      dispatch({ type: 'nfapp/logout' })
    }
  }

  const siderProps = {
    siderCollapsed,
    toggleSider(data) {
      dispatch({ type: 'nfapp/toggleSider', payload: data })
    }
  }

  return (
		<div className={styles.body} >{loginStatus
        ? <Layout {...headerProps} {...siderProps} />
        : <Login {...loginProps} />}</div>
  );
}

Nfapp.propTypes = {
  // children: PropTypes.element.isRequired,
  // location: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  nfapp: PropTypes.object.isRequired
}

export default connect(({ nfapp }) => ({ nfapp }))(Nfapp)
