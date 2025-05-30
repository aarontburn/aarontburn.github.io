import { ReactNode, useState } from 'react';
import { Spacer } from '../../components/Components';
import styles from './about.module.css'

const BOLD_WEIGHT: number = 550;

const Section = ({ title, children }: { title: string, children?: ReactNode }) => {
    return <>
        <h1 style={{ margin: "0.5em 0 0 0.5em", fontWeight: BOLD_WEIGHT }}>{title}</h1>
        <div style={{ margin: "0 2em" }}>
            {children}
        </div>
    </>
};

const Bold = ({ children }: { children?: ReactNode }) => {
    return <p style={{ fontWeight: BOLD_WEIGHT }}>{children}</p>
}

const SkillSection = ({ title, children }: { title: string, children?: ReactNode }) => {
    return <p style={{ marginBottom: '0.5rem' }}>
        <span style={{ fontWeight: BOLD_WEIGHT }}>{title + ": "}</span>
        {children}
    </p>
}

const SplitSection = ({ left, right }: { left: ReactNode, right: ReactNode }) => {
    return <>
        <div style={{ display: 'flex' }}>
            {left}
            <Spacer />
            {right}
        </div>
    </>
}

const Dropdown = ({ children, text }: { children?: ReactNode, text: string }) => {
    const [opened, setDropdownOpen] = useState(false);


    return <div className={styles['dropdown-container']}>
        <p className={styles['dropdown-title']} onClick={() => setDropdownOpen((prevState) => !prevState)}>
            <span className={styles['dropdown-caret']} style={{ transform: opened ? 'rotate(90deg)' : '' }}>{'⮞'} </span>
            <span className={styles['dropdown-text']}>{text}</span>
        </p>

        <div className={styles['dropdown-contents']}
            style={{
                maxHeight: opened ? 'fit-content' : '0',
                opacity: opened ? '1' : '0',
                transition: opened ? '200ms ease-out' : '',
                pointerEvents: opened ? 'all' : 'none'
            }}
        >
            {children}
        </div>
    </div>
}


