import React from "react";
//@ts-ignore -- TS is a little baby
import ExternalLinkSVG from '/src/img/external-link.svg';

export default function FeaturedCard(props: {
    title: string,
    description: string,
    url: string,
}) {

    const { title, description, url } = props; //destruct props

    return (
        <>
            <div className="featured-card">
                <div className="top-row">
                    <h1>{title}</h1>
                    <a href={url}>
                        <img src={ExternalLinkSVG} alt="outlink symbol" />
                    </a>
                </div>

                <div className="bottom-row">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}