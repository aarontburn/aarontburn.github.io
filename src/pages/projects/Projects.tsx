import { VerticalSpacer } from '../../components/Components'
import { ProjectDatabase, ProjectDetails } from '../../components/project-database/ProjectDatabase'
import styles from './projects.module.css'


export function Projects({ changePage }: { changePage: (path: string) => void }) {
    return <>
        <div className="page" id={styles['projects-page']}>
            <div id={styles['projects-body']}>
                <VerticalSpacer size='1rem' />
                <h1 style={{ fontSize: '3rem' }}>Projects</h1>

                <div id={styles['project-outer-container']}>
                    {ProjectDatabase.getProjects().map(
                        project =>
                            <Project key={project.id} changePage={changePage} details={project} />)}
                </div>

            </div>
        </div>
    </>
}




function Project({ changePage, details }: { changePage: (path: string) => void, details: ProjectDetails }) {
    return <div>
        <div className={styles['project']} onClick={() => changePage("/projects/" + details.id)}>
            <div className={styles['project-image-container']}>
                <img src={details.image} alt={`Project '${details.name}' image.`} />

            </div>

            <div className={styles['project-info-container']}>
                <h1 className={styles['project-name']} style={{ fontSize: details.name.length > 15 ? "1rem" : "1.5rem" }}>{details.name}</h1>
                <p className={styles['project-desc']}>{details.desc}</p>
                <div className={styles['details-link']}>
                    <p>More Details</p>
                </div>
            </div>

        </div>
    </div>


}