import { Bold, Link, List } from "../../Components";
import { ProjectDetails } from "../ProjectDatabase";
import nexusImage from '../images/nexus-logo.png';
import manageImage from "../images/nexus-app/manage.png"
import settingsImage from "../images/nexus-app/settings.png"
import monkeyImage from "../images/nexus-app/spotify-monkey.png"

const images: readonly string[] = [
    monkeyImage,
    manageImage, 
    settingsImage, 
]

export const nexusAppDetails: ProjectDetails = {
    id: 'nexus',
    name: "Nexus",
    desc: "A cross-platform application environment and loader.",
    image: nexusImage,
    repoLink: <>
        <p>GitHub Repository:</p>
        <Link link='https://github.com/aarontburn/nexus-core'>https://github.com/aarontburn/nexus-core</Link>
        <p>Official Landing Page:</p>
        <Link link='https://www.nexus-app.net/'>https://www.nexus-app.net/</Link>
        <br />
    </>,
    stack: {
        languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Markdown", "JSON"],
        frameworksOrLibraries: ["Electron.js", "React.js", "Node.js"],
        technologies: ["Git/GitHub", "Electron Builder"]
    },
    longDesc: <>
        <section>
            <p>
                Nexus is a cross-platform application environment and loader. Load applications, or modules, created for the Nexus environment quickly and have quick access to them. Or, develop modules using TypeScript that can do anything you want it to do.
            </p>
            <p>
                Think of Nexus as a customizable toolbox — one app that can do anything that you (or the community) build into it.
            </p>
        </section>
        <br />
        <section>
            <h2>Use Cases</h2>
            <p>Install community-made modules that serve any purpose for any user:</p>
            <ul>
                <li>🎨 <Bold>Artist or Designer?</Bold> Use the <Link link='https://www.nexus-app.net/marketplace/68342fbea2fbe5b2c6a76cf1'>Color Picker</Link> module for quick access to a color palette and eyedropper.</li>
                <li>🤖 <Bold>AI Enthusiast?</Bold> The <Link link='https://www.nexus-app.net/marketplace/68351c5ceacf2ce8680778ee'>ChatGPT</Link> module gives you instant access to the AI chatbot inside Nexus.</li>
                <li>📬 <Bold>Emailaholic?</Bold> Install the <Link link='https://www.nexus-app.net/marketplace/6837a73f382d9ca237cba6ec'>Outlook</Link> or <Link link='https://www.nexus-app.net/marketplace/6837a678382d9ca237cba6e5'>Gmail</Link> module for one-click inbox and calendar access.</li>
                <li>💬 <Bold>Messenger?</Bold> Try modules that embed <Link link='https://www.nexus-app.net/marketplace/68379fdd4e3ad55b4a193abd'>Discord</Link>, <Link link='https://www.nexus-app.net/marketplace/6837a6cf382d9ca237cba6e7'>Instagram</Link>, and <Link link='https://www.nexus-app.net/marketplace/6837a9b7382d9ca237cba6f9'>Slack</Link> to keep all your chat apps in one place.</li>
                <li>🎶 <Bold>Audiophile?</Bold> Keep <Link link='https://www.nexus-app.net/marketplace/6837aa21382d9ca237cba6fb'>Spotify</Link> or a <Link link='https://www.nexus-app.net/marketplace/6837ab14382d9ca237cba701'>Volume Controller</Link> handy in your workspace by embedding it as a module.</li>
            </ul>
        </section>
    </>,
    features: <div>
        <ul className='features-list'>
            <List text={<Bold>Developer Features:</Bold>}>
                <p>Nexus modules have the tools to create powerful, interconnected applications that can be managed within a single window.</p>

                <ul>
                    <li>📊 <Bold>Familiar Web Technologies:</Bold> Develop modules using familiar web technologies like TypeScript, React, Node.js, and HTML.</li>
                    <li>🛠️ <Bold>Templates:</Bold> Quickly start building using numerous templates that fit your needs, whether you want to use React, plain HTML, or more.</li>
                    <li>📩 <Bold>Module Communication:</Bold> Modules can make requests to each other, enabling a powerful and connected modular ecosystem.</li>
                    <li>📤 <Bold>Export & Distribution:</Bold> Package your module into a ZIP file and share it on the Nexus marketplace.</li>
                    <li>🆕 <Bold>Auto Updates:</Bold> Supports automatic updates with minimal setup - keep your modules fresh without manual intervention.</li>
                    <li>📜 <Bold>Developer-Friendly Docs:</Bold> Well-written and growing documentation makes it easy to get started and build advanced modules with confidence.</li>
                    <li>♾️ <Bold>Limitless Possibilities:</Bold> Built on Electron, Nexus lets you use the full Electron API and any NPM package - no constraints, just creativity.</li>
                </ul>
            </List>

            <List text={<Bold>User Features:</Bold>}>
                <li><Bold>Remote Updates</Bold>: Keep your Nexus up-to-date with automatic client updates.</li>
                <li><Bold>Remote Module Updates</Bold>: Keep your installed modules up-to-date with remote module updating.</li>
                <li><Bold>Marketplace Integration</Bold>: Easily browse and directly install modules to your Nexus client on the official Marketplace.</li>
                <li><Bold>Module Management</Bold>: Install, uninstall, and update your installed modules directly in-app.</li>
            </List>


        </ul>
                <br />
        <h1>Sample Images</h1>
        <div style={{ width: "100%", marginTop: "1rem" }}>
            {images.map(img => <img style={{ width: "100%", borderRadius: "0.75rem" }} key={img} src={img} alt="Nexus Site Image" />)}
        </div>
    </div>

}