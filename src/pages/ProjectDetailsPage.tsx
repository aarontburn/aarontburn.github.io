import { ReactNode } from "react";
import { openLink } from "../components/Components";
import { ProjectDatabase, ProjectDetails, TechnologyStack } from "../components/ProjectDatabase";
import "./css/ProjectDetails.css"

import { useParams } from "react-router-dom";


export function ProjectDetailsPage(props: any) {

    const id = useParams().id as string;

    const project: ProjectDetails = ProjectDatabase.getProjectByID(id) as ProjectDetails;
    const stack: TechnologyStack = project.stack;

    return <div className="page" id="project-details-page">
        <div id="project-details-body">
            <div id="left">

                <img src={project.image} style={{ width: '100%' }} alt="Project Sample" />
                <h1 style={{ fontSize: '2.5em' }}>{project.name}</h1>
                <br/>
                {
                    (() => {
                        if (typeof project.repoLink === 'string') {
                            return <p
                                onClick={() => openLink(project.repoLink as string)}
                                style={{ color: 'blue', cursor: 'pointer' }}>
                                {project.repoLink || ''}
                            </p>
                        }
                        return project.repoLink;
                    })()
                }

                <br />
                <div style={{ fontSize: '1em' }}>{project.desc}</div>
                <br />
                <BoldSectionHeader>Technology Stack</BoldSectionHeader>
                <br />

                <TechnologySection name="Languages: " items={stack.languages} />
                <TechnologySection name="Frameworks/Libraries: " items={stack.frameworksOrLibraries} />
                <TechnologySection name="Technologies: " items={stack.technologies} />
                <TechnologySection name="Others: " items={stack.others} />
            </div>



            <div id="right">
                <BoldSectionHeader>Summary:</BoldSectionHeader>
                <br />
                <div style={{ fontSize: '1em' }}>{project.longDesc ?? project.desc}</div>
                <br />
                {project.features ? <BoldSectionHeader>Features:</BoldSectionHeader> : ''}
                
                <br />
                <div style={{ fontSize: '1em' }}>{project.features ?? ''}</div>
                <br />
                <br />
                <br />
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