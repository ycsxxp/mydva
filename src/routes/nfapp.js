import React, { PropTypes } from 'react';
import { connect } from 'dva';
// import { Spin } from 'antd';
import Layout from '../components/Index/Layout'
// import { classnames } from '../utils'
import Login from '../components/Login/login';
import styles from './nfapp.css';

function Nfapp({ dispatch, nfapp }) {
	const { loginStatus } = nfapp
	const loginProps = {
    // loading,
    // loginButtonLoading,
    doLogin(data) {
      dispatch({ type: 'nfapp/login', payload: data })
    }
  }
  return (
		<div className={styles.body} >{loginStatus
        ? <Layout />
        : <Login {...loginProps} />}</div>
  );
}

Nfapp.propTypes = {
  // children: PropTypes.element.isRequired,
  // location: PropTypes.object,
  dispatch: PropTypes.func,
  nfapp: PropTypes.object
}

export default connect(({ nfapp }) => ({ nfapp }))(Nfapp)
