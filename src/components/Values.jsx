import { sectionTitles, values } from '../data/profile'
import './Values.css'

// 大切にしていること（価値観カード3枚）
function Values() {
  return (
    <section className="values" id="values" aria-labelledby="values-heading">
      <div className="values__inner">
        <h2 className="section-heading" id="values-heading">
          {sectionTitles.values}
        </h2>
        <ul className="values__grid">
          {values.map((value) => (
            <li className="values__card glass-panel" key={value.title}>
              <h3 className="values__title">{value.title}</h3>
              <p className="values__description">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Values
