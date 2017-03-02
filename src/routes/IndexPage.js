import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';

import LayoutComponent from '../components/Index/Layout.js';

function IndexPage() {
  return (
    <LayoutComponent />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
