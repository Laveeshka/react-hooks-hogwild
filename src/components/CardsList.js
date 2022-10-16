import Card from "./Card";

function CardsList({ hogsArray }) {

   
    let hogCards = hogsArray.map((hog, index) => {
        return (
            <Card key={index} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedalAchieved={hog["highest medal achieved"]} />
        )
    })

    return (
        <div className="ui grid container cards">
            {hogCards}
        </div>
    )
}

export default CardsList;