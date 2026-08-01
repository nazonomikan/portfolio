import { courseLabels, courses, sectionTitles } from '../data/profile'
import './Courses.css'

// 学科の授業。履修科目ごとに「学んだこと」「関連する制作・活用例」を一覧表示する。
function Courses() {
  return (
    <section className="courses" id="courses" aria-labelledby="courses-heading">
      <div className="courses__inner">
        <h2 className="section-heading" id="courses-heading">
          {sectionTitles.courses}
        </h2>
        <ul className="courses__grid">
          {courses.map((course) => (
            <li className="course-card glass-panel" key={course.name}>
              <h3 className="course-card__name">{course.name}</h3>
              <div className="course-card__block">
                <h4 className="course-card__block-title">{courseLabels.learning}</h4>
                <p className="course-card__block-text">{course.learning}</p>
              </div>
              <div className="course-card__block">
                <h4 className="course-card__block-title">{courseLabels.application}</h4>
                <p className="course-card__block-text">{course.application}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Courses
