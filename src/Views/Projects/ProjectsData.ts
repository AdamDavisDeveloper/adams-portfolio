// Image imports for Vite build
//@ts-ignore
import ReactLogo from '/src/img/logos/react.png';           //@ts-ignore
import ViteLogo from '/src/img/logos/vite.png';             //@ts-ignore
import HtmlLogo from '/src/img/logos/html.png';             //@ts-ignore
import ScssLogo from '/src/img/logos/scss.png';             //@ts-ignore
import PythonLogo from '/src/img/logos/python.png';         //@ts-ignore
import FirebaseLogo from '/src/img/logos/firebase.png';     //@ts-ignore
import JavascriptLogo from '/src/img/logos/javascript.png'; //@ts-ignore
import TypescriptLogo from '/src/img/logos/typescript.png'; //@ts-ignore

// Korean Numbers Project
import KoreanNumbers_One from '/src/img/project/korean-numbers-01.png';     //@ts-ignore
import KoreanNumbers_Two from '/src/img/project/korean-numbers-01.png';     //@ts-ignore
import KoreanNumbers_Three from '/src/img/project/korean-numbers-03.png';   //@ts-ignore

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
    react:          {name: "React",         image: ReactLogo},
    vite:           {name: "Vite",          image: ViteLogo},
    html:           {name: "HTML",          image: HtmlLogo},
    scss:           {name: "SCSS",          image: ScssLogo},
    python:         {name: "Python",        image: PythonLogo},
    javascript:     {name: "JavaScript",    image: JavascriptLogo},
    typescript:     {name: "TypeScript",    image: TypescriptLogo},
    firebase:       {name: "TypeScript",    image: FirebaseLogo},
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
        id: "",
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
                imgPath: KoreanNumbers_One,
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: KoreanNumbers_Two
            },
            {
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut perspiciatis odit ad veritatis.",
                imgPath: KoreanNumbers_Three
            },
        ],
        technologies: [ technologies.html, technologies.scss, technologies.javascript ]
    }
]