import { sectionTitles, skills } from '../data/profile'
import './Skills.css'

// できること（スキル）。バックエンド / フロントエンド / ツール・インフラの3カテゴリ。
// パーセントバーやレベル星は使わず、各項目を文章で表現する。
function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <div className="skills__inner">
        <h2 className="section-heading" id="skills-heading">
          {sectionTitles.skills}
        </h2>
        <div className="skills__grid">
          {skills.map((category) => (
            <div className="skills__category" key={category.key}>
              <h3 className="skills__category-title">{category.label}</h3>
              <ul className="skills__list">
                {category.items.map((item) => (
                  <li className="skills__item" key={item.name}>
                    <span className="skills__item-name">{item.name}</span>
                    <p className="skills__item-description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
