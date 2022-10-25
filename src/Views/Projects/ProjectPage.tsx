import React from "react";

import { Link, useParams } from 'react-router-dom';

export default function() {
    const { project_name } = useParams();

    return (
        <>
            <h1>Project Page</h1>
            <span>{project_name}</span>
        </>
    )
}