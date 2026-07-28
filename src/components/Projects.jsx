import { projectLabels, projects, sectionTitles } from '../data/profile'
import './Projects.css'

// 制作事例。1件につき「課題・担当範囲・プロセス・成果・学び」の5ブロックを必ず表示する。
function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="projects__inner">
        <h2 className="section-heading" id="projects-heading">
          {sectionTitles.projects}
        </h2>
        <ul className="projects__list">
          {projects.map((project, projectIndex) => (
            <li className="project-card" key={project.title}>
              <article aria-labelledby={`project-${projectIndex}-heading`}>
                <header className="project-card__header">
                  <h3 className="project-card__title" id={`project-${projectIndex}-heading`}>
                    {project.title}
                  </h3>
                  <p className="project-card__meta">
                    {project.period} ／ {project.team}
                  </p>
                  <p className="project-card__summary">{project.summary}</p>
                </header>

                <div className="project-card__block">
                  <h4 className="project-card__block-title">{projectLabels.challenge}</h4>
                  <p className="project-card__block-text">{project.challenge}</p>
                </div>

                <div className="project-card__block">
                  <h4 className="project-card__block-title">{projectLabels.role}</h4>
                  <p className="project-card__block-text">{project.role}</p>
                </div>

                <div className="project-card__block">
                  <h4 className="project-card__block-title">{projectLabels.process}</h4>
                  <ul className="project-card__process">
                    {project.process.map((step, index) => (
                      <li
                        className={
                          step.type === 'rejected'
                            ? 'project-card__process-item project-card__process-item--rejected'
                            : 'project-card__process-item'
                        }
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                      >
                        {step.type === 'rejected' && (
                          <span className="project-card__process-badge">{projectLabels.rejectedBadge}</span>
                        )}
                        <span>{step.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__block">
                  <h4 className="project-card__block-title">{projectLabels.results}</h4>
                  <ul className="project-card__results">
                    {project.results.map((result) => (
                      <li className="project-card__result" key={result.label}>
                        <p className="project-card__result-value">{result.value}</p>
                        <p className="project-card__result-label">{result.label}</p>
                        <p className="project-card__result-detail">{result.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__block">
                  <h4 className="project-card__block-title">{projectLabels.learning}</h4>
                  <p className="project-card__block-text">{project.learning}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
