import { ReactNode } from "react";
import styles from "./styles.module.css"

import { useParams } from "react-router-dom";
import { openLink } from "../../../components/Components";
import { ProjectDetails, ProjectDatabase, TechnologyStack } from "../../../components/project-database/ProjectDatabase";


export function ProjectDetailsPage() {

    const id = useParams().id as string;

    const project: ProjectDetails = ProjectDatabase.getProjectByID(id) as ProjectDetails;
    const stack: TechnologyStack = project.stack;

    return <div className="page" id={styles["project-details-page"]}>
        <div id={styles["project-details-body"]}>
            <div id={styles["left"]}>

                <img src={project.image} alt="Project Sample" />
                <h1 style={{ fontSize: '2.5em' }}>{project.name}</h1>
                <div style={{marginTop: "1rem" }}></div>

                {
                    (() => {
                        if (typeof project.repoLink === 'string') {
                            return <a
                                target="_blank"
                                href={project.repoLink}
                            >
                                {project.repoLink || ''}
                            </a>
                        }
                        return project.repoLink;
                    })()
                }
                
                <div style={{ fontSize: '1em', marginTop: "1rem" }}>{project.desc}</div>
                <br />
                <BoldSectionHeader>Technology Stack</BoldSectionHeader>
                <br />

                <TechnologySection name="Languages: " items={stack.languages} />
                <TechnologySection name="Frameworks/Libraries: " items={stack.frameworksOrLibraries} />
                <TechnologySection name="Technologies: " items={stack.technologies} />
                <TechnologySection name="Others: " items={stack.others} />
            </div>



            <div id={styles["right"]}>
                <BoldSectionHeader>Summary:</BoldSectionHeader>
                <br />
                <div style={{ fontSize: '1em' }}>{project.longDesc ?? project.desc}</div>
                <br />
                {project.features ? <BoldSectionHeader>Features:</BoldSectionHeader> : ''}

                <br />
                <div style={{ fontSize: '1em' }}>{project.features ?? ''}</div>
                <div style={{ marginTop: "2rem" }}>&nbsp;</div>
            </div>
        </div>

    </div>
}

export function BoldSectionHeader({ fontSize, children }: { fontSize?: number | string, children?: ReactNode }) {
    return <h1 style={{ fontWeight: 550, fontSize: fontSize ?? "2em" }}>{children}</h1>
}

function TechnologySection({ name, items }: { name: string, items: string[] | undefined }) {
    if (items === undefined) {
        return <></>
    }

    return <div>
        <BoldSectionHeader fontSize={"1.5em"}>{name}</BoldSectionHeader>
        <p style={{ marginLeft: "1em" }}>
            {items.join(", ")}
        </p>
        <br />
    </div>

}