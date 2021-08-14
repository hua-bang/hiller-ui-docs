module.exports = {
  base: "/hiller-ui-docs/",
  title: 'Hiller UI Docs',
  description: 'A personal Vue.js 3.0 UI Toolkit.',
  head: [
    // 设置 描述 和 关键词
    [
      "meta",
      { name: "keywords", content: "A personal Vue.js 3.0 UI Toolkit." },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "A personal Vue.js 3.0 UI Toolkit.",
      },
    ],
  ],
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "介绍",
          children: [
            {
              text: "首页",
              link: "/"
            },
            {
              text: "更新日志",
              link: "/log/log"
            },
          ]
        },
        {
          text: "组件",
          children: [
            {
              text: "Button 按钮",
              link: "/component/button"
            },
            {
              text: "Message 消息框",
              link: "/component/message"
            },
            {
              text: "Switch 开关",
              link: "/component/switch"
            }
          ]
        }
      ]
    },
    author: "hua-bang",
    nav: [
      { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
      {
        text: "Github",
        link: "https://github.com/hua-bang/hiller-ui",
      }
    ],
  }
}