module.exports = [
  {
    key: 'dashboard',
    name: '首页',
    icon: 'laptop'
  },
  {
    key: 'system',
    name: '系统管理',
    icon: 'laptop',
    child: [
      {
        key: 'account',
        name: '帐户管理'
      },
      {
        key: 'setparams',
        name: '参数设置'
      }
    ]
  },
  {
    key: 'ui',
    name: 'UI组件',
    icon: 'camera-o',
    clickable: false,
    child: [
      {
        key: 'ico',
        name: 'Ico 图标'
      },
      {
        key: 'search',
        name: 'Search 搜索'
      }
    ]
  },
  {
    key: 'navigation',
    name: '测试导航',
    icon: 'setting',
    child: [
      {
        key: 'navigation1',
        name: '二级导航1'
      },
      {
        key: 'navigation2',
        name: '二级导航2',
        child: [
          {
            key: 'navigation21',
            name: '三级导航1'
          },
          {
            key: 'navigation22',
            name: '三级导航2'
          }
        ]
      }
    ]
  }
]
