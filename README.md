# Adam Davis's Tech Portfolio

<i>I've made a few of these and ended up hating them all so this one might not be different.</i> 🗿 <br>

## I love this website!
It's so increibly easy for me to made edits and add new projects due to the way I set up React to generate the website by reading Typescript objects.
```
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
            vertical: false
        },
    ],
    technologies: []
}
```
Above we have an example of a Project's data and my React components handle arrays of such objects to create the website. 👍

## Dev Notes
After cloning this for the first time, make sure you run `yarn` to download all dependencies, make sure you have the Firebase CLI downloaded (usually globally) and is available in the root directory as you'll need to use this for hosting. If this is the first time on this machine you may need to login by running `firebase login`.<br>
Once you've made all the code changes you'd like to make, run `yarn build` (which finishes so damn fast) and then run `firebase deploy --only hosting` for a quick and painless deployment.