import React from "react";
import { ProjectTileData } from "./BlogData";
import BlogArticleTile from "../../components/BlogArticleTile";
// SCSS
import './BlogList.scss';

export default function Blog() {
    return (
        <div id="BlogList">
            <header>
                <h1>Adam's Blog</h1>
                <h2>I teach you what I'm learning. <span>✦</span></h2>
            </header>
            
            {
                ProjectTileData?.map((project, i) => (
                    <BlogArticleTile
                        key={i}
                        title={project.title}
                        description={project.description}
                        imagePath={project.imagePath}
                        urlSlug={project.urlSlug}
                    />
                ))
            }
        </div>
    )
};