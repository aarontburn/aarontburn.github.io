import nexusSiteDevelop from "../images/nexus-site/develop.png";
import nexusSiteHome from "../images/nexus-site/home.png";
import nexusSiteMarketplaceAccount from "../images/nexus-site/marketplace-account.png";
import nexusSiteMarketplaceEdit from "../images/nexus-site/marketplace-edit.png";
import nexusSiteMarketplaceHome from "../images/nexus-site/marketplace-home.png";
import nexusSiteMarketplaceLogin from "../images/nexus-site/marketplace-login.png";
import nexusSiteMarketplaceModule from "../images/nexus-site/marketplace-module.png";
import nexusImage from '../images/nexus-logo.png';
import { ProjectDetails } from "../ProjectDatabase";
import { Link } from "../../Components";

const images: readonly string[] = [
    nexusSiteHome,
    nexusSiteDevelop,
    nexusSiteMarketplaceAccount,
    nexusSiteMarketplaceEdit,
    nexusSiteMarketplaceHome,
    nexusSiteMarketplaceLogin,
    nexusSiteMarketplaceModule
]


export const nexusSiteDetails: ProjectDetails = {
    id: 'nexus-site',
    name: 'Nexus Website',
    desc: 'The official website for Nexus.',
    repoLink: <div>
        <p>GitHub Repository:</p>
        <Link link='https://github.com/aarontburn/nexus-site'>https://github.com/aarontburn/nexus-site</Link>
        <p>Official Website:</p>
        <Link link='https://www.nexus-app.net/'>https://www.nexus-app.net/</Link>
    </div>,
    image: nexusImage,
    stack: {
        languages: ["TypeScript, JavaScript", "HTML", "CSS"],
        frameworksOrLibraries: ["React.js", "Node.js", "Next.js", "NextAuth.js", "MongoDB", "Mongoose"],
        technologies: ["Git/GitHub", "Vercel"],
    },
    longDesc: <>
        <p>
            Developed a website for Nexus, a cross-platform application loader aimed to consolidate tools
            and applications into a single application.
        </p>
    </>,
    features: <>
        <div className='features-list'>
            <ul>
                <li>📌Latest Downloads: Find the latest releases for your operating system on the download page.</li>
                <li>🛒 Module Marketplace: Users can upload their modules to the marketplace, allowing them to share their modules.</li>
                <li>
                    📥Direct Downloads to Nexus: Integrates seamlessly with the Nexus desktop application by allowing users
                    to directly install modules from the marketplace to their Nexus client.
                </li>
                <li>
                    📜 Developer Documentation: Features a developer page where comprehensive and extensive documentation is written for
                    developing with Nexus, including start-to-finish guides, API references, and guides.
                </li>
            </ul>
        </div>
        <br />
        <h1>Sample Images</h1>
        <div style={{ width: "100%", marginTop: "1rem" }}>
            {images.map(img => <img style={{ width: "100%", borderRadius: "0.75rem" }} key={img} src={img} alt="Nexus Site Image" />)}
        </div>

    </>
}