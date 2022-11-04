import React from "react"
import { technologies } from '../Projects/ProjectsData';
import TechnologyLogo from "../../components/TechnologyLogo";

// Images (these ts-ignores are the death of me)
//@ts-ignore
import AboutMeImg from '/src/img/about-me.png';

//Styles
import './AboutMe.scss';

const favoriteTools = [
    technologies.typescript,
    technologies.react,
    technologies.vite,
    technologies.firebase
]

export default function AboutMe() {
    return (
        <div id="AboutMe">
            <header>
                <h1>About Me</h1>
                <img src={AboutMeImg} alt="A man standing in front of a starry sky backdrop" />
            </header>

            <div id="TextBody">
                <p>
                    🙌🏼 I'm Adam Davis. Thank you for visiting my little slice of the web and I hope you enjoy your time here. 🥳 <br />
                    I am a software engineer and designer primarily working on web projects but I love playing around with all types of tech and making pretty much anything (I've even tried knitting!). <br />
                    Playing music, exploring nature, learning new things about the world, and creating are my favorite things and I hope to continue doing them for a long time. <br />
                    Detailed information about my professional experience is contained in my resume or on LinkedIn 👇🏻
                </p>
            </div>

            <div id="TechnologyList">
                <span className="colored-text">A few favorite <span>tools</span></span>
                <div className="logos-list">
                    { favoriteTools.map((tool) => ( <TechnologyLogo name={tool.name} image={tool.image} /> )) }
                </div>
            </div>
        </div>
    )
}