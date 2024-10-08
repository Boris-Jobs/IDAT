import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutGroup8 extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "skills": <Skills />,
            "projects": <Projects />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about group8" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="group8' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="group8' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutGroup8;

export const displayAboutGroup8 = () => {
    return <AboutGroup8 />;
}


function About() {
    return (
        <>
            {/* <div className="w-30 md:w-40 my-6 mt-30 bg-white border-4 border-white rounded-full overflow-hidden mb-8 md:mb-12">
                <img className="w-full h-full object-cover" src="./images/logos/alexander.jpg" alt="Group8 Jobs Logo" />
            </div> */}
            <div className="w-28 md:w-30 my-20 bg-black rounded-full">
                <img className="w-full" src="./images/logos/alexander-modified.png" alt="Group8 Jobs Logo" />
            </div>
            <div className=" mt-2 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>We are <span className="font-bold">(Group8)</span> ,</div>
                <div>Welcome to our HKU know-it-all AI assistant!</div>
                <div className="font-normal ml-1">We are <span className="text-pink-600 font-bold">the best group ever.</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-time"> My Github Profile: <span className="text-pink-600 font-bold"><a href="https://github.com/Group8-Jobs" target="_blank" rel="noreferrer"> https://github.com/Group8-Jobs</a></span>.</li>
                <li className=" mt-3 list-pc">We are the <span className=" font-medium">Greatest group of HKU</span> <span className="text-pink-600 font-bold">Hi hi hi</span> ( Hit me up <a className='text-underline' href='mailto:cz1322553126@gmail.com'><u>cz1322553126@gmail.com</u></a>).</li>
                <li className=" mt-3 list-building"> This is the project of group 8. </li>
                <li className=" mt-3 list-star"> We are changing the world! </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Multimodal Large Language Models, Train COOL AIs!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                {/* <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div> */}
                <div className=" text-sm text-center md:text-base w-full font-bold">Frameworks & Languages</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                {/* <div className="px-2 w-1/2"> */}
                <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="group8 python" />
                    <img src="https://img.shields.io/badge/pytorch-%23EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="group8 pytorch" className="m-1"/>
                    <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="group8 git" className="m-1" />
                    <img src="https://img.shields.io/badge/mysql-%234479A1?style=flat&logo=mysql&logoColor=%234479A1&labelColor=white" alt="group8 mysql" className="m-1" />
                    <img className="m-1" src="https://img.shields.io/badge/ubuntu-%23E95420?style=flat&logo=ubuntu&logoColor=white" alt="group8 ubuntu" />
                    <img className="m-1" src="https://img.shields.io/badge/javascript-%23F7DF1E?style=flat&logo=javascript&logoColor=%23F7DF1E&labelColor=white" alt="group8 javascript" />
                    <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="group8 c++" />
                    <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="group8 HTML" /></a>

                    <img className="m-1" src="https://img.shields.io/badge/c-%23A8B9CC?style=flat&logo=c&logoColor=white" alt="group8 c" />

                    <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="group8 react" />
                    <img className=" m-1" src="https://img.shields.io/badge/jetbrains-%23000000?style=flat&logo=jetbrains&logoColor=white" alt="group8 jetbrains" />
                    <img className=" m-1" src="https://img.shields.io/badge/numpy-%23013243?style=flat&logo=numpy&logoColor=white" alt="group8 numpy" />


                    

                </div>
                {/* </div> */}
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="group8 linux" /> <span>!</span>
                </li>
            </ul>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> Also I am skilled in,</span> <img className=" inline m-1" src="https://img.shields.io/badge/adobepremierepro-%239999FF?style=flat&logo=adobepremierepro&logoColor=white" alt="group8 adobepremierepro" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Pendulum-Period-Discussion",
            date: "Jan 2023",
            link: "https://github.com/Group8-Jobs/Pendulum-Period-Discussion",
            description: [
                "It was a question that I had wanted to study since high school, and it was only after graduation from university that I had time to complete the research on this topic of Pendulum Period.",
            ],
            domains: ["Elliptic Integration", "Physics"]
        },
        {
            name: "wode_scratchs",
            date: "Mar 2024",
            link: "https://github.com/Group8-Jobs/wode_scratchs",
            description: [
                "Scratch projects on topics that I'm interested in, e.g. Multimodal LLMs, Machine Learning Algorithms, Deep Learning Algorithms.",
            ],
            domains: ["Pytorch", "Jupyter Notebook", "transformers"]
        },
        {
            name: "Hash_Algorithms_Researchs",
            date: "Sep 2019",
            link: "https://github.com/Group8-Jobs/Hash_Algorithms_Researchs",
            description: [
                "Some hash algorithms researchs that I conducted for large-scale image retrieval.",
            ],
            domains: ["Python", "Matlab"]
        },
        {
            name: "wode_LLMs_practice",
            date: "Mar 2020",
            link: "https://github.com/Group8-Jobs/wode_LLMs_practice",
            description: [
                "This repository saves the specific codes that I practiced on LLMs.",
            ],
            domains: ["Pytorch", "transformers"]
        }

    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=Group8-Jobs&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}