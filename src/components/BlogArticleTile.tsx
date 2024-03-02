import React from "react";
import { Link } from 'react-router-dom'
import { blogArticleTile } from "../Views/Blog/BlogData"; //@ts-ignore
import ArrowCircle from '/src/img/arrow-up-circle.svg';

export default function BlogArticleTile(props: blogArticleTile) {
    const { title, description, urlSlug, imagePath } = props;

    return (
        <div className="blog-tile">
            <Link to={urlSlug}>
                <div className="blog-tile-info">
                    <div className="info-top-row">
                        <div className="tile-title">
                            <span>{title}</span>
                            <img src={ArrowCircle} alt="arrow pointing up and right" />
                        </div>

                        {
                            imagePath &&
                            <div className="blog-tile-image">
                                <img src={imagePath} alt="header image of this blog" />
                            </div>
                        }
                    </div>
                    <div className="info-bottom-row">
                        <span>{description}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}