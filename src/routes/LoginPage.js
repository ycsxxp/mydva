import React from 'react';
import { connect } from 'dva';
import LoginForm from '../components/Login/LoginForm.js';
import styles from './LoginPage.css';

function LoginPage() {
  return (
		<div className={styles.body}>
			<LoginForm />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LoginPage);
