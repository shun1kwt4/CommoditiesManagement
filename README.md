# CommoditiesManagement
### 研究室の物品管理システム
- 実行手順
(1. `git clone https://github.com/shun1kwt4/CommoditiesManagement`でリモートリポジトリをローカルに持ってくる)
1. `git init`でローカルのreactの作業ディレクトリをgitと紐付け
2. `GUIから作業フォルダのファイルをステージング&コミット
3. `git remote add origin https://github.com/shun1kwt4/CommoditiesManagement.git`でリモートリポジトリと紐付け
- 開発手順
1. `git checkout -b ブランチ名`で必ずブランチを切る（必ずIssueを立て，【Assignees：担当者，labels：実装内容】を設定する）
2. `git add .`で変更内容をステージに上げる．
3. `git commit -m "コミットメッセージ"`はこまめに行う．（コミットメッセージ例：index.htmlの作成，○○機能の実装）
4. `git push origin 現在のローカルブランチ名`でリモートリポジトリにローカルリポジトリの内容を送信
5. `pull request`を出す
   - pull requestに詳細な実装内容を記載
   - pull requestにもAssigneesやlabelsを設定（推奨）
6. `merge`は相談して決定
7. `merge`後に`git checkout main`を実行し，ローカルブランチを`main`に変更
8. `main`ブランチにいることを確認した上で，`git pull origin main`を実行し，リモートブランチの内容をローカルブランチに取り込む
9. 手順1に戻り，新しいブランチを切る
