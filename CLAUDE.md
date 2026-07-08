# CLAUDE.md — portfolio 開発ルール

個人開発の制作物を、ケーススタディ＋外部リンクで見せるデータ駆動のポートフォリオサイト。
各アプリ本体のコードは再掲せず、作品ごとの「強み」と公開先へ導線を張る。
このファイルは作業時に必ず守るルールをまとめる。

---

## 1. ブランチ・PR

- 作業前に Issue を作成し、番号をブランチ名に含める（例: `feature/#3-work-detail`）。
- `main` への直接 push は禁止。必ず PR 経由・Squash merge。マージは本人。
- コミットメッセージは Conventional Commits 形式・日本語（`feat:` `fix:` `docs:` `chore:` 等）。

## 2. ドキュメント・データの扱い

- 作業中の下書き・個人メモは `*.local.md` に置く。これらは `.gitignore` 済みで**公開リポに出さない**。
- 公開する `README.md` と `data/*.json` は、**普通の一般的な言葉**で書く。独自の言い回しを持ち込まない。
- 用語チェックは `scripts/docs-lint.sh` が pre-commit と CI（`.github/workflows/docs-lint.yml`）で自動実行する。
  - 初回のみ `bash scripts/install-hooks.sh` でフックを導入する。

## 3. 作品データの記入原則（盛らない）

- **確認できることだけ書く**。本番稼働・CI・テスト網羅など、検証できる事実に絞る。
- 「最強／完璧／一択」などの断定語を使わない（`scripts/check-data.mjs` が検出する）。
- 開けない URL は貼らない。`status` が `live` のものだけ `links.live` を持たせる。
- 本番の識別子（IP アドレス・アカウント ID・個人メール・ドメイン等）を本文・スクショに入れない。
- スクショはデモ用の架空データで撮り、公開前にメタデータを除去する。

## 4. 安全

- 破壊的な git 操作（削除・force push 等）は人の承認を挟む。AI 単独で完結させない。
- `.env` や認証情報をコミットしない。

---

## ディレクトリ

```
portfolio/
├── data/     works.json（作品カタログ＝唯一のデータ源）
├── frontend/ React + Vite + TypeScript + Tailwind（src/api がデータ読取を隔離）
└── scripts/  docs-lint.sh（用語チェック）／ install-hooks.sh ／ check-data.mjs
```
