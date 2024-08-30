Notionで編集した内容をローカル環境でAPI経由で取得し、静的ページを作成します。
## 大まかな流れ
1.環境構築
2.Notion編集
3.ローカル環境で静的ページを作成
4.vercelでdeployして本番環境に

## 環境構築
### ソースコードをローカルにクローン
ターミナルでこちらを実行してください。（macなら標準でgitがインストールされているが、Windowsは自分でやらないとダメかも）
```
git clone git@github.com:arizonagakuenschool/official.git
```

ターミナルでcloneしたディレクトリに移動して以下の内容を実行します。
インストール
```bash
npm install
# or
yarn
```

ローカル環境起動
```bash
npm run dev
# or
yarn dev
```
起動できたら　[http://localhost:3000](http://localhost:3000) にアクセスすると画面が表示されます。
この環境はローカルでの威動くものであり、本番とは関係がありません。
修正した内容が正しく編集できているか確認できます。

### googleアカウント
arizonagakuendeveloper@gmail.com　を作成済み。パスワードは後日共有（いつものデュオ＝＞みなみ）
必要があれば編集者ごとに作成する。

### githubアカウントを作成
arizonagakuendeveloper@gmail.comで作成済み。Googleアカウントでログインできるようになっている。


### githubのsshキー設定
変更があった時にその内容をgithubに反映できるようにする。
これを設定した人しか変更内容を反映できません。またセキュリティ上の問題があるので、編集者それぞれがこの作業を実施してください。
必要があれば編集者ごとにアカウントを作成して、リポジトリを共有してください。

以下の方法に従ってSSHキーを作成します。
https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

ターミナルを起動して以下を実行します。
```
ssh-keygen -t ed25519 -C "githubに登録したメールアドレス"
```
実行するとファイル名（ここではgithub＿sshとします）を指定して作成。作成時にパスワード入力が求められます。

次に.ssh/configに以下の内容を追加
ターミナルで
```
cd ~/.ssh
```
とすると、移動先にconfigファイルがあります。このファイルに以下の内容を追記してください。
（github＿sshの部分はご自身で設定したファイル名）
```
Host github github.com
  HostName github.com
  User git
  Port 22
  IdentityFile ~/.ssh/github＿ssh
  IdentitiesOnly yes
```


ターミナルで以下のコマンドを実行して作成したキーをコピーしてください。（github＿sshの部分はご自身で設定したファイル名）
末尾に「.pub」をつけるのを忘れないでください。
```
pbcopy < ~/.ssh/github＿ssh.pub
```

githubの設定画面に遷移
https://github.com/settings/keys

「new SSH key」を押してコピーしたキーを追加（名前はなんでも）
成功すれば追加されているはずです。

### Notionの設定
アカウントはarizonagakuendeveloper@gmail.comで作成済み。Googleアカウントでログインできるようになっている。


Notion APIのシークレットキーを作成します
https://www.notion.so/profile/integrations
ここらか「新しいインテグレーション」を選択し、情報を入力してら保存してください。
内部インテグレーションシークレットと表示されている箇所があるので、表示してコピーします。

secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

このような形式であるはずです。
これをコピーしておきましょう。

### ソースコードの修正
プロジェクト直下「.env.local」ファイルを作成してください。（新規ファイル作成でファイル名を「.env.local」とすればいいです）
作成したら以下のように`NEXT_PUBLIC_NOTION_TOKEN`に先ほど取得したシークレットキーを設定します
```
NEXT_PUBLIC_NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
これでNotionの内容をローカル環境で読み取ることができるようになります。

### Notionの情報編集



### deploy

```bash
yarn deploy
```

### analitics
以下の記事を参考に実装でできた
https://zenn.dev/rh820/articles/8af90011c573fe

https://analytics.google.com/
Search Consoleも登録
https://search.google.com/search-console

### sitemap

```bash
yarn build 
```
でsitemap作成される。これを実施後にdeployすればOK


### ads
https://www.google.com/adsense/


