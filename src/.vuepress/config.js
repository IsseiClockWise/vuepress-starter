module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'VuePressの紹介',
      description: '開発方法を紹介いたします。',
    }
  },
  //HEADの設定は必要に応じて追加して下さい
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Aパターン', link: '/typeA' },
      { text: 'ONE', link: '/one.html' },
      { text: 'TWO', link: '/two.html' },

      { text: 'Bパターン', items: [
          { text: 'Bページ', link: '/typeB/' },
          { text: 'THREE', link: '/typeB/three.html' },
          { text: 'FOUR', link: '/typeB/four.html' },
        ]
      },
      { text: 'B2パターン', items: [
          { text: 'B2ページ', link: '/typeB2/' },
          { text: 'FIVE', link: '/typeB2/five.html' },
          { text: 'SIX', link: '/typeB2/six.html' },
        ]
      },

      { text: 'Cパターン',  items: [
          { text: 'Cホーム', link: '/typeC/' },
          { text: 'SEVEN', link: '/typeC/seven.html' },
          { text: 'EIGHT', link: '/typeC/eight.html' },
        ]
      },
    ],

    sidebar: {
      // Bパターン
      '/typeB/': ['','three','four'],
      '/typeB2/': ['', 'five', 'six'],

      // Cパターン
      '/typeC/':['','seven', 'eight'],

      '/': [
        {
          title: "Homeグループ",
          // collapsable: false,
          children: [
            ["/", "Home"],
            ["/one", "HomeグループONE"],
            ["/two", "HomeグループTWO"]
          ]
        },
        {
          title: "typeDグループ",
          // collapsable: false,
          children: [
            ["/typeD/nine", "DグループNINE"],
            ["/typeD/ten", "DグループTEN"]
          ]
        },
      ]
    },

    plugins: ['@vuepress/back-to-top'],

    markdown: {
      // #を消す場合(必要に応じて追加して下さい)
      anchor: { permalink: false },
      // [[toc]]を使って目次を表示する時にh2までにする設定(必要に応じて追加して下さい)
      toc: { includeLevel: [1, 2] },
      extendMarkdown: md => {
        md.use(require('markdown-it-mark'))
      }
    },
  },
}