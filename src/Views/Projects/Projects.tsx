import React from "react";
import { Link } from 'react-router-dom'


const ProjectTile = (props: {
    title           :string,
    description     :string,
    urlSlug         :string,
    imagePath?      :string,
    tags?           :[{name: string, color: string}]
}) => {
    return (
        <div className="project-tile">
            {
                props.imagePath &&
                <div className="project-tile-image">
                    <img src={props.imagePath} alt="screenshot of this project" />
                </div>
            }

            <Link to={`projects/${props.urlSlug}`}>
                <div className="project-tile-info">
                    <div className="info-top-row">
                        <span>{props.title}</span>
                        <img src="ArrowImage.svg" alt="arrow pointing up and right" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function(props) {
    return (
        <h1>Projects</h1>
    )
}