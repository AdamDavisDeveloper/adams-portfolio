import React from "react";

import { Link, useParams } from 'react-router-dom';

import { ProjectData } from "./ProjectsData";

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

export default function() {
    const { project_name } = useParams();
    const projectData = getProjectData(project_name);

    return (
        <div id="ProjectPage">
            <header>
                <h1>{projectData.title}</h1>
                <span>{projectData.subtitle}</span>
            </header>
        </div>
    )
}