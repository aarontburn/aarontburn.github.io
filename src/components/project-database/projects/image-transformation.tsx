import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { BoldSectionHeader } from "../../../pages/projects/details-page/ProjectDetailsPage";
import { Bold, List } from "../../Components";
import placeholderImage from '../../../res/placeholder_image.png';
import { ProjectDetails } from "../ProjectDatabase";



export const imageTransformationDetails: ProjectDetails = {
    id: "imagetransformationcasestudy",
    name: "Case Study: Image Transformation in Java vs. Python",
    desc: "A case study to compare Java and Python with image processing on AWS.",
    repoLink: "https://github.com/aarontburn/Java-vs-Python-Image-Processing",
    image: placeholderImage,
    stack: {
        languages: ["Java", "Python", "JavaScript"],
        technologies: [
            "Amazon Web Services (AWS)",
            "AWS Lambda",
            "Amazon S3",
            "Amazon API Gateway",
            "AWS Identify and Access Management (IAM)",
            "Git/GitHub",
            "Visual Studio Code",
            "IntelliJ IDEA"
        ],
        frameworksOrLibraries: ["Node.js", "PIL", "Boto3"],
        others: ["REST API"]
    },
    features: <>
        <ul className='features-list'>
            <List text={<Bold>Functional:</Bold>}>
                <List text="Six image transformation functions, including:">
                    <List text={<Bold>Image Details</Bold>}>
                        <li>Retrieve image details (height, width, color mode, and transparency)</li>
                    </List>

                    <List text={<Bold>Image Rotation</Bold>}>
                        <li>Rotates an image 90, 180, or 270 degrees.</li>
                    </List>

                    <List text={<Bold>Image Resize</Bold>}>
                        <li>Resizes an image to a specified width and height.</li>
                    </List>

                    <List text={<Bold>Image Grayscale</Bold>}>
                        <li>Converts an image to grayscale.</li>
                    </List>

                    <List text={<Bold>Image Brightness</Bold>}>
                        <li>Modifies the brightness of an image.</li>
                    </List>

                    <List text={<Bold>Image Type Conversion</Bold>}>
                        <li>Converts an image of one file type to another (e.g. 'png' to 'jpg' ).</li>
                    </List>
                </List>
                <li>Includes a batch function to execute use multiple filters on a single image.</li>
                <li>Includes a script to mass-update all AWS Lambda functions automatically.</li>
            </List>
            <List text={<Bold>Metrics:</Bold>}>
                <List text="Metrics collected:">
                    <List text={<Bold>Runtime (ms)</Bold>}>
                        <li>Time from function invocation to completion.</li>
                    </List>
                    <List text={<Bold>Memory Usage (MB)</Bold>}>
                        <li>Total memory consumption during execution.</li>
                    </List>
                    <List text={<Bold>Throughput (images/second)</Bold>}>
                        <li>Number of images processed per second.</li>
                    </List>
                    <List text={<Bold>Cost (USD)</Bold>}>
                        <li>Estimated runtime cost.</li>
                    </List>
                </List>
            </List>
        </ul>
        <BoldSectionHeader>Results:</BoldSectionHeader>
        {(() => {
            const docs = [{ uri: require("../pdfs/project_report.pdf") }];
            return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} className='pdf' />
        })()}
        <br />
        <BoldSectionHeader>Raw Metrics:</BoldSectionHeader>
        {(() => {
            const docs = [{ uri: require("../pdfs/project_metrics.pdf") }];
            return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} className='pdf' />
        })()}

    </>
}