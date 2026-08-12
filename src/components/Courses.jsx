import {
  courseLabels,
  courses,
  courseSemesterOrder,
  sectionTitles,
  semesterLabels,
} from '../data/profile'
import './Courses.css'

// 学期IDごとに科目をグループ化する。courseSemesterOrder の順序で並べる。
function groupCoursesBySemester() {
  return courseSemesterOrder
    .map((semester) => ({
      semester,
      items: courses.filter((course) => course.semester === semester),
    }))
    .filter((group) => group.items.length > 0)
}

// 学科の授業。学期ごとにグループ化し、履修科目ごとに「学んだこと」
// 「関連する制作・活用例」「関連リンク」を一覧表示する。
function Courses() {
  const semesterGroups = groupCoursesBySemester()

  return (
    <section className="courses" id="courses" aria-labelledby="courses-heading">
      <div className="courses__inner">
        <h2 className="section-heading" id="courses-heading">
          {sectionTitles.courses}
        </h2>
        {semesterGroups.map((group) => (
          <div className="courses__semester-group" key={group.semester}>
            <h3 className="courses__semester-heading">{semesterLabels[group.semester]}</h3>
            <ul className="courses__grid">
              {group.items.map((course) => (
                <li className="course-card glass-panel" key={course.name}>
                  <h4 className="course-card__name">{course.name}</h4>
                  <div className="course-card__block">
                    <h5 className="course-card__block-title">{courseLabels.learning}</h5>
                    <p className="course-card__block-text">{course.learning}</p>
                  </div>
                  {course.application && (
                    <div className="course-card__block">
                      <h5 className="course-card__block-title">{courseLabels.application}</h5>
                      <p className="course-card__block-text">{course.application}</p>
                    </div>
                  )}
                  {course.link && (
                    <div className="course-card__block">
                      <a
                        className="course-card__link"
                        href={course.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {course.link.label}
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Courses
