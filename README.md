# ポートフォリオサイト

UI/UXデザイナー志望の大学生向けポートフォリオサイト。React + Viteで構築し、GitHub Pagesで公開する。

## 技術構成

- React + Vite（`.jsx`、TypeScriptは不使用）
- 素のCSS（フレームワーク不使用）。色・余白・フォントサイズは `src/index.css` の `:root` にデザイントークンとして定義
- 外部フォントはGoogle Fonts（Inter + Noto Sans JP）のみ
- GitHub Actionsで `main` への push を検知し、GitHub Pagesへ自動デプロイ

## 編集方法

### テキスト・作品情報の編集

サイト内のテキスト（氏名・自己紹介・スキル・制作事例・経歴など）は、すべて `src/data/profile.js` に集約されている。**JSXファイルを直接編集する必要はない**。掲載内容を変えたい場合はこのファイルだけを編集する。

`src/data/profile.js` 内には、各データの書き方を説明する日本語コメントが入っている。特に制作事例（`projects`）は「課題・担当範囲・プロセス・成果・学び」の5ブロック構成を崩さないこと。

### デザイン（色・余白・フォントサイズ）の編集

`src/index.css` の `:root` にあるCSS変数（`--color-*` `--space-*` `--font-size-*` など）を変更する。各コンポーネントのCSS（`src/components/*.css`）はこれらの変数を参照しているため、トークンを変えるだけで全体の見た目が一貫して変わる。

### レイアウト構成（コンポーネント）を編集する場合

`src/App.jsx` が全体の骨組み。セクションごとのコンポーネントは `src/components/` にあり、上から順に以下のセクションに対応する。

| コンポーネント | セクション |
| --- | --- |
| `Hero.jsx` | ヒーロー（名前・肩書き・自己紹介） |
| `Values.jsx` | 大切にしていること |
| `Skills.jsx` | できること（スキル） |
| `Projects.jsx` | 制作事例 |
| `Timeline.jsx` | 経歴・活動 |
| `Footer.jsx` | 連絡先 |

### ローカルでの動作確認

```bash
npm install
npm run dev
```

`http://localhost:5173/` を開いて確認する。ビルド確認は以下。

```bash
npm run build
npm run preview
```

## 公開方法（GitHub Pages）

1. GitHubリポジトリの `Settings > Pages` で、Source を **GitHub Actions** に設定する（初回のみ）
2. `main` ブランチに push すると `.github/workflows/deploy.yml` が自動実行され、ビルド後にGitHub Pagesへデプロイされる
3. 公開URLは `https://<ユーザー名>.github.io/portfolio/` になる（`vite.config.js` の `base: '/portfolio/'` とリポジトリ名を一致させること）

リポジトリ名を変更した場合は、`vite.config.js` の `base` も同じ値に変更すること。
