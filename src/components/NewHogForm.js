import { useState } from "react";

function NewHogForm({ onHogFormSubmit }) {
    //states for hog properties
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
    const [weight, setWeight] = useState(0);
    const [highestMedalAchieved, setHighestMedalAchieved] = useState("");
    const [image, setImage] = useState("");

    function handleChange(event){
        const name = event.target.name;
        let value = event.target.value;

        if (event.target.type === "checkbox")
            value = event.target.checked;

        switch(name) {
            case "name":
                setName(value);
                break;
            case "specialty":
                setSpecialty(value);
                break;
            case "greased":
                setGreased(value);
                break;
            case "weight":
                setWeight(value);
                break;
            case "highest medal achieved":
                setHighestMedalAchieved(value);
                break;
            case "image":
                setImage(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        const newHog = {
            name,
            specialty,
            greased,
            weight,
            "highest medal achieved": highestMedalAchieved,
            image
        }
        onHogFormSubmit(newHog);
    }

    return (
        <form onSubmit={handleSubmit} className="new-hog-form">
            <label>
                Name
                <input type="text" name="name" value={name} onChange={(handleChange)} />
            </label>
            <label>
                Specialty
                <input type="text" name="specialty" value={specialty} onChange={(handleChange)} />
            </label>
            <label>
                Greased
                <input type="checkbox" name="greased" checked={greased} onChange={(handleChange)} />
            </label>
            <label>
                Weight
                <input type="number" name="weight" value={weight} onChange={(handleChange)} />
            </label>
            <label>
                Highest medal achieved
                <input type="text" name="highest medal achieved" value={highestMedalAchieved} onChange={(handleChange)} />
            </label>
            <label>
                Image
                <input type="text" name="image" value={image} onChange={(handleChange)} />
            </label>
            <input type="submit" value="Add hog" />
        </form>
    )
}

export default NewHogForm;