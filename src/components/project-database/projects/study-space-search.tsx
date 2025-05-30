import { Bold, List } from "../../Components";
import studySpaceSearchImage from '../images/studyspacesearchlogo.png';
import { ProjectDetails } from "../ProjectDatabase";



export const studySpaceSearchDetails: ProjectDetails = {
    id: 'studyspacesearch',
    name: "Study Space Search",
    desc: "Locate and discover study locations around the University of Washington campus.",
    image: studySpaceSearchImage,
    stack: {
        languages: ["JavaScript", "SQL", "PHP", "HTML", "CSS"],
        technologies: ["Google Cloud Platform (GCP)", "Google Firebase", "MySQL"],
        others: ["ICEcoder"]
    },
    features: <ul className='features-list'>
        <List text="Displays various study locations around the University of Washington Tacoma campus, including:">
            <li>Location (address, building, room)</li>
            <li>Operating hours</li>
            <li>Space owner</li>
            <li>Space amenities (whiteboard, microwave, etc.)</li>
            <li>Image</li>
        </List>
        <li>Filtering specific spaces to fit a criteria.</li>
        <List text={<Bold>User Profiles</Bold>}>
            <li>Registered users can bookmark spaces and view them in a dedicated page.</li>
            <li>Registered users can leave comments and score a location by noise level,
                availability, and busyness for other users to see.</li>
        </List>

    </ ul>
}