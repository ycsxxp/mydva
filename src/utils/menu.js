module.exports = [
  {
    key: 'home',
    name: '首页',
    icon: 'laptop',
    child: [
      {
        key: 'status',
        name: '状态'
      },
      {
        key: 'event',
        name: '事件'
      }
    ]
  },
  {
    key: 'system',
    name: '系统',
    icon: 'laptop',
    child: [
      {
        key: 'account',
        name: '帐号管理',
        child: [
          {
            key: 'webAccount',
            name: '帐号管理'
          },
          {
            key: 'setparams',
            name: '参数设置'
          }
        ]
      },
      {
        key: 'cert',
        name: '证书管理'
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
