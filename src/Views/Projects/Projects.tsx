import React from "react";
import { Link } from 'react-router-dom'
import './Projects.scss';

//Images
//@ts-ignore -- TS doesn't recognize this as a "module" (jerk)
import ArrowCircle from '/src/img/arrow-up-circle.svg';

import {ProjectTileData, projectTileTypes} from "./ProjectsData";

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
    const { title, description, urlSlug, imagePath, tags } = props;

    return (
        <div className="project-tile">
            {
                imagePath &&
                <div className="project-tile-image">
                    <img src={imagePath} alt="screenshot of this project" />
                </div>
            }

            <Link to={urlSlug}>
                <div className="project-tile-info">
                    <div className="info-top-row">
                        <span>{title}</span>
                        <img src={ArrowCircle} alt="arrow pointing up and right" />
                    </div>
                    <div className="info-bottom-row">
                        <span>{description}</span>
                        
                        {tags && 
                        <div className="tags">
                            {
                                tags.map((tag, i) => (
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

export default function() {
    return (
        <div id="Projects">
            <header>
                <h1>Projects</h1>
            </header>

            {
                ProjectTileData.map((project, i) => (
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