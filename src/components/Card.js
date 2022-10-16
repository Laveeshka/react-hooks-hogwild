import { useState } from "react";

function Card({ name, image, specialty, weight, greased, highestMedalAchieved }) {
    const [isClicked, setIsClicked] = useState(false); //by default other details in the card are not displayed

    function handleClick() {
        setIsClicked((wasClicked) => !wasClicked);
        console.log(isClicked);
    }

    const otherDetails = isClicked ? (
        <>
            <div className="description">
                {specialty}
            </div>
            <div className="description">
                {weight}
            </div>
            <div className="description">
                {greased}
            </div>
            <div className="description">
                {highestMedalAchieved}
            </div>
        </>
    ) : null;

    const hogCard = (
        <div className="ui card six wide column" isClicked={isClicked} onClick={handleClick} >
            <div className="image">
                <img src={image} />
            </div>
            <div className="content">
                <a className="header">{name}</a>
                {otherDetails}
                {/* <div class="meta">
                    <span class="date">Joined in 2013</span>
                </div>
                <div class="description">
                    Kristy is an art director living in New York.
                </div> */}
            </div>
        </div>
    )

    return (
        <>
            {hogCard}
        </>
    )
}

export default Card;