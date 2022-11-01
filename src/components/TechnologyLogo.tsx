import React from "react";

export default function (props: {
    name: string,
    image: string
}) {
    return (
        <div className="technology-logo-wrapper">
            <img src={props.image} alt={`logo of ${props.name}`} />
            <span>{props.name}</span>
        </div>
    )
}