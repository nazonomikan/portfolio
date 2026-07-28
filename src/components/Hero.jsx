import { hero } from '../data/profile'
import './Hero.css'

// サイト唯一のh1（氏名）を含むヒーローセクション
function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <p className="hero__role">{hero.role}</p>
        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__bio">{hero.bio}</p>

        <dl className="hero__meta">
          {hero.meta.map((item) => (
            <div className="hero__meta-item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="hero__links">
          {hero.links.map((link) => (
            <li key={link.label}>
              <a
                className={link.accent ? 'hero__link hero__link--accent' : 'hero__link'}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Hero
