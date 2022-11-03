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
import KoreanNumbers_Two from '/src/img/project/korean-numbers-02.png';     //@ts-ignore
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
    javascript: {name: "JavaScript",    color: "rgba(223, 217, 61, 0.58)"},
    typescript: {name: "TypeScript",    color: "#234D5A"},
    generative: {name: "Generative",    color: "#235A29"},
    algorithm:  {name: "Algorithm",     color: "#5A2330"},
    learning:   {name: "Learning",      color: "#315E4B"}
}

export const technologies = {
    react:          {name: "React",         image: ReactLogo},
    vite:           {name: "Vite",          image: ViteLogo},
    html:           {name: "HTML",          image: HtmlLogo},
    scss:           {name: "SCSS",          image: ScssLogo},
    python:         {name: "Python",        image: PythonLogo},
    javascript:     {name: "JavaScript",    image: JavascriptLogo},
    typescript:     {name: "TypeScript",    image: TypescriptLogo},
    firebase:       {name: "Firebase",      image: FirebaseLogo},
}

export const ProjectTileData: projectTileTypes[] = [
    {
        title: "Professional Portfolio",
        description: "wow, you're on this website right now!",
        urlSlug: "this-website",
        imagePath: "",
        tags: [ tags.typescript, tags.generative, tags.algorithm ],
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
        writeUp: "While I was on my journey to Korean fluency, I reached the point where I must learn the TWO (what in the world Korea) number systems which they use. Making 10 flashcards was no problem, but the mental algorithm you have to do to convert digits into Korean could only be effectively practiced if I hand wrote several hundred cards. Since I'm not psychotic, I decided to make this site to help myself and anyone else who is learning Korean numbers. The technology I chose was intentionally vanilla. I wanted this to be fast, simple, and lightweight as to be maintainable and quick to production. Plus, vanilla HTML/JS is just cool, yo.",
        liveURL: "https://learn-korean-numbers.netlify.app/",
        github: "https://github.com/AdamDavisDeveloper/learn-korean-numbers",
        sections: [
            {
                text: "A flashcard is shown with a Korean number written on the front. The integer is chosen at random from 1-9999 and my algorithm uses the Korean numbers rules to generate the Sino or Native Korean word for that number. Clicking the circular refresh button will give you a new card.",
                imgPath: KoreanNumbers_One,
            },
            {
                text: "Tapping the card will cause the card to animate as it flips over to reveal the decimal numerical integer. One nice thing here is that you can test yourself from both ways! Tapping the refresh button in this state will show you a new integer, allowing you to guess what the Korean word would be, then you can flip to see if you're correct.",
                imgPath: KoreanNumbers_Two,
            },
            {
                text: "I created a Settings tab so you can easily switch between Sino / Native number systems, and to decide if you want the Sino 10, 100, and 1000 words highlighted on the card (which I found extremely helpful). I also thought it would be fun to have custom toggles here with the Octopus character to give this site a little more charm.",
                imgPath: KoreanNumbers_Three,
            },
        ],
        technologies: [ technologies.html, technologies.scss, technologies.javascript ]
    }
]