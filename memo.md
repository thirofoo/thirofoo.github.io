# 今回した環境構築手順
### (9/4更新)
```bash
npx create-react-app {プロジェクト名} --template typescript   //新規プロジェクト作成

npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged  　//ESlintとprettierのインストール

npm uninstall huksy
npm install -D husky@4.3.8   //huskyの不具合がないversionに修正
```

.prettierrc , .eslintrc.jsの追加。
src・distディレクトリ作成＆index.html作成

tsconfigのbaseUrlの変更。

```bash
npm install --save @material-ui/core
npm install --save @material-ui/icons
//material-uiからfreeのテーマをgithubから奪い取る→propsが空とエラーが出るから適当に書く。
```

material-uiのテーマを引っ張ってくる。





