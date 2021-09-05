# 今回した環境構築手順　
## ・create-react-appとmaterial-uiを用いた編
(本当はこれ+webpack & webpack-cliでまとめたかったがやり方わからず。)
### (9/5更新)
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

buildした後は/buildに入ってるindex.htmlをルートディレクトリに出して、パスを変更。
またhomepage名も変更。


## ・create-react-appを用いずに本格的なtypescriptをする編
(本当はこれにmaterial-uiを加えたかったが、やり方分からず。)
### (9/5更新)
```bash
git init   //git初期設定
npm init   //npm初期設定

npm install --save-dev ts-loader webpack-cli  //webpack-cliをインストール

npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged  　//ESlintとprettierのインストール

npm uninstall huksy
npm install -D husky@4.3.8   //huskyの不具合がないversionに修正

tsc --init   //tsconfig初期設定
```

webpack.config.js , .prettierrc , .eslintrc.jsの追加。

tsconfigのjsx,outDir,baseUrlの変更。

package.jsonのscript内部の編集。

src・distディレクトリ作成＆index.html作成


### ps
前者の環境にwebpack-cli,ts-loaderをインストールしようとすると、「create-react-appに存在するwebpackのバージョンより最新のバージョンのものを使ってしまうため駄目」みたいなエラー文が来て、設定しなおすように言われる。逆に後者の方にmaterial-uiの素材を入れると、何かが不足している(import出来ていない?)のかコンパイルの段階でエラーが起きる。


