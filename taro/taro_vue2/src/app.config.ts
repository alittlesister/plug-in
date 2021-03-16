export default {
  pages: ['pages/index/index', 'pages/add/index'],
  tabBar: {
    color: '#2A2A2A',
    selectedColor: '#FF9232',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
      },
      {
        text: '添加',
        pagePath: 'pages/add/index',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
};
