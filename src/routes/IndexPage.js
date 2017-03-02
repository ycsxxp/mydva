import React from 'react';
import { connect } from 'dva';
import { LocaleProvider } from 'antd';
// import styles from './IndexPage.css';
// import enUS from 'antd/lib/locale-provider/en_US';

import LayoutComponent from '../components/Index/Layout.js';

function IndexPage() {
  return (
  	// <LocaleProvider locale={enUS}>
    	<LayoutComponent />
    // </LocaleProvider>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
