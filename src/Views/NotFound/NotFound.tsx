import React from "react";
//@ts-ignore
import WizardImage from '/src/img/WizardImage.webp';

// Styles
import './NotFound.scss';

export default function() {
    return (
        <div id="NotFound">
            <h1>The chosen path reveals an old wizard...</h1>

            <div id="Wizard">
                <img src={WizardImage} alt="a funny looking wizard" />
                <p>
                    Aha! You've found me, brave web surfer! Unfortunately, I have nothing to give you aside from sage advice... <br />
                </p>
                <h2>Click a button below to return to your travels.</h2>
            </div>
        </div>
    )
}