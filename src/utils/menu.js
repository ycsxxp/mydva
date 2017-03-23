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
            key: 'account',
            name: '帐号管理'
          },
          {
            key: 'params',
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
    key: 'object',
    name: '对象',
    icon: 'camera-o',
    child: [
      {
        key: 'network',
        name: '网络',
        child: [
          {
            key: 'subnet',
            name: '子网'
          },
          {
            key: 'node',
            name: '节点'
          }
        ]
      },
      {
        key: 'application',
        name: '应用',
        child: [
          {
            key: 'application',
            name: '应用'
          },
          {
            key: 'customApp',
            name: '自定义应用'
          }
        ]
      }
    ]
  },
  {
    key: 'configWizard',
    name: '配置向导',
    icon: 'camera-o'
  }
]
