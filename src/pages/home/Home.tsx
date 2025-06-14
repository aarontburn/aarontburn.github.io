import linkedInLogo from '../../res/linkedin.png';
import gitHubLogo from '../../res/github.png';
import styles from './home.module.css'
import { NavButton, openLink, Spacer } from '../../components/Components';

const FONT_SIZE_1: string = '3em';
const FONT_SIZE_2: string = '2.5em';


export function Home({ changePage }: { changePage: (path: string) => void }) {

    return (
        <>
            <div className="page" id={styles["homepage"]}>
                <h1 style={{ fontSize: '5rem' }}>Aaron Burnham</h1>
                <h2>Software Engineer</h2>
                <h3>aarontburn@outlook.com</h3>

                <div className={styles["home-nav"]}>
                    <NavButton displayText={"About"} callback={() => changePage('/about')} fontSize={FONT_SIZE_1} width='12.5rem' />
                    <Spacer size='2rem' />
                    <NavButton displayText={"Projects"} callback={() => changePage('/projects')} fontSize={FONT_SIZE_1} width='12.5rem' />
                </div>

                <div className={styles["home-nav"]}>
                    <NavButton displayText={"LinkedIn"} image={linkedInLogo} callback={() => openLink('LinkedIn')} fontSize={FONT_SIZE_2} width='15rem' />
                    <Spacer size='2rem' />

                    <NavButton displayText={"GitHub"} image={gitHubLogo} callback={() => openLink('GitHub')} fontSize={FONT_SIZE_2} width='15rem' />
                </div>

            </div>
        </>


    );
}