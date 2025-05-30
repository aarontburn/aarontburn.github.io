import { Bold, Italic, Link, List } from "../../Components";
import linkedpadImage from '../images/linkedpad.png';
import { ProjectDetails } from "../ProjectDatabase";


export const linkedPadDetails: ProjectDetails = {
    id: 'linkedpad',
    name: "Linked Pad",
    desc: "A custom macropad with twenty customizable keys and an interactive LED device between another Linked Pad.",
    image: linkedpadImage,
    stack: {
        languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "JSON"],
        frameworksOrLibraries: ["Node.js, Electron.js", "Robot.js"],
        technologies: [
            "MongoDB",
            "SSH",
            "Serial Communication",
            "Autodesk Fusion",
            "Git/GitHub",
            'Visual Studio Code',
        ],
        others: [
            "3D Modeling",
            'Soldering',
            'Raspberry Pi',
            'Linux',
        ]
    },
    repoLink: <>
        <p>
            PC: <Link link='https://github.com/aarontburn/linkedpad-pc'>
                GitHub Repository
            </Link>
        </p>

        <p>
            Raspberry Pi: <Link link='https://github.com/aarontburn/linkedpad-raspberry-pi'>
                GitHub Repository
            </Link>
        </p>
    </>,
    features: <>
        <ul className='features-list'>
            <List text='Programmable Macro Pad'>
                <List text='4x5 key pad with 20 fully programmable keys'>

                    <List text={<>Two input modes: <Italic>'text'</Italic> and <Italic>'keys'</Italic></>}>
                        <li><Bold>Text: </Bold>Upon key press, types a string.</li>


                        <List text={<><Bold>Keys: </Bold>A sequence of four keys that, when pressed, execute the sequence.</>}>
                            <li><Italic>e.g.</Italic> [<Bold>"田 Win"</Bold> + <Bold>"R"</Bold>] to quickly open the 'Run' system tool.</li>
                            <li><Italic>e.g.</Italic> [<Bold>"Ctrl"</Bold> + <Bold>"+"</Bold>] and [<Bold>"Ctrl"</Bold> + <Bold>"-"</Bold>] to manage zoom on browsers.</li>
                        </List>
                    </List>
                </List>

                <List text='Complete key map, including:'>
                    <li>Alphanumeric keys (A-Z, 0-9)</li>
                    <li>Symbols (<Italic>e.g.</Italic> '!', '?', '@')</li>
                    <li>Modifiers (<Italic>e.g.</Italic> 'Ctrl', 'Alt', 'Shift')</li>
                    <li>Controls (<Italic>e.g.</Italic> 'Backspace', 'Delete', 'Enter')</li>
                    <li>Numpad keys</li>
                    <li>Function keys (F1 - F24)</li>
                    <li>Caps lock and Num lock</li>
                    <li>Audio controls (<Italic>e.g.</Italic> mute/unmute, volume increase/decrease, play/pause)</li>
                    <li>Mouse clicks (<Italic>e.g.</Italic> left, right, and middle)</li>
                </List>
            </List>

            <List text={`'Linked Mode': Converts the macro functionality into a synced LED light pad.`}>
                <li>Syncs up with another Linked Pad; any changes in the LED sequence are reflected on both ends.</li>
                <li>Support for custom colors and brightness</li>

                <List text='Standalone mode'>
                    <li>If WiFi is set up using a PC and the software, the Linked Pad will be able to function in 'linked mode' without a PC.</li>
                </List>
            </List>
        </ul>
        <br />
        <h1 style={{ fontWeight: 550, fontSize: 32 }}>Planned Improvements</h1>
        <ul className='features-list'>
            <li>Rebuild the UI using React.js</li>
            <List text='Add additional input modes, such as:'>
                <List text='Command line: Execute command line operations.'>
                    <li>Will be useful in opening applications or doing operations quickly.</li>
                    <li>e.g. 'start chrome "www.google.com"' can be used to open Google Chrome to a specified URL.</li>
                </List>

                <List text='JavaScript files: creating and executing JavaScript scripts.'>
                    <li>Will be useful in creating complex macros.</li>
                    <li>e.g. Creating a macro access the Spotify API to modify the application volume.</li>
                </List>
            </List>

        </ul>

    </>
}