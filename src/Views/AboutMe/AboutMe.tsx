import React from "react"
import { technologies } from '../Projects/ProjectsData';
import TechnologyLogo from "../../components/TechnologyLogo";

// Images (these ts-ignores are the death of me)
//@ts-ignore
import AboutMeImg from '/src/img/about-me.png';

//Styles
import './AboutMe.scss';

const prefferedTools = [
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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur iste dolor dolorem, recusandae modi quae eaque, deserunt facere odit delectus suscipit? Perspiciatis eum placeat voluptates delectus iure pariatur nihil consequuntur.</p>
            </div>

            <div id="TechnologyList">
                <span className="colored-text">A few favorite <span>tools</span></span>
                <div className="logos-list">
                    { prefferedTools.map((tool) => ( <TechnologyLogo name={tool.name} image={tool.image} /> )) }
                </div>
            </div>
        </div>
    )
}