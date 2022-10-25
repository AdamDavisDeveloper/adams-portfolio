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

const tags = {
    javascript: {name: "Javascript",    color: "rgba(223, 217, 61, 0.58)"},
    generative: {name: "Generative",    color: "#234D5A"},
    algorithm:  {name: "Algorithm",     color: "#5A2330"},
    learning:   {name: "Learning",      color: "#315E4B"}
}

export const ProjectTileData: projectTileTypes[] = [
    {
        title: "Professional Portfolio",
        description: "wow, you're on this website right now!",
        urlSlug: "this-website",
        imagePath: "",
        tags: [ tags.javascript, tags.generative, tags.algorithm ],
    },
    {
        title: "See Something New",
        description: "guaranteed to be shown what no one has ever seen or will see again.",
        urlSlug: "see-something-new",
        imagePath: "",
        tags: [ tags.javascript, tags.generative, tags.algorithm ],
    },
    {
        title: "Korean Flashcards",
        description: "10,000 generated flash cards to help you study Sino and Native Korean numbers.",
        urlSlug: "korean-flashcards",
        imagePath: "",
        tags: [ tags.generative, tags.algorithm, tags.learning ],
    }
]

export const ProjectData = [
    // the "id" MUST be same as project tile urlSlug for filtering
    // first one leave blank to keep find method from failing w/ undefined
    {
        id: "leave blank and index 0",
        title: "",
        subtitle: "",
        writeUp: "",
        liveURL: "",
        github: "",
        sections: [
            {
                text: "",
                imgPath: ""
            },
        ]
    },
    {
        id: "korean-flashcards",
        title: "Korean Flashcards",
        subtitle: "Generated flash cards to help you study Sino and Native Korean numbers",
        writeUp: "",
        liveURL: "",
        github: "",
        sections: [
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: "/src/img/project/korean-numbers-01"
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: "/src/img/project/korean-numbers-02"
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: "/src/img/project/korean-numbers-03"
            },
        ]
    }
]