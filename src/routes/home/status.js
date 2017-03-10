import React, { PropTypes } from 'react';
import { connect } from 'dva';
// import { LocaleProvider } from 'antd';
// import styles from './IndexPage.css';
// import enUS from 'antd/lib/locale-provider/en_US';


// function Dashboard({ dashboard }) {
function Status({ status }) {
  return (
  	<div>status</div>
  	// <LocaleProvider locale={enUS}>
    	// <LayoutComponent />
    // </LocaleProvider>
  );
}

// Status.propTypes = {
// 	status: PropTypes.object.isRequire
// };

// export default connect(({ status }) => ({ status }))(Status);
export default Status;