export function About({ changePage }: { changePage: (path: string) => void }) {
    return <>
        <div className="page" id={styles['about-page']}>
            <div id={styles['about-body']}>
                <Section title='About Me'>
                    <p>
                        Hi! My name is Aaron Burnham. I am pursuing a Bachelors of Science in Computer Science at the
                        University of Washington. I have a passion for creating meaningful projects, exploring technologies, and learning new things.
                    </p>
                    <br />
                    <p>
                        Alongside coding, you can find me indulging in music production or baking.
                    </p>
                </Section>


                <Section title='Technical Skills'>
                    <SkillSection title='Languages'>
                        Java, JavaScript, TypeScript, Python, SQL, HTML, CSS, C, C#, PHP
                    </SkillSection>
                    <SkillSection title='Frameworks/Libraries'>
                        Node.js, React.js, Electron.js, Next.js, NextAuth.js Mongoose, Java Swing, JavaFX, jQuery, Express.js, JUnit, NLTK, Tkinter
                    </SkillSection>
                    <SkillSection title='Technologies'>
                        Google Firebase, Google Cloud Platform (GCP), Amazon Web Services (AWS), 
                        Oracle Cloud Database, MongoDB, MySQL, Maven, Git/GitHub, Linux, MERN, Ubuntu,
                        Vercel
                    </SkillSection>
                    <SkillSection title='Programs'>
                        IntelliJ IDEA, PyCharm, VS Code, Android Studio, Unity, Eclipse, Autodesk Fusion
                    </SkillSection>
                    <SkillSection title='Others'>
                        Object-Oriented Programming (OOP), Agile, Scrum, Full-Stack, Web Development, Mobile Development, Version Control, Unit Testing,
                        Front-end, Back-end, Natural Language Processing (NLP), Functional Programming, 3D Modeling, Model-View-Controller (MVC) 
                    </SkillSection>
                </Section>

                <Section title='Education'>

                    <SplitSection
                        left={<Bold>Bachelors of Science in Computer Science</Bold>}
                        right={<p>September 2022 - December 2024</p>} />

                    <SplitSection
                        left={<p>University of Washington</p>}
                        right={<p>GPA: 3.85/4.0</p>} />

                    <Dropdown text='Relevant Coursework'>
                        {(() => {
                            const courses: string[] = [
                                'Software Development and Quality Assurance Techniques',
                                'Database Systems Design',
                                'Client/Server Programming',
                                'Data Structures',
                                'Algorithms',
                                'Machine Organization',
                                'Natural Language Processing',
                                'Linear Algebra',
                                'Statistics',
                                'Computer Ethics',
                                'Discrete Structures',
                                'Cloud Computing'
                            ];
                            return courses.map((course, index) => <p key={index}>{course}</p>)
                        })()}

                    </Dropdown>


                    <br />
                    <SplitSection
                        left={<Bold>Associates of Science in Computer Science and Engineering</Bold>}
                        right={<p>September 2019 – June 2022</p>} />

                    <SplitSection
                        left={<p>South Seattle College</p>}
                        right={<p>GPA: 3.74/4.0</p>} />

                    <Dropdown text='Relevant Coursework'>
                        {(() => {
                            const courses: string[] = [
                                'Calculus',
                                'Engineering Physics',
                            ];
                            return courses.map((course, index) => <p key={index}>{course}</p>)
                        })()}
                    </Dropdown>

                </Section>

                <Section title='Work Experience'>
                    <SplitSection
                        left={<Bold>Undergraduate Computer Science Teaching Assistant</Bold>}
                        right={<p>March 2023 – December 2024</p>} />

                    <SplitSection
                        left={<p>University of Washington</p>}
                        right={<p></p>} />

                    <Dropdown text='Responsibilities'>
                        <ul className='section-desc'>
                            <li>
                                Assists professors in supervising courses of 75+ students to understand fundamental computer science concepts.
                            </li>
                            <li>
                                Independently leads weekly lab sections of 35+ students to review programming concepts and facilitate collaborative learning.
                            </li>
                            <li>
                                Leads weekly 2+ hour office sessions to provide individualized drop-in tutoring and support for students.
                            </li>
                            <li>
                                Grades student programming assignments and shares constructive feedback on ways they can improve.
                            </li>
                            <li>
                                Prepares lesson plans independently and adapts instruction style to students' individual needs and abilities.
                            </li>
                        </ul>
                    </Dropdown>

                    <br />

                    <SplitSection
                        left={<Bold>Lifeguard and Swim Instructor</Bold>}
                        right={<p>December 2018 – Present</p>} />

                    <SplitSection
                        left={<p>Seattle Parks and Recreation</p>}
                        right={<p></p>} />


                    <Dropdown text='Responsibilities'>

                        <ul className={styles['section-desc']}>
                            <li>
                                Ensures water safety and emergency preparedness in swimming pool facilities for up to 200+ patrons at a time.
                            </li>
                            <li>
                                Instructs youth aquatic lessons of 10+ students from diverse demographics and skill levels
                            </li>
                            <li>
                                Trained 10+ new employees in understanding facility procedures and life-guarding practices.
                            </li>
                            <li>
                                Developed confidence in communication and critical decision-making skills in time-sensitive, high-stress situations.
                            </li>
                            <li>
                                American Red Cross certified in first-aid, CPR, AED, and emergency oxygen care.
                            </li>
                        </ul>
                    </Dropdown>


                </Section>


                <Section title='Projects'>
                    <p
                        onClick={() => changePage('/projects')}
                        className={styles['nav-button']}
                        id={styles['projects-button']}>Projects ↗</p>
                </Section>




                <div style={{ padding: '3em' }}></div>

            </div>
        </div>
    </ >
}