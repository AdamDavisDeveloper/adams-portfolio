// -------- Image imports for Vite build -------- //
//@ts-ignore
import ReactLogo from '/src/img/logos/react.png';           //@ts-ignore
import ViteLogo from '/src/img/logos/vite.png';             //@ts-ignore
import HtmlLogo from '/src/img/logos/html.png';             //@ts-ignore
import CSSLogo from '/src/img/logos/css.png';               //@ts-ignore
import ScssLogo from '/src/img/logos/scss.png';             //@ts-ignore
import PythonLogo from '/src/img/logos/python.png';         //@ts-ignore
import FirebaseLogo from '/src/img/logos/firebase.png';     //@ts-ignore
import JavascriptLogo from '/src/img/logos/javascript.png'; //@ts-ignore
import TypescriptLogo from '/src/img/logos/typescript.png'; //@ts-ignore
import FigmaLogo from '/src/img/logos/figma.png';           //@ts-ignore

// Korean Numbers Project
import KoreanNumbers_Image_01 from '/src/img/project/korean-numbers-01.png';    //@ts-ignore
import KoreanNumbers_Image_02 from '/src/img/project/korean-numbers-02.png';    //@ts-ignore
import KoreanNumbers_Image_03 from '/src/img/project/korean-numbers-03.png';    //@ts-ignore
// See Something New Project
import SomethingNew_Image_01 from '/src/img/project/something-new-01.png'; //@ts-ignore
// Links+ Project
import LinksPlus from '/src/img/project/links-plus.png'; //@ts-ignore
// Palvox
import Palvox01 from '/src/img/project/palvox/01.png' //@ts-ignore
import Palvox02 from '/src/img/project/palvox/02.gif' //@ts-ignore
import Palvox03 from '/src/img/project/palvox/03.png' //@ts-ignore
import Palvox04 from '/src/img/project/palvox/04.png' //@ts-ignore
// OQUARO project
import OQUAROInteriors from '/src/img/project/oqaro.png' //@ts-ignore
// The Outer Space Connector project
import OuterConnector01 from '/src/img/project/outer-connector-01.gif' //@ts-ignore
import OuterConnector02 from '/src/img/project/outer-connector-02.gif' //@ts-ignore
// Cozy Chillhop
import CozyChillhop01 from '/src/img/project/cozy-chillhop/cozy-chillhop-01.png' //@ts-ignore
import CozyChillhop02 from '/src/img/project/cozy-chillhop/cozy-chillhop-02.png' //@ts-ignore
// -------- End image imports -------- //

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

// Helper Functions

// Determines a project's subtitle by matching the project's ID 
// to the url-slug of it's matching project tile description 
// and returns the string or undefined if not found.
function getProjectDescriptionFromTile(projectID: string): string | undefined {
    const projectTile = ProjectTileData.find((tile) => tile.urlSlug === projectID);
    return projectTile?.description;
}

const tags = {
    javascript:     {name: "JavaScript",        color: "rgba(223, 217, 61, 0.58)"},
    typescript:     {name: "TypeScript",        color: "#234D5A"},
    generative:     {name: "Generative",        color: "#235A29"},
    algorithm:      {name: "Algorithm",         color: "#5A2330"},
    learning:       {name: "Learning",          color: "#315E4B"},
    design:         {name: "Design",            color: "#00c3da"},
    fullstack:      {name: "Fullstack",         color: "#5fc69b"}
}

export const technologies = {
    react:          {name: "React",         image: ReactLogo},
    vite:           {name: "Vite",          image: ViteLogo},
    html:           {name: "HTML",          image: HtmlLogo},
    css:            {name: "CSS",           image: CSSLogo},
    scss:           {name: "SCSS",          image: ScssLogo},
    python:         {name: "Python",        image: PythonLogo},
    javascript:     {name: "JavaScript",    image: JavascriptLogo},
    typescript:     {name: "TypeScript",    image: TypescriptLogo},
    firebase:       {name: "Firebase",      image: FirebaseLogo},
    figma:          {name: "Figma",         image: FigmaLogo},
}

export const ProjectTileData: projectTileTypes[] = [
    // {
    //     title: "Professional Portfolio",
    //     description: "wow, you're on this website right now!",
    //     urlSlug: "this-website",
    //     imagePath: "",
    //     tags: [ tags.typescript, tags.generative, tags.algorithm ],
    // },
    {
        title: "The Outer Space Connector 🚏🌒",
        description: `A way to connect with your neighbors in "space".`,
        urlSlug: "outer-space-connector",
        imagePath: "",
        tags: [ tags.typescript, tags.fullstack, tags.design ],
    },
    {
        title: "See Something New",
        description: "You're guaranteed to be shown what no one has ever seen before or will see again.",
        urlSlug: "see-something-new",
        imagePath: "",
        tags: [ tags.javascript, tags.generative, tags.algorithm ],
    },
    {
        title: "Links+",
        description: "A place for me to display links to my various socials.",
        urlSlug: "links-plus",
        imagePath: "",
        tags: [ tags.design ],
    },
    {
        title: "Palvox",
        description: "Send and receive anonymous audio messages with strangers.",
        urlSlug: "palvox",
        imagePath: "",
        tags: [ tags.design, tags.fullstack, tags.javascript ],
    },
    {
        title: "Korean Flashcards",
        description: "10,000 generated flash cards to help you study Sino and Native Korean numbers.",
        urlSlug: "korean-flashcards",
        imagePath: "",
        tags: [ tags.generative, tags.algorithm, tags.learning ],
    },
    {
        title: "Cozy Music Player",
        description: "A React music player for listening to a currated list of chillhop beats for studying/coding.",
        urlSlug: "cozy-chillhop",
        imagePath: "",
        tags: [ tags.javascript, tags.design ],
    },
    {
        title: "OQARO Interiors",
        description: "A simple yet elegant design for a high end designer brand.",
        urlSlug: "oqaro-interiors",
        imagePath: "",
        tags: [ tags.design ],
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
                imgPath: "",
                vertical: false // image will be set above the text when true
            },
        ],
        technologies: []
    },
    {
        id: "outer-space-connector",
        title: "The Outer Space Connector 🚏🌒",
        subtitle: getProjectDescriptionFromTile("outer-space-connector"),
        writeUp: "My brother and I were talking about how cool it would be to leave hidden QR codes around the towns where we live and see if anyone finds them and scans them with their phones. That lead to this idea which is a web app which creates QR codes that my bro and I can place in any location, and the QR codes will act as entry points to a digital message board which is only accessible at that location. This allows for random people to attach a message when they discover these QR codes and read messages from those who preceeded them. It's outer space bus-stop themed. [This project is being built currently]",
        liveURL: "",
        github: "",
        sections: [
            {
                text: `The "feel" of this website was important in making the user feel that they found something special and hidden. I gave a slight delay and a fade-in effect before you see anything on the website. This has the added benefit of weeding out trolls who wouldn't have a long enough attention span to wait 3 seconds for the UI to materialize. lol`,
                imgPath: OuterConnector01,
                vertical: false
            },
            {
                text: "I continued using basic motion design here to give a more intentional feel to the website. Here you can see some transition ideas and the message board. This is still a work in progress and I would like each location to have a specified title given by my brother or I.",
                imgPath: OuterConnector02,
                vertical: false
            },
        ],
        technologies: [ technologies.react, technologies.typescript, technologies.scss, technologies.firebase, technologies.figma ]
    },
    {
        id: "see-something-new",
        title: "See Something New",
        subtitle: getProjectDescriptionFromTile("see-something-new"),
        writeUp: "When you refresh the image, you have a possibility, regardless of how slim, of seeing a picture of anything in existence. You are looking at something which has statistically never been viewed by any human in all of history or will ever see throughout the life of the universe. There is a 1 in (1.5252803... x 10^1155955) chance of any one image being shown to you. I wrote a compact script to create the 400 rows and fill each row with 400 colored divs. The idea came to me while considering the perfectly square tiles covering the walls in the room where I was sitting.",
        liveURL: "https://see-something-new.netlify.app/",
        github: "https://github.com/AdamDavisDeveloper/see-something-new",
        sections: [
            {
                text: "Javascript algorithm creates 160,000 1x1px divs with randomly set hex code colors (16,777,216 color possibilities per pixel) in a 400x400px square.",
                imgPath: SomethingNew_Image_01,
                vertical: false
            },
        ],
        technologies: [ technologies.html, technologies.scss, technologies.javascript ]
    },
    {
        id: "links-plus",
        title: "Links+",
        subtitle: getProjectDescriptionFromTile("links-plus"),
        writeUp: "I made this as a way for me to have a digital business card which outlinks to my important social accounts and websites. I chose to use vanilla web technologies to increase response time and decrease dev time. I used 10mm NFC chips which, when placed in my wrist-watches, allows people to tap their phones on my watch and get a push notification which opens their default browser to this website. For Sass compiling, I used Glenn Marks' Live Sass Compliler for VS Code. ",
        liveURL: "https://profile.adamdavisdeveloper.com",
        github: "https://github.com/AdamDavisDeveloper/nfc-links",
        sections: [
            {
                text: `This is the figma design for the newest version of this website. It went through multiple color pallete itterations until I finally landed on this one. I used the "Dictionary of Color Combinations, Vol. 1" as inspiration to help decide on a mood. At writing, the design has not been fully developed and migrated from the old placeholder design.`,
                imgPath: LinksPlus,
                vertical: false
            },
        ],
        technologies: [ technologies.html, technologies.scss ]
    },
    {
        id: "palvox",
        title: "Palvox",
        subtitle: getProjectDescriptionFromTile("palvox"),
        liveURL: "https://palvox-dev.web.app/",
        writeUp: `Palvox is a project I started in 2022 as a way to both give people a way to connect without the burden of traditional social media and as a platform which is audio-first and completely accessible to those with visual disabilities. Palvox is an app which allows users (or "Pals") to create short audio recordings on their phones and send them out where the messages will be delivered to a random set of other users. When a message is delivered to your mailbox from another Pal, you will have the option to follow them to continue receiving their future messages. All Pals are anonymous first, meaning that the Pal display names shown in the mailbox are randomly generated and not chosen by users. I wanted this app to be a fun way to connect with strangers in a pro-parasocial format, allowing users to listen to others, not being able to directly communicate back to them but able to toss their own thoughts out to other strangers. Unfortunately, as these projects often go, I got very busy with work and shelved the project only to return and find that I have gotten so much better at systems design that this code base needs a total overhaul. Additionally, capturing audio has less browser support than I originally thought and I would rewrite this project using React Native should I pick it up again.`,
        github: "",
        sections: [
            {
                text: `These are screenshots of the initial developed designs for Palvox. This is the view shown to anyone who arrives on the Palvox web app and hasn't logged in or created an account yet.`,
                imgPath: Palvox01,
                vertical: false
            },
            {
                text: `I used the Framer Motion library to prototype some basic motion design here and I used the slide in modal to reduce what I call "view switching fatigue."`,
                imgPath: Palvox02,
                vertical: false
            },
            {
                text: `This is the account creation screen which you would see after chosing an email and password (I used Firebase Authentication). Initially, I was using an API called DiceBear for randomized SVG character profile pictures. I would allow the Pal (user) to select one from the list or generate a new list of random profile photo options. This API no longer exists so I just have colored circles for now.`,
                imgPath: Palvox03,
                vertical: false
            },
            {
                text: `Here is the Profile view as seen by a logged in Pal. Here, Pals can navigate using the conventiently placed bottom navigation bar with three straightforward options: Profile, Send Messages, and Mailbox. The profile view gives status and information around the currently logged in Pal. The Send Messages view allows Pals to record a <20sec voice recording and send it out to random Pals' mailboxes. And the Mailbox is where a Pal can check to see if any messages have been delivered to their box, listen to the messages, and choose to follow any Pal who sends interesting messages.`,
                imgPath: Palvox04,
                vertical: false
            },
        ],
        technologies: [ technologies.react, technologies.javascript, technologies.firebase, technologies.figma ]
    },
    {
        id: "korean-flashcards",
        title: "Korean Flashcards",
        subtitle: getProjectDescriptionFromTile("korean-flashcards"),
        writeUp: "While I was on my journey to Korean fluency, I reached the point where I must learn the TWO (what in the world Korea) number systems which they use. Making 10 flashcards was no problem, but the mental algorithm you have to do to convert digits into Korean could only be effectively practiced if I hand wrote several hundred cards. Since I'm not psychotic, I decided to make this site to help myself and anyone else who is learning Korean numbers. The technology I chose was intentionally vanilla. I wanted this to be fast, simple, and lightweight as to be maintainable and quick to production. Plus, vanilla HTML/JS is just cool, yo.",
        liveURL: "https://learn-korean-numbers.netlify.app/",
        github: "https://github.com/AdamDavisDeveloper/learn-korean-numbers",
        sections: [
            {
                text: "A flashcard is shown with a Korean number written on the front. The integer is chosen at random from 1-9999 and my algorithm uses the Korean numbers rules to generate the Sino or Native Korean word for that number. Clicking the circular refresh button will give you a new card.",
                imgPath: KoreanNumbers_Image_01,
                vertical: false
            },
            {
                text: "Tapping the card will cause the card to animate as it flips over to reveal the decimal numerical integer. One nice thing here is that you can test yourself from both ways! Tapping the refresh button in this state will show you a new integer, allowing you to guess what the Korean word would be, then you can flip to see if you're correct.",
                imgPath: KoreanNumbers_Image_02,
                vertical: false
            },
            {
                text: "I created a Settings tab so you can easily switch between Sino / Native number systems, and to decide if you want the Sino 10, 100, and 1000 words highlighted on the card (which I found extremely helpful). I also thought it would be fun to have custom toggles here with the Octopus character to give this site a little more charm.",
                imgPath: KoreanNumbers_Image_03,
                vertical: false
            },
        ],
        technologies: [ technologies.html, technologies.scss, technologies.javascript ]
    },
    {
        id: "cozy-chillhop",
        title: "Cozy Music Player",
        subtitle: getProjectDescriptionFromTile("cozy-chillhop"),
        writeUp: "I made this three years ago when I was first learning React. I was really into listening to chillhop music while programming and I wanted to use my new skills to make a cool looking music player.",
        liveURL: "https://cozycoding.netlify.app/",
        github: "https://github.com/AdamDavisDeveloper/react-player",
        sections: [
            {
                text: "The design was kept very simple for this project. I made a custom media player with SCSS and HTML which uses a gradient background matching the album image's colors. The album cover slowly spins like a record when the music is playing and stops when paused.",
                imgPath: CozyChillhop01,
                vertical: false
            },
            {
                text: `The "Library" button on the top right opens of a list of playable songs hosted directly on the website itself. On desktop and mobile the selected song is highlighted amnd when the songs are scrolled over (on desktop) the increase in side subtely to give a more interactive experience.`,
                imgPath: CozyChillhop02,
                vertical: false
            },
        ],
        technologies: [ technologies.react, technologies.html, technologies.scss, technologies.javascript ]
    },
    {
        id: "oqaro-interiors",
        title: "OQARO Interiors",
        subtitle: getProjectDescriptionFromTile("oqaro-interiors"),
        writeUp: "I created this in an effort to code a sleek landing page quickly for practice. I made it three years ago and it's amazing to see the progress I have made. I'm including it on this website for old times sake, and for me to be grateful to my past self for puting in the hard work back then. 💪",
        liveURL: "",
        github: "",
        sections: [
            {
                text: "",
                imgPath: OQUAROInteriors,
                vertical: true
            },
        ],
        technologies: [ technologies.html, technologies.css ]
    },
]