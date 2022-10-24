interface projectTag {
    name: string, 
    color: string
}

export interface projectTileTypes {
    title           :string,
    description     :string,
    urlSlug         :string,
    imagePath       :string,
    tags            :projectTag[]
}

const ProjectData: [projectTileTypes] = [
    {
        title: "See Something New",
        description: "kaskjaksjka",
        urlSlug: "see-something-new",
        imagePath: "",
        tags: [
            {name: "Javascript",    color: "#DFD93D"},
            {name: "Generative",    color: "#234D5A"},
            {name: "Algorithm",      color: "#5A2330"},
        ],
    }
]

export default ProjectData;