// ------ Image Imports for Vite Build ------  //
//@ts-ignore
import Ocean01 from '/src/img/blog/ocean-01.png';
// ------ End Image Imports ------ //

// Interfaces
export interface blogArticleTile {
    title           :string,
    description     :string,
    urlSlug         :string,
    imagePath       :string,
};

export const ProjectTileData: blogArticleTile[] = [
    {
        title: "The Building of a Portfolio Website",
        description: `Setting up your first portfolio website can be a surprisingly daunting task, especially if you’re...`,
        urlSlug: "the-building-of-a-portfolio-website",
        imagePath: Ocean01,
    },
]