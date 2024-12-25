# 市内の危ない道・交差点などが分かるマップ
## 概要
このアプリは、事前に危険な箇所をマップで確認することで、少しでもリスクを下げられるようにすることと、交通事故に対する意識向上を目的として設計されました。

## 使用技術
> HTML
> 
> CSS
> 
> JavaScript

## 利用するオープンデータ
- **交通事故のデータ**
  - 警察庁の交通事故オープンデータ
    - https://www.npa.go.jp/publications/statistics/koutsuu/opendata/index_opendata.html
      - アクセスすると403エラーが発生するため、コピペ推奨
- **気象データ**
  - 気象庁
    - [最新の気象データ](https://www.data.jma.go.jp/stats/data/mdrr/index.html)
    - [過去の気象データ検索](https://www.data.jma.go.jp/stats/etrn/index.php)
    - [過去の気象データ・ダウンロード](https://www.data.jma.go.jp/risk/obsdl/index.php)

## デモリンク
https://fuyu-1110.github.io/2024-12-18/

## 今後の課題
- まだテスト段階であるため川口市のマップのみであるが、CSSやHTMLを用いて、アプリとしての機能の概要について記述していきたい。
- 危険箇所に応じたコラムを設定し、危険に対する意識向上に繋げる
- 出発地点と目的地を設定すると、危険箇所を避けたルートを提案してくれる機能「安全ルート」の実施。
- 天気別、条件別危険箇所の表示。
