import React from "react";

import { Link, useParams } from 'react-router-dom';
import { ProjectData } from "./ProjectsData";
import './ViewProject.scss';

/**
 * 
 * @depricated We no longer need this but keeping it around 4 now 
 * @returns String
 */
function formatQueryParamName(param: any) {
    var formatted = ""
    let strArr = param.split("-");
    strArr = strArr.filter((str) => str !== "-");
    strArr.forEach((str) => {
        formatted += `${str.toUpperCase()} `;
    });
    return formatted;
}

/**
 * 
 * @param param A string which comes from this page's queryParam (router-dom hook)
 * @returns An object containing all respective project data for this view only || blank data obj
 */
function getProjectData(param: any) {
    return ProjectData.find((project) => project.id === param) || ProjectData[0];
}

const Section = (props: {
    leftOrientation: boolean,
    text: string,
    imgPath: string
}) => {
    // TODO: this sucks and it's not DRY. Gotta replace this.
    if(props.leftOrientation) {
        return (
            <section className="left-oriented">
                <div className="img-wrapper"><img src={props.imgPath} alt="screenshot of the project" /></div>
                <div className="text-wrapper">
                    <p>{props.text}</p>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                <div className="text-wrapper">
                    <p>{props.text}</p>
                </div>
                <div className="img-wrapper"><img src={props.imgPath} alt="screenshot of the project" /></div>
            </section>   
        )
    }
}

const TechnologyLogo = (props: {
    name: string,
    image: string
}) => {

    return (
        <div className="technology-logo-wrapper">
            <img src={props.image} alt={`logo of ${props.name}`} />
            <span>{props.name}</span>
        </div>
    )
}

export default function() {
    const { project_name } = useParams();
    const projectData = getProjectData(project_name);

    return (
        <div id="ProjectPage">
            <header>
                <h1>{ projectData.title }</h1>
                <span>{ projectData.subtitle }</span>
            </header>

            {
                projectData.sections.map((section, i) => (
                    <Section 
                        leftOrientation={i % 2 == 0 ? true : false} //left orient every other
                        text={section.text}
                        imgPath={section.imgPath}
                    />)
                )
            }

            <h2>Technologies Used</h2>
            <div id="TechnologiesRow">
                {
                    projectData.technologies.map((tech) => {
                        return <TechnologyLogo name={tech.name} image={tech.image} />
                    })
                }
            </div>

            <div id="ButtonsRow">
                <Link to="/projects">
                    <button className="back-btn">Back</button>
                </Link>
                {
                    projectData.liveURL &&
                    <a href={projectData.liveURL}>
                        <button>Live Site</button>
                    </a>
                }
                {
                    projectData.github &&
                    <a href={projectData.github}>
                        <button>Github</button>
                    </a>
                }
            </div>
        </div>
    )
}