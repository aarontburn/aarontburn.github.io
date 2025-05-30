import { ReactNode } from 'react';
import { nexusAppDetails } from './projects/nexus-app';
import { nexusSiteDetails } from './projects/nexus-site';
import { linkedPadDetails } from './projects/linkedpad';
import { imageTransformationDetails } from './projects/image-transformation';
import { studySpaceSearchDetails } from './projects/study-space-search';
import { fantasyWordPrediction } from './projects/fantasy-word-prediction';



export interface ProjectDetails {
    id: string,
    name: string,
    desc: string,
    image: string,
    stack: TechnologyStack
    longDesc?: string | React.ReactNode,
    features?: string | React.ReactNode,
    repoLink?: string | ReactNode
}


export interface TechnologyStack {
    languages?: string[],
    frameworksOrLibraries?: string[],
    technologies?: string[],
    others?: string[]
}



const projects: ProjectDetails[] = [
    nexusAppDetails,
    nexusSiteDetails,
    linkedPadDetails,
    imageTransformationDetails,
    studySpaceSearchDetails,
    fantasyWordPrediction,

]

export class ProjectDatabase {

    public static getProjects(): ProjectDetails[] {
        return projects;
    }

    public static getProjectByID(id: string): ProjectDetails | undefined {
        for (const project of projects) {
            if (project.id === id) {
                return project;
            }
        }

        return undefined;
    }


}




