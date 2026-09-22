/**
 * サイト内のテキスト・作品情報を集約するデータファイル。
 *
 * ルール:
 * - JSX側にテキストを直書きしない。文言の変更は必ずこのファイルを編集する。
 *   セクション見出しやラベルなどの固定文言も含め、すべてここに置く。
 * - 以下の値は仮のサンプルデータ。就活で実際に使う際は、本人の実績・数値に置き換える。
 * - 数値実績（成果セクションの results）は「何を測ったか」が伝わる書き方にする。
 *   「頑張った」ではなく「何がどう変化したか」を書くこと。
 */

/* ------------------------------------------------------------------------
 * 共通UI文言（各セクションの見出し・固定ラベル）
 * ---------------------------------------------------------------------- */
export const ui = {
  skipLink: '本文へスキップ',
  sidebarOpenLabel: 'メニューを開く',
  sidebarCloseLabel: 'メニューを閉じる',
  sidebarNavLabel: 'サイト内ナビゲーション',
}

export const sectionTitles = {
  values: '大切にしていること',
  skills: 'できること',
  projects: '制作事例',
  courses: '学科の授業',
  timeline: '経歴・活動',
  private: 'プライベート',
  contact: '連絡先',
}

/* ------------------------------------------------------------------------
 * サイドバーのナビゲーションリンク。表示順・スクロール先アンカーをここで一元管理する。
 * id は各セクションコンポーネントの <section id="..."> の値と一致させること
 * （不一致だとサイドバーからスクロール遷移できなくなる）。
 * ---------------------------------------------------------------------- */
export const navigation = [
  { id: 'hero', label: 'トップ' },
  { id: 'values', label: sectionTitles.values },
  { id: 'skills', label: sectionTitles.skills },
  { id: 'projects', label: sectionTitles.projects },
  { id: 'courses', label: sectionTitles.courses },
  { id: 'timeline', label: sectionTitles.timeline },
  { id: 'private', label: sectionTitles.private },
  { id: 'contact', label: sectionTitles.contact },
]

// 制作事例カードの6ブロック見出し。「却下した案」はプロセス内のバッジ文言。
export const projectLabels = {
  challenge: '課題',
  role: '担当範囲',
  techStack: '技術スタック',
  process: 'プロセス',
  results: '成果',
  learning: '学び',
  rejectedBadge: '却下した案',
}

/* ------------------------------------------------------------------------
 * ヒーローセクション
 * name: 氏名
 * role: 一言の肩書き（〜字程度、検索されやすい職種名 + 自分の軸）
 * bio: 自己紹介。100〜150字を目安に、専門性・興味・スタンスが伝わるように書く
 * meta: 大学・卒業年月などのラベル付き情報（label/valueのペア）
 * links: 外部リンク。email は mailto: 形式で用意する。accent: true で強調ボタン表示
 * ---------------------------------------------------------------------- */
