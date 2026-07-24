import nexusSiteDevelop from "../images/nexus-site/develop.png";
import nexusSiteHome from "../images/nexus-site/home.png";
import nexusSiteMarketplaceAccount from "../images/nexus-site/marketplace-account.png";
import nexusSiteMarketplaceEdit from "../images/nexus-site/marketplace-edit.png";
import nexusSiteMarketplaceHome from "../images/nexus-site/marketplace-home.png";
import nexusSiteMarketplaceLogin from "../images/nexus-site/marketplace-login.png";
import nexusSiteMarketplaceModule from "../images/nexus-site/marketplace-module.png";
import logo from '../images/nexus-monkey/logo.png';
import { ProjectDetails } from "../ProjectDatabase";
import { Bold, Link, List } from "../../Components";

const images: readonly string[] = [
    nexusSiteHome,
    nexusSiteDevelop,
    nexusSiteMarketplaceAccount,
    nexusSiteMarketplaceEdit,
    nexusSiteMarketplaceHome,
    nexusSiteMarketplaceLogin,
    nexusSiteMarketplaceModule
]


export const nexusMonkeyDetails: ProjectDetails = {
    id: 'nexus-monkey',
    name: 'Monkey Core',
    desc: "Embedding native Windows applications into Nexus.",
    repoLink: <div>
        <p>GitHub Repository:</p>
        <Link link='https://github.com/aarontburn/nexus-monkey-core'>https://github.com/aarontburn/nexus-monkey-core</Link>

        <p>Marketplace:</p>
        <Link link='https://www.nexus-app.net/marketplace/6843548c98a85fc73a702330'>Nexus Marketplace: Monkey Core</Link>

        <p>Nexus:</p>
        <Link link=''>https://github.com/aarontburn/nexus-core</Link>
    </div>,
    image: logo,
    stack: {
        languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    },
    longDesc: <>
        <p>
            Developed a module for Nexus to wrangle Window applications to give the illusion that it's
            embedded as a Nexus module.
        </p>
    </>,
    features: <>
        <div className='features-list'>
            <ul>
                <li>
                    <Bold>Consistent Position and Size</Bold>: 
                    Accurately contains the target window within the bounds of the parent Nexus client.
                </li>
                <li>
                    <Bold>Visibility</Bold>: 
                    Properly manages window visibility, hiding the window when the module is longer visible.
                </li>
                <li><Bold>Locate on Startup</Bold>: Automatically start managing the window on boot.</li>
            </ul>


            <h2>Examples</h2>
            <ul>
                <li>
                    <Link link="https://github.com/aarontburn/nexus-steam-monkey">Steam Monkey</Link>
                </li>
                <li>
                    <Link link="https://github.com/aarontburn/nexus-spotify-monkey">Spotify Monkey</Link>
                </li>
                <li>
                    <Link link="https://github.com/aarontburn/nexus-slack-monkey">Slack Monkey</Link>
                </li>
                <li>
                    <Link link="https://github.com/aarontburn/nexus-medal-monkey">Medal Monkey</Link>
                </li>
                <li>
                    <Link link="https://github.com/aarontburn/nexus-github-desktop-monkey">GitHub Desktop Monkey</Link>
                </li>
                <li>
                    <Link link="https://github.com/aarontburn/nexus-discord-monkey">Discord Monkey</Link>
                </li>
            </ul>

            <br />
            <h2>Demo</h2>
            <video
                controls
                width="100%"
                height="auto"
                muted
            >
                <source src="/videos/monkey-core-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </>
}