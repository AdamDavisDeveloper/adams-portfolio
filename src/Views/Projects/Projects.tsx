import React from "react";
import { Link } from 'react-router-dom'
import './Projects.scss';

import ProjectsData, {projectTileTypes} from "./ProjectsData";

const ProjectTag = (props: {
    name: string,
    color: string
}) => {
    return (
        <div className="project-tag" style={{background: props.color}}>
            <span className="tag-text">{props.name}</span>
        </div>
    )
}

const ProjectTile = (props: projectTileTypes) => {
    return (
        <div className="project-tile">
            {
                props.imagePath &&
                <div className="project-tile-image">
                    <img src={props.imagePath} alt="screenshot of this project" />
                </div>
            }

            <Link to={props.urlSlug}>
                <div className="project-tile-info">
                    <div className="info-top-row">
                        <span>{props.title}</span>
                        <img src="/src/img/arrow-up-circle.svg" alt="arrow pointing up and right" />
                    </div>
                    <div className="info-bottom-row">
                        <span>{props.description}</span>
                        
                        {props.tags && 
                        <div className="tags">
                            {
                                props.tags.map((tag, i) => (
                                    <ProjectTag key={i} name={tag.name} color={tag.color} />
                                ))
                            }
                        </div>}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function(props) {
    return (
        <div id="Projects">
            <header>
                <h1>New Projects</h1>
            </header>

            {
                ProjectsData.map((project, i) => (
                    <ProjectTile 
                        key={i}
                        title={project.title}
                        description={project.description}
                        imagePath={project.imagePath}
                        urlSlug={project.urlSlug}
                        tags={project.tags}
                    />
                ))
            }

        </div>

    )
}