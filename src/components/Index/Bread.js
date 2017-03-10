import React from 'react'
import { Breadcrumb, Icon } from 'antd'

import styles from './Bread.less'

import menuArray from '../../utils/menu'

let pathSet = []
const getPathSet = function (menuArray, parentPath) {
  parentPath = parentPath || ''
  menuArray.map(item => {
    pathSet[(parentPath + item.key).replace(/\//g, '-')] = {
      path: parentPath + item.key,
      name: item.name,
      icon: item.icon || ''
    }
    if (item.child) {
      getPathSet(item.child, parentPath + item.key + '/')
    }
    return true
  })
}
getPathSet(menuArray)


function Bread({ location }) {
	let pathNames = []
	location.pathname.substr(1).split('-').map((item, key) => {
		if(!item && key === 0) {
			return false
		}else {
			if(key > 0) {
	      pathNames.push(pathNames[key - 1] + '-' + item)
	    } else {
	      pathNames.push(item)
	    }
	    return true
		}
	})
	const breads = (pathNames.length > 0 ? pathNames : ['home', 'home-status']).map((item, key) => {
    if (!(item in pathSet)) {
      item = 'home'
    }
    return (
      <Breadcrumb.Item key={key} >
        {pathSet[item].icon
          ? <Icon type={pathSet[item].icon} />
          : ''}
        <span>{pathSet[item].name}</span>
      </Breadcrumb.Item>
    )
  })

	return (
		<div className={styles.divBread}>
			<Breadcrumb >
	      {breads}
	    </Breadcrumb>
	  </div>
	)
}

export default Bread
