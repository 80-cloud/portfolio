# portfolio — 制作物ポートフォリオ

未経験からエンジニアを目指す **hideharu** の制作物をまとめた、データ駆動のポートフォリオサイトです。
各作品を「解きたかった課題・強み・技術・公開先」で見られるようにしています。

中心に使う技術は **Java / Spring Boot / React / PostgreSQL**。
とくに **アプリの「認可・安全性」の設計** と、**AWS 上での運用（無料枠・IaC）** に力を入れています。

---

## 主な制作物

| 作品 | 概要 | 状態 |
|---|---|---|
| **review-board** | 相互レビューコミュニティ。認可・安全性の設計を重点に、本番デプロイまで到達 | 本番デプロイ済み |
| **aws-zukan** | AWS サービスを部品表＋設計判断集として引ける図鑑。[公開中](https://80-cloud.github.io/aws-zukan/) | 公開中 |

作品の一覧・詳細・強みはサイト上で見られます（下記の「公開」）。

---

## 技術スタック（このサイト）

- **フロントエンド**: React 19 / Vite 6 / TypeScript / Tailwind CSS 4
- **データ**: `data/works.json`（作品カタログ。読み取りは `src/api` の 1 箇所に隔離）
- **CI / 公開**: GitHub Actions で用語チェック・データ整合チェックを行い、`main` への反映で GitHub Pages へ自動公開

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

## 公開

GitHub Pages で公開します（Settings → Pages → Source = GitHub Actions）。
`main` への push で `.github/workflows/deploy.yml` がビルド・公開します。

## ライセンス

MIT
