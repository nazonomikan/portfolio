import { communityProjects, personalProjects, privateLabels, sectionTitles } from '../data/profile'
import './Private.css'

// プライベート。「大学自治体活動での制作物」と「個人プロジェクト」の2部構成で表示する。
function PrivateGroup({ headingId, title, items }) {
  return (
    <div className="private__group">
      <h3 className="private__group-title" id={headingId}>
        {title}
      </h3>
      <ul className="private__grid" aria-labelledby={headingId}>
        {items.map((item) => (
          <li className="private-card glass-panel" key={item.title}>
            <h4 className="private-card__title">{item.title}</h4>
            <p className="private-card__summary">{item.summary}</p>
            <div className="private-card__block">
              <h5 className="private-card__block-title">{privateLabels.techStack}</h5>
              <ul className="private-card__tech-list">
                {item.techStack.map((tech) => (
                  <li className="private-card__tech-tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {item.link && (
              <a
                className="private-card__link"
                href={item.link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.title}: ${item.link.label}`}
              >
                {item.link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Private() {
  return (
    <section className="private" id="private" aria-labelledby="private-heading">
      <div className="private__inner">
        <h2 className="section-heading" id="private-heading">
          {sectionTitles.private}
        </h2>

        <PrivateGroup
          headingId="private-community-heading"
          title={privateLabels.community}
          items={communityProjects}
        />
        <PrivateGroup headingId="private-personal-heading" title={privateLabels.personal} items={personalProjects} />
      </div>
    </section>
  )
}

export default Private
