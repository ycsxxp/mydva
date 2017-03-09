import React, { PropTypes } from 'react';
import { connect } from 'dva';
// import { LocaleProvider } from 'antd';
// import styles from './IndexPage.css';
// import enUS from 'antd/lib/locale-provider/en_US';


// function Dashboard({ dashboard }) {
function Dashboard({ dashboard }) {
  return (
  	<div>dashboard</div>
  	// <LocaleProvider locale={enUS}>
    	// <LayoutComponent />
    // </LocaleProvider>
  );
}

Dashboard.propTypes = {
	dashboard: PropTypes.object.isRequire
};

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard);
