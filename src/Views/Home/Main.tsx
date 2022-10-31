import React from "react"
//@ts-ignore -- TS doesn't recognize this as a "module" (jerk)
import HomeImage from '/src/img/header-home-lg.png';
import './Main.scss';

//Featured Projects Array
import FeaturedData from "./FeaturedData";

//Components
import FeaturedCard from "./FeaturedCard";


export default function HomeMain() {
    return (
        <main id="HomeMain">
            <header>
                <div className="header-text">
                    <span className="name">Adam Davis</span>
                    <span>developer · designer</span>
                </div>
                <img src={HomeImage} alt="upside-down man surrounded by pretty light flares" />
            </header>

            <div id="TitleDescription">
                <h1>Web Developer <br /> designing creative solutions <br /> and joyful interfaces.</h1>
            </div>

            <div id="FeaturedList">
                <span>Featured</span>
                {
                    FeaturedData.map((project, i) => (
                        <FeaturedCard 
                            key={i}
                            title={project.title}
                            description={project.description}
                            slug={project.urlSlug}
                        />
                    )
                )}
            </div>
        </main>
    )
}