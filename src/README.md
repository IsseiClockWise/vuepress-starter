---
home: true
---

# 開発手順

## 1. マニュアルを書き直したりする方法

- `npm run dev`を実行しながら開発を行う
- 編集するたびに内容が更新されていくので基本的には`npm run dev`は実行されながら使っていくこと
- マークダウン記法を使って記述する
- マークダウンの書き方については[VuePressの使い方](https://koro-vuepress.netlify.app/guide/markdown.html#%E7%94%BB%E5%83%8F)か[公式](https://vuepress.vuejs.org/guide/)を参考にするか、各ファイルの書き方を参考にすること

## 2. ホームページに反映させる方法
- `npm run build`をを実行する
- 所定のGitHubに変更を反映させる
- 実際にページにアクセスして変更内容が反映されているかチェックする
