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
    title: '学内サークル向け備品予約Webアプリ',
    period: '2025年4月 - 2025年7月',
    team: '個人開発',
    summary:
      '紙の予約表で運用されていたサークル備品の貸し出しを、DB制約で二重予約を防ぐWebアプリに置き換えた個人プロジェクト。要件定義からデプロイまでを1人で担当した。',
    challenge:
      '所属する軽音サークルでは、練習室の機材（アンプ・マイク等）の予約を紙の台帳で管理していた。記入漏れによる予約の重複や、誰が今借りているか分からない状態が月に数回発生していた。',
    role: '要件定義・DB設計・フロントエンド/バックエンド実装・デプロイまでを1人で担当。',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'GitHub Actions', 'Vercel'],
    process: [
      { type: 'step', text: 'サークル員18名にヒアリングし、予約の重複が月平均3.2件発生していることを確認' },
      { type: 'step', text: '予約テーブルにユニーク制約を設け、同一機材・同一時間帯の予約をDBレベルで拒否する設計を採用' },
      {
        type: 'rejected',
        text: 'Firestoreでの実装を検討したが、排他制御をアプリ側で書く必要が生じ複雑化するためPostgreSQL＋トランザクションを選定',
      },
      { type: 'step', text: 'Node.js + ExpressでREST APIを実装し、React + TypeScriptでフロントエンドを構築' },
      { type: 'step', text: 'GitHub ActionsでCIを構築し、push時にLintとテストを自動実行するパイプラインを整備' },
      { type: 'step', text: 'リリース後2週間、Vercel Analyticsでレスポンスタイムと利用状況を観察し、遅いAPIにインデックスを追加' },
    ],
    results: [
      { label: '予約の重複発生件数', value: '月3.2件 → 0件', detail: 'DBのユニーク制約により技術的に発生不可能な設計に変更' },
      { label: 'APIレスポンスタイム', value: '平均120ms', detail: 'インデックス追加後、Vercel Analyticsで計測' },
      { label: '継続利用率', value: '89%', detail: 'サークル員18名中16名が1か月後も利用を継続' },
    ],
    learning:
      'アプリケーション側のロジックだけに頼らず、DBの制約でデータの整合性を保証する設計にすると、バグの作り込み自体を防げると実感した。',
  },
  {
    title: 'ハッカソン「防災みまもりマップ」バックエンド開発',
    period: '2025年9月（48時間ハッカソン）',
    team: 'チーム4名（バックエンド1名・フロントエンド2名・PM1名）',
    summary:
      '地域の防災情報を地図上で確認できるWebアプリを48時間で開発し、審査員特別賞を受賞したチーム制作。バックエンドAPIと検索性能の改善を担当した。',
    challenge:
      '高齢者や土地勘のない転入者にとって、避難所やハザードマップの情報が自治体サイトの中に埋もれていて探しにくいという課題が事前リサーチで見えていた。',
    role:
      'チームのバックエンド担当として、避難所検索APIの設計・実装、位置情報検索のパフォーマンス改善、Docker環境構築を担当。',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Docker', 'Leaflet.js'],
    process: [
      { type: 'step', text: '開始1時間でAPI仕様をフロントエンド担当とすり合わせ、避難所検索エンドポイントの入出力を確定' },
      {
        type: 'rejected',
        text: 'Firebaseでの実装を検討したが、現在地からの近傍検索クエリを直感的に書けるPostGIS拡張を優先しPostgreSQLを選定',
      },
      { type: 'step', text: 'FastAPIで避難所検索APIを実装し、PostGISの空間インデックスで現在地からの距離順ソートを実装' },
      { type: 'step', text: 'Docker Composeで開発環境を統一し、メンバー間の環境差異によるトラブルを解消' },
      { type: 'step', text: '残り6時間の時点でAPIレスポンスが500ms超と遅いことをログで発見し、空間インデックスを追加して改善' },
    ],
    results: [
      { label: '審査結果', value: '審査員特別賞（全12チーム中）', detail: '「短時間での検証と改善のプロセスが評価された」と講評をいただいた' },
      { label: 'APIレスポンスタイム', value: '500ms → 80ms', detail: '空間インデックス追加前後の計測比較' },
    ],
    learning:
      '時間が極端に短い開発でも、「遅い気がする」で止まらずログで実測してから直すことで、限られた時間内でも根拠のある改善ができると学んだ。',
  },
  {
    title: 'ゼミ出席管理Slack Bot',
    period: '2024年10月 - 2025年2月',
    team: 'ゼミ内チーム3名（自分含むエンジニア2名・運用1名）',
    summary:
      '紙の回覧板で行われていたゼミの出席確認を、Slack上のボタン操作で完結させ自動集計するBotを開発したゼミ活動。',
    challenge:
      'ゼミの出席確認が紙の回覧板で行われており、集計担当者が手作業でスプレッドシートに転記するため毎回30分程度かかっていた。転記ミスも月1回程度発生していた。',
    role: 'Bot本体の設計・実装、Google Sheets連携、デプロイパイプラインの構築を担当。',
    techStack: ['Python', 'Slack Bolt', 'Google Sheets API', 'GitHub Actions', 'Render'],
    process: [
      { type: 'step', text: 'Slackのボタン操作で出席登録し、スプレッドシートに自動反映される要件を運用担当と整理' },
      {
        type: 'rejected',
        text: 'Notion APIとの連携も検討したが、既存の集計フォーマットがスプレッドシートだったため互換性を優先しGoogle Sheets APIを採用',
      },
      { type: 'step', text: 'Slack Bolt for PythonでBotを実装し、Block Kitで出席登録用のボタンUIを作成' },
      { type: 'step', text: 'Google Sheets APIで出席データを自動集計するスクリプトを実装' },
      { type: 'step', text: 'GitHub ActionsでCIを構築し、Renderへの自動デプロイパイプラインを整備' },
      { type: 'step', text: '運用開始後にAPI呼び出しが多くレスポンスが遅い場面をログで確認し、集計結果のキャッシュを導入して改善' },
    ],
    results: [
      { label: '出席集計にかかる時間', value: '30分 → 0分', detail: '自動集計により手作業での転記が不要に' },
      { label: '運用期間中のエラー発生件数', value: '3か月間で0件', detail: 'GitHub Actionsでのテスト自動化とログ監視による' },
    ],
    learning:
      '外部API依存のツールは、動いているときより落ちたときの挙動（リトライ・ログ）を先に設計しておくことが信頼性に直結すると学んだ。',
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
      'C言語の基礎を学習した。最終レポートでは配列を使用した文字表示ライブラリの開発を行った。',
    application: '2Sのプログラミング演習（prog_r）に成果物あり。',
  },
  {
    name: '技術文書作成',
    semester: '1S',
    learning:
      'レポートの書き方を学習した。キャプションの書き方や構成方法などをLaTeXを使って学んだ。',
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
    date: '2024年6月',
    title: 'Webエンジニアインターンシップ（2週間）',
    description: 'スタートアップにて、既存プロダクトのバックエンドAPI改修とテストコード追加を経験。',
  },
  {
    date: '2024年10月',
    title: 'ゼミ出席管理Slack Bot 開発開始',
    description: 'Bot本体の実装とGoogle Sheets連携を担当し、2025年2月に運用開始。',
  },
  {
    date: '2025年4月',
    title: '学内サークル向け備品予約Webアプリを個人開発',
    description: '要件定義からDB設計・実装・デプロイまでを1人で担当し、7月にリリース。',
  },
  {
    date: '2025年9月',
    title: '学生ハッカソン「防災みまもりマップ」で審査員特別賞',
    description: 'チームのバックエンド担当としてAPI実装と検索性能の改善を担当。',
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
