# React Learning Course for beginners

React に関しての講義の講義内容の開発環境

## ディレクトリ構造

- 講義の回の番号と内容で分けています。
  - ex. 10-hooks → 第 10 回の hooks の講義の内容
- 授業が終わったときには、各回に対応した `-completed` のサフィックスがついたディレクトリの内容になっているはずです。
- 各回の開発環境は、 Docker 及び Docker Compose で用意しています。
- 講義回と関係のないバックエンドの API と DB はルートディレクトリに同じく `docker-compose.yml` を用意しています。

## 開発環境の起動

1. Docker Desktop を起動する。
2. ターミナル（もしくは PowerShell）を起動する。以後、ターミナル内でコマンドを入力していく。
3. 該当回のディレクトリに移動（`cd`)する。
4. `docker compose up -d` で起動する。
5. `docker compose ps -a` 等で各コンテナが起動していることを確認。
6. ブラウザで `http://localhost:3000` にアクセスして、アプリのページを見られることを確認。

## バックエンドの起動

1. Docker Desktop を起動する。
2. ターミナル（もしくは PowerShell）を起動する。以後、ターミナル内でコマンドを入力していく。
3. ルートディレクトリで `docker compose up -d` で起動する。
4. `docker compose ps -a` 等で各コンテナが起動していることを確認。
5. ブラウザで `http://localhost:4000/docs/` にアクセスして、 API のドキュメントが見られることを確認する。
6. ブラウザで `http://localhost:8081` にアクセスして、 Mongo DB の管理画面が見られることを確認する。
