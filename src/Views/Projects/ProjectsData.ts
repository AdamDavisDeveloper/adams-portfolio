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

const ProjectData: projectTileTypes[] = [
    {
        title: "See Something New",
        description: "guaranteed to be shown what no one has ever seen or will see again.",
        urlSlug: "see-something-new",
        imagePath: "",
        tags: [
            {name: "Javascript",    color: "rgba(223, 217, 61, 0.58)"},
            {name: "Generative",    color: "#234D5A"},
            {name: "Algorithm",      color: "#5A2330"},
        ],
    },
    {
        title: "See Something New",
        description: "guaranteed to be shown what no one has ever seen or will see again.",
        urlSlug: "see-something-new",
        imagePath: "",
        tags: [
            {name: "Javascript",    color: "rgba(223, 217, 61, 0.58)"},
            {name: "Generative",    color: "#234D5A"},
            {name: "Algorithm",      color: "#5A2330"},
        ],
    }
]

export default ProjectData;