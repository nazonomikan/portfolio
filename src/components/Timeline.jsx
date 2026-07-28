import { sectionTitles, timeline } from '../data/profile'
import './Timeline.css'

// 経歴・活動（年表形式）
function Timeline() {
  return (
    <section className="timeline" id="timeline" aria-labelledby="timeline-heading">
      <div className="timeline__inner">
        <h2 className="section-heading" id="timeline-heading">
          {sectionTitles.timeline}
        </h2>
        <ol className="timeline__list">
          {timeline.map((entry) => (
            <li className="timeline__item" key={entry.title}>
              <p className="timeline__date">{entry.date}</p>
              <div className="timeline__content">
                <h3 className="timeline__title">{entry.title}</h3>
                <p className="timeline__description">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Timeline
