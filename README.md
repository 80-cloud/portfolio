# portfolio — 制作物ポートフォリオ

未経験からエンジニアを目指す **hideharu** の制作物をまとめた、データ駆動のポートフォリオサイトです。
各作品を「解きたかった課題・強み・技術・公開先」で見られるようにしています。

中心に使う技術は **Java / Spring Boot / React / PostgreSQL**。
とくに **アプリの「認可・安全性」の設計** と、**AWS 上での運用（無料枠・IaC）** に力を入れています。

> **▶ ライブデモ（登録不要で操作できます）**
> 主役の **review-board** は本番稼働中で、そのまま触れます → **https://review-board-jp.duckdns.org**
> ログイン画面の「🐬 デモアカウントで試す（登録不要）」から、登録なしで全機能を操作できます。

---

## 主な制作物

| 作品 | 概要 | ライブ / 詳細 |
|---|---|---|
| **review-board** | 相互レビューコミュニティ。認可・安全性の設計を重点に、本番稼働まで到達（正規TLS・CI/CD・IaC） | [▶ ライブデモ（登録不要）](https://review-board-jp.duckdns.org) ・ [設計の詳細](docs/case-review-board.md) |
| **aws-zukan** | AWS サービスを部品表＋設計判断集として引ける図鑑 | [▶ 公開ページ](https://80-cloud.github.io/aws-zukan/) |

各作品の課題・強み・技術は、上のライブ／詳細から辿れます（作品カタログ `data/works.json` はローカル起動でも閲覧可）。

---

## 技術スタック（このサイト）

- **フロントエンド**: React 19 / Vite 6 / TypeScript / Tailwind CSS 4
- **データ**: `data/works.json`（作品カタログ。読み取りは `src/api` の 1 箇所に隔離）
- **CI**: GitHub Actions で用語チェック・データ整合チェックを実行

---

## ローカルで動かす

```bash
cd frontend
npm install
npm run dev      # http://localhost:5177
npm run build    # tsc --noEmit && vite build
```

作品を増やすときは `data/works.json` にエントリを 1 つ足すだけ（画面の改修は不要）。

---

## ライセンス

MIT
