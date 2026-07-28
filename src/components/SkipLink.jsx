import { ui } from '../data/profile'

// キーボード操作者がナビゲーションを飛ばして本文へ移動できるようにするリンク。
// 通常は非表示で、フォーカスされたときだけ画面上部に表示される。
function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      {ui.skipLink}
    </a>
  )
}

export default SkipLink
