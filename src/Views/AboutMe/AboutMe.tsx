import React from "react"

// Images (these ts-ignores are the death of me)
//@ts-ignore
import Book from '/src/img/book.svg';
//@ts-ignore
import ReactLogo from '/src/img/react-logo.png'
//@ts-ignore
import ViteLogo from '/src/img/vite-logo.png'
//@ts-ignore
import TypescriptLogo from '/src/img/typescript-logo.png'
//@ts-ignore
import PythonLogo from '/src/img/python-logo.png'
//@ts-ignore
import FigmaLogo from '/src/img/figma-logo.png'

//Styles
import './AboutMe.scss';

export default function AboutMe() {
    return (
        <div id="AboutMe">
            <header>
                <h1>About Me</h1>
                <img src={'/src/img/about-me.png'} alt="A man standing in front of a starry sky backdrop" />
            </header>

            <div id="TextBody">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur iste dolor dolorem, recusandae modi quae eaque, deserunt facere odit delectus suscipit? Perspiciatis eum placeat voluptates delectus iure pariatur nihil consequuntur.</p>
            </div>

            <div id="TechnologyList">
                <span>My preferred <span>tools</span></span>
                <div className="logos-list">
                    <img src="/src/img/react-logo.png" alt="react logo" />
                    <img src="/src/img/vite-logo.png" alt="vite logo" />
                    <img src="/src/img/typescript-logo.png" alt="typescript logo" />
                    <img src="/src/img/python-logo.png" alt="python logo" />
                    <img src="/src/img/figma-logo.png" alt="figma logo" />
                </div>
            </div>
        </div>
    )
}