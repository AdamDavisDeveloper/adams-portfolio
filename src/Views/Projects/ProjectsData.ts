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

const technologies = {
    react:          {name: "React",         image: "/src/img/logos/react.png"},
    vite:           {name: "Vite",          image: "/src/img/logos/vite.png"},
    html:           {name: "HTML",          image: "/src/img/logos/html.png"},
    scss:           {name: "SCSS",          image: "/src/img/logos/scss.png"},
    python:         {name: "Python",        image: "/src/img/logos/python.png"},
    javascript:     {name: "JavaScript",    image: "/src/img/logos/javascript.png"},
    typescript:     {name: "TypeScript",    image: "/src/img/logos/typescript.png"},
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
        ],
        technologies: []
    },
    {
        id: "korean-flashcards",
        title: "Korean Flashcards",
        subtitle: "Generated flash cards to help you study Sino and Native Korean numbers",
        writeUp: "",
        liveURL: "https://learn-korean-numbers.netlify.app/",
        github: "https://github.com/AdamDavisDeveloper/learn-korean-numbers",
        sections: [
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: "/src/img/project/korean-numbers-01.png"
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: "/src/img/project/korean-numbers-02.png"
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: "/src/img/project/korean-numbers-03.png"
            },
        ],
        technologies: [ technologies.vite, technologies.typescript, technologies.react ]
    }
]