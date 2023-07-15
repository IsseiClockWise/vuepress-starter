module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'yaaaaa',
      description: 'ノーコード、無料で専用マニュアルが作れます',
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
    ],
    sidebar: ['/','/one','/two',['/typeA', 'Aパターン']],　
  },
  // ここからもう少し追加します
}