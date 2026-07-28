import { contact, hero, sectionTitles } from '../data/profile'
import './Footer.css'

// 連絡先（フッター）
function Footer() {
  return (
    <footer className="footer" id="contact" aria-labelledby="contact-heading">
      <div className="footer__inner">
        <h2 className="section-heading" id="contact-heading">
          {sectionTitles.contact}
        </h2>
        <p className="footer__message">{contact.message}</p>
        <ul className="footer__links">
          <li>
            <a className="footer__link footer__link--accent" href={contact.emailHref}>
              {contact.email}
            </a>
          </li>
          <li>
            <a className="footer__link" href={contact.githubHref} target="_blank" rel="noreferrer">
              GitHub: {contact.github}
            </a>
          </li>
        </ul>
        <p className="footer__copyright">© {new Date().getFullYear()} {hero.name}</p>
      </div>
    </footer>
  )
}

export default Footer
