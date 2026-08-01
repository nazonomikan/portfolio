import { useEffect, useRef, useState } from 'react'
import { navigation, ui } from '../data/profile'
import './Sidebar.css'

// 画面左上のハンバーガーボタンとサイドバーナビゲーション。
// 開閉状態はこのコンポーネント内で完結させ、Escapeキーとフォーカストラップに対応する。
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const firstLink = sidebarRef.current?.querySelector('a[href]')
    firstLink?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = sidebarRef.current?.querySelectorAll('a[href]')
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  function handleNavClick(event, id) {
    event.preventDefault()
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="sidebar-toggle glass-panel"
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        aria-label={isOpen ? ui.sidebarCloseLabel : ui.sidebarOpenLabel}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sidebar-toggle__bar" />
        <span className="sidebar-toggle__bar" />
        <span className="sidebar-toggle__bar" />
      </button>

      {isOpen && <div className="sidebar-overlay" aria-hidden="true" onClick={() => setIsOpen(false)} />}

      <nav
        id="sidebar-nav"
        ref={sidebarRef}
        className={isOpen ? 'sidebar glass-panel sidebar--open' : 'sidebar glass-panel'}
        aria-label={ui.sidebarNavLabel}
        inert={!isOpen}
      >
        <ul className="sidebar__list">
          {navigation.map((item) => (
            <li key={item.id}>
              <a className="sidebar__link" href={`#${item.id}`} onClick={(event) => handleNavClick(event, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
