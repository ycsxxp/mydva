import React from 'react';
import { Row, Col, Button } from 'antd'
import styles from './Header.css';

function Header(props) {
	const { onAdd } = props

  return (
    <Row className={styles.normal} gutter={24} >
    	<Col span={6} offset={18} style={{ textAlign: 'right' }} >
      	<Button size="large" type="ghost" onClick={onAdd} >添加</Button>
      </Col>
    </Row>
  );
}

export default Header;
