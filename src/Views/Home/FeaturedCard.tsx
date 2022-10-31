import React from "react";
//@ts-ignore -- TS is a little baby
import ExternalLinkSVG from '/src/img/external-link.svg';

//Styles
import '../Home/FeaturedCard.scss'

import {Link} from 'react-router-dom'

export default function FeaturedCard(props: {
    title: string,
    description: string,
    slug: string,
}) {

    const { title, description, slug } = props; //destruct props

    return (
        <>
            <Link to={`projects/${slug}`} className="strip-anchor-styles">
                <div className="featured-card">
                    <div className="top-row">
                        <h1>{title}</h1>
                        <img src={ExternalLinkSVG} alt="outlink symbol" />
                    </div>

                    <div className="bottom-row">
                        <p>{description}</p>
                    </div>
                </div>      
            </Link>
        </>
    )
}