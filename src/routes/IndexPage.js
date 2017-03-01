import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import SiderComponent from '../components/Index/Sider.js';

function IndexPage() {
  return (
    <SiderComponent />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