export const hero = {
  name: '佐土 駿',
  role: 'バックエンド志向のWebアプリケーションエンジニア / 情報工学専攻',
  bio: '「動けば良い」で終わらせず、なぜそう設計したかを説明できるコードを書くことを心がけています。個人開発ではDB設計からAPI実装・デプロイまでを一気通貫で担当し、ハッカソンではチームのバックエンドを担当してきました。計測してから直す、が信条です。',
  meta: [
    { label: '所属', value: '○○大学 情報工学部 情報工学科' },
    { label: '卒業', value: '2027年3月 卒業予定' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/nazonomikan', external: true },
    { label: 'メールで連絡する', href: 'mailto:example@example.com', accent: true },
  ],
}

/* ------------------------------------------------------------------------
 * 大切にしていること（価値観カード3枚）
 * title: 短いキーワード
 * description: なぜそう考えるか、1〜2文で
 * ---------------------------------------------------------------------- */
export const values = [
  {
    title: '動くコードより、壊れないコードを書く',
    description:
      '思いつきで動かすより先にテストを書き、後から仕様変更が来ても安心して直せる状態を保つことを優先しています。',
  },
  {
    title: '却下した案も記録する',
    description:
      'なぜその実装方針をやめたのかをコミットメッセージやPRに残しておくと、後から同じ議論が蒸し返されずチームの意思決定が速くなると学びました。',
  },
  {
    title: '計測してから直す',
    description:
      '「遅い気がする」で終わらせず、ログや計測ツールで実際のボトルネックを特定してからコードを変更することを習慣にしています。',
  },
]

/* ------------------------------------------------------------------------
 * できること（スキル）
 * 「バックエンド / フロントエンド / ツール・インフラ」の3カテゴリを配列で表現する。
 * 注意: パーセントバーやレベル星などの抽象的な習熟度表現は使わない。
 * 各項目は「使用歴＋具体的に何をやったか」の一文で表現すること。
 * 例: 「Node.js歴2年。REST APIの設計・実装を担当し、
 *      PostgreSQLとのトランザクション制御を含む予約システムを構築した」
 * ---------------------------------------------------------------------- */
export const skills = [
  {
    key: 'backend',
    label: 'バックエンド',
    items: [
      {
        name: 'Node.js / Express',
        description:
          '使用歴2年。REST APIの設計・実装を担当し、予約アプリではDBのユニーク制約とトランザクションで排他制御を実装した。',
      },
      {
        name: 'Python / FastAPI',
        description:
          'ハッカソンでバックエンドAPIを担当。PostGISを用いた位置情報の近傍検索クエリを実装し、レスポンスタイムを500msから80msに改善した。',
      },
      {
        name: 'データベース設計',
        description:
          'PostgreSQLでのテーブル設計・正規化・インデックス設計を経験。予約システムでは重複予約をDB制約レベルで防止する設計を採用した。',
      },
    ],
  },
  {
    key: 'frontend',
    label: 'フロントエンド',
    items: [
      {
        name: 'React / TypeScript',
        description:
          '実装歴1年半。型安全性を意識したコンポーネント設計を行い、個人開発アプリのフロントエンド全体を1人で実装した。',
      },
      {
        name: 'HTML / CSS',
        description:
          '制作歴3年。レスポンシブ対応のマークアップとFlexbox/Gridを用いたレイアウト実装を自作サイト・個人開発案件で継続的に行っている。',
      },
      {
        name: 'API連携・状態管理',
        description:
          'React Queryを用いたサーバー状態のキャッシュ管理を導入し、不要な再フェッチを削減してAPIコール数を抑えた。',
      },
    ],
  },
  {
    key: 'tools',
    label: 'ツール・インフラ',
    items: [
      {
        name: 'Git / GitHub',
        description:
          'ブランチ運用・プルリクエストベースの開発を個人開発・チーム開発の両方で実践し、レビューコメントを踏まえた修正を継続的に行っている。',
      },
      {
        name: 'Docker',
        description:
          'ハッカソンでチームの開発環境をDocker Composeで統一し、メンバー間の「自分の環境では動く」問題を解消した。',
      },
      {
        name: 'GitHub Actions（CI/CD）',
        description:
          'push時にテストとLintを自動実行するCIパイプラインを構築し、個人開発アプリではデプロイまで自動化した。',
      },
    ],
  },
]

/* ------------------------------------------------------------------------
 * 制作事例（3件）
 * 各作品は次の6ブロックを必ず含める:
 *   challenge  課題     : 誰の・どんな困りごとだったか
 *   role       担当範囲  : チーム制作なら自分の担当を明示する
 *   techStack  技術スタック: 使用した言語・フレームワーク・ツールを配列で列挙
 *   process    プロセス  : 箇条書き。type: 'step' が通常の手順、
 *                          type: 'rejected' が却下した案。却下理由も書く
 *   results    成果     : 数値実績を目立たせる。label/value/detail の3点セット
 *   learning   学び     : この案件から得た学び
 * ---------------------------------------------------------------------- */
export const projects = [
  {
    title: 'ちばオープンデータハッカソン2026「景観100選スタンプラリー」開発',
    period: '2026年8月 - 2026年9月（ちばオープンデータハッカソン2026）',
    team: 'チーム「loveTAKE」5名（開発メイン2名・サポート3名）。開発メインの1人として参加。',
    summary:
      '市川市の景観100選オープンデータを使い、スポットに設置したQRコードとGPSでスタンプを集めるWebアプリ。開発メインの1人としてフロントエンド全体とDocker/Flask基盤の構築、デモ動画撮影に向けた環境整備を担当した。',
    challenge:
      '市川市の景観100選スポットが観光客・市内在住者にあまり周遊されていないという地域課題に対し、オープンデータ（景観100選）を使ってQRコード＋GPSのスタンプラリーで周遊のきっかけを作るというテーマでの開発だった。',
    role:
      '開発メイン2名体制のうちの1人として、フロントエンド（ホーム・地図・QRスキャン・スタンプ帳・ランキング・ログイン・プロフィール・掲示板の8画面）の実装とDocker/Flask基盤構築を主担当。加えてバックエンドの副担当、スタンプ画像生成ツールの作成、デモ動画撮影に向けたHTTPS対応・環境整備を担当した。',
    techStack: [
      'Flask (Python 3.12)',
      'MySQL 8',
      'Jinja2',
      'Vanilla JavaScript',
      'Leaflet.js',
      'html5-qrcode',
      'Docker Compose',
      'pytest',
    ],
    process: [
      { type: 'step', text: 'Docker Compose（web+dbの2サービス構成）とFlaskアプリの雛形を構築し、開発環境をチームで共通化' },
      {
        type: 'rejected',
        text: 'フロントエンドはReact/Vueも検討したが、画面数が8画面程度でSPA化のメリットが薄くビルドツールチェーンの構築コストが見合わないと判断し、Jinja2＋Vanilla JSのサーバーサイドレンダリングを採用',
      },
      { type: 'step', text: 'ホーム・地図・QRスキャン・スタンプ帳・ランキングの5画面を新設し、Leaflet.jsとhtml5-qrcodeを組み込んだフロントエンド基盤を構築' },
      { type: 'step', text: '地図画面にスポットピン・混雑度の色分け・凡例を実装' },
      { type: 'step', text: 'QRスキャン画面でカメラ読み取り結果とGeolocationの座標をAPIへ送信する連携を実装。GPS精度100m超・位置情報拒否時はAPI送信前にフロント側でブロックし、通信エラー時は再試行導線を用意' },
      { type: 'step', text: 'スマホ実機でのカメラ権限取得にHTTPS（Secure Context）が必須という制約に対応するため、自己署名証明書によるHTTPSをDocker環境に追加し、カメラ非対応環境向けのQRトークン手入力フォールバックも実装' },
      { type: 'step', text: '景観写真をスタンプ画像に変換する2値化着色生成ツールを自作し、100スポット分のスタンプ画像を用意' },
    ],
    results: [
      { label: '実装画面数', value: '8画面', detail: 'ホーム・地図・QRスキャン・スタンプ帳・ランキング・ログイン・プロフィール・掲示板を実装' },
      { label: 'APIテスト', value: '63件中62件パス', detail: 'pytestでルート単位のAPIテストを整備。失敗1件はテストフィクスチャ側の既知の非関連バグ' },
      { label: 'スタンプ画像', value: '99種類を自動生成', detail: '景観写真を2値化着色するツールを自作し、手作業なしで用意' },
    ],
    learning:
      '複数人が並行して開発すると同じ機能領域のAPIが重複実装される場面を経験し、インターフェース（画面とAPIのつなぎ目）を早い段階で文書化して合意しておくことの重要性を実感した。',
  },
]

/* ------------------------------------------------------------------------
 * 学科の授業（12科目、学期ごとにグループ表示）
 * 各科目は次の項目を持つ:
 *   name        科目名
 *   semester    学期ID: '1S'(1年前期) / '2S'(1年後期) / '3S'(2年前期)。
 *               semesterLabels のキーと一致させること
 *   learning    学んだこと    : 何を扱い、何が身についたかを書く
 *   application 関連する制作・活用例（任意）: その学びを制作事例や他学期の
 *               成果物で実際にどう使ったか。ない場合は省略可
 *   link        関連リンク（任意）: { label, href } 形式。外部の制作物URLなど
 * ---------------------------------------------------------------------- */
export const courseLabels = {
  learning: '学んだこと',
  application: '関連する制作・活用例',
  link: '関連リンク',
}

// 学期の表示順（時系列順）。Courses.jsx側のグループ化で参照する。
export const courseSemesterOrder = ['1S', '2S', '3S']

export const semesterLabels = {
  '1S': '1年前期',
  '2S': '1年後期',
  '3S': '2年前期',
}

export const courses = [
  {
    name: 'フィジカルコンピューティング',
    semester: '1S',
    learning: '回路設計とArduinoのプログラミングを学習した。',
    application: 'Tinkercadでの回路シミュレーション制作に取り組んだ。',
    link: {
      label: 'Tinkercadで回路シミュレーションを見る',
      href: 'https://www.tinkercad.com/things/5RNwePJzxCg-/editel?sharecode=ATr413Ri9k7duJB_0Eh8leg4M-cWVKJ0508uGTHvIFY',
    },
  },
  {
    name: 'プログラミング言語',
    semester: '1S',
    learning:
      'C言語を配列まで学習した。最終レポートでは、C言語で配列を用いた文字表示ライブラリを制作した。',
    application: '2Sのプログラミング演習（prog_r）に成果物あり。',
  },
  {
    name: '技術文書作成',
    semester: '1S',
    learning:
      '仕様書や報告書の書き方を学習した。キャプションの書き方や構成方法などをLaTeXを使って学んだ。',
    application: 'レポート作成スキルは以降の全レポートに活用している。',
  },
  {
    name: 'アイディアソン',
    semester: '1S',
    learning: 'アイデア発想法やプレゼンテーション手法を学習した。',
    application: '2Sのアイディアソン（ideathon）に成果物あり。',
  },
  {
    name: '電気回路',
    semester: '1S',
    learning:
      '回路設計や手書きレポートを通じてオシロスコープの操作方法などを学習した。',
    application: '実験レポートの作成に活かした。',
  },
  {
    name: 'アジャイルワーク',
    semester: '2S',
    learning: 'アジャイル開発手法を学習した。',
  },
  {
    name: 'Webプログラミング',
    semester: '2S',
    learning: 'Webアプリケーション開発の基礎を学習した。',
  },
  {
    name: 'データ通信',
    semester: '2S',
    learning: 'データ通信の基礎理論と実践を学習した。',
  },
  {
    name: 'ハッカソン1',
    semester: '3S',
    learning: 'チーム開発によるプロダクト制作を経験した。',
  },
  {
    name: 'クラウドコンピューティング',
    semester: '3S',
    learning: 'クラウド環境の構築・運用を学習した。',
  },
  {
    name: 'ソフトウェア工学',
    semester: '3S',
    learning: 'ソフトウェア開発プロセスと設計手法を学習した。',
  },
  {
    name: 'ビジュアル情報処理',
    semester: '3S',
    learning: '画像処理・コンピュータグラフィックスの基礎を学習した。',
  },
]

/* ------------------------------------------------------------------------
 * 経歴・活動（年表形式）
 * date: 表示用の年月（例: '2025年4月'）
 * title: できごとの見出し
 * description: 補足説明（1文程度）
 * ---------------------------------------------------------------------- */
export const timeline = [
  {
    date: '2023年4月',
    title: '○○大学 情報工学部 入学',
    description: 'プログラミング基礎とアルゴリズム・データ構造を学ぶ学部に進学。',
  },
  {
    date: '2026年9月',
    title: 'ちばオープンデータハッカソン2026「景観100選スタンプラリー」開発',
    description: 'チーム「loveTAKE」の開発メインの1人としてフロントエンド全体とDocker/Flask基盤構築を担当。',
  },
  {
    date: '2027年3月',
    title: '○○大学 卒業見込み',
    description: '卒業研究では「Webアプリケーションにおける排他制御の設計パターン」をテーマに取り組み中。',
  },
]

/* ------------------------------------------------------------------------
 * プライベート
 * 「大学自治体活動での制作物」「個人プロジェクト」の2サブセクションを持つ。
 * 各項目は次の4項目を含める:
 *   title    タイトル
 *   summary  概要        : 何を・なぜ作ったか。1〜2文
 *   techStack 技術スタック : 使用した言語・フレームワーク・ツールを配列で列挙
 *   link     リンク（任意）: { label, href } または未公開の場合は null
 * ---------------------------------------------------------------------- */
export const privateLabels = {
  community: '大学自治体活動での制作物',
  personal: '個人プロジェクト',
  techStack: '技術スタック',
}

// サークル・学生会など、大学の自治体活動の中で技術面を担当した制作物
export const communityProjects = [
  {
    title: '学生会 総会議事録アーカイブサイト',
    summary:
      '過去の総会議事録がPDFのまま学生会内のドライブに散在していたため、年度・議題で検索できる静的サイトを広報担当として構築した。',
    techStack: ['Astro', 'Markdown', 'GitHub Pages'],
    link: null,
  },
  {
    title: '学園祭 模擬店シフト管理システム',
    summary:
      '実行委員会の模擬店担当として、紙のシフト表で毎年発生していた重複割当をなくすため、Googleフォームと連携したシフト自動集計の仕組みを構築した。',
    techStack: ['Google Apps Script', 'Googleスプレッドシート'],
    link: null,
  },
]

// 完全プライベートで作った個人プロジェクト（趣味の開発・OSS貢献など）
export const personalProjects = [
  {
    title: '読書メモ管理CLIツール',
    summary:
      '読んだ技術書のメモをMarkdownで残し、タグ検索できる自作CLIツール。自分の学習ログを一元管理する目的で開発した。',
    techStack: ['Go', 'SQLite'],
    link: { label: 'GitHub', href: 'https://github.com/nazonomikan/reading-notes-cli' },
  },
  {
    title: 'OSSライブラリへのドキュメント修正コントリビュート',
    summary:
      '普段使っているOSSライブラリのREADMEに誤りを見つけ、Issue報告とPull Requestで修正を行った。',
    techStack: ['Markdown'],
    link: null,
  },
]

/* ------------------------------------------------------------------------
 * 連絡先（フッター）
 * ---------------------------------------------------------------------- */
export const contact = {
  message: 'ポートフォリオへの感想、選考に関するご連絡など、お気軽にご連絡ください。',
  email: 'example@example.com',
  emailHref: 'mailto:example@example.com',
  github: 'nazonomikan',
  githubHref: 'https://github.com/nazonomikan',
}
