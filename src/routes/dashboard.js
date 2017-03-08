import React from 'react';
import { connect } from 'dva';
// import { LocaleProvider } from 'antd';
// import styles from './IndexPage.css';
// import enUS from 'antd/lib/locale-provider/en_US';


// function Dashboard({ dashboard }) {
function Dashboard() {
  return (
  	<div>dashboard</div>
  	// <LocaleProvider locale={enUS}>
    	// <LayoutComponent />
    // </LocaleProvider>
  );
}

Dashboard.propTypes = {
};

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard);
