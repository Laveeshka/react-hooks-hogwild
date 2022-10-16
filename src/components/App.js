import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import CardsList from "./CardsList";
import HogFilter from "./HogFilter";
import HogSorter from "./HogSorter";
import HogToggle from "./HogToggle";
import NewHogForm from "./NewHogForm";

//Quel amour étrange pour les cochons

//map out components hierarchy
//-App (holds hogs list state, boolean showHogs state, boolean isGreased state )
//--Nav
//--HogFilter (checkbox)
//--HogSorter (select)
//--HogToggle (button)
//--NewHogForm (holds name, specialty, greased, weight and image state)
//--CardsList 
//---Card (will hold boolean isClicked state)


function App() {
	//states
	const [hogsArray, setHogsArray] = useState(hogs); 
	const [showHogs, setShowHogs] = useState(true);
	const [isGreased, setIsGreased] = useState(false);
	const [selectedSortValue, setSelectedSortValue] = useState("default");

	const filteredHogsArray = hogsArray.filter(hog => {
		if (isGreased){
			return hog.greased === isGreased;
		}
		else {
			return true;
		}
	})

	switch(selectedSortValue){
		case "name":
			filteredHogsArray.sort((a, b) => a.name.localeCompare(b.name));
			break;
		case "weight":
			filteredHogsArray.sort((a, b) => a.weight - b.weight);
			break;
		default:
			break;
			
	}

	function addHog(newHog){
		const newHogs = [...hogsArray, newHog];
		setHogsArray(newHogs);
	}

	return (
		<div className="App">
			<Nav />
			<HogFilter isGreased={isGreased} setIsGreased={setIsGreased}/>
			<HogSorter setSelectedSortValue={setSelectedSortValue}/>
			<HogToggle showHogs={showHogs} onButtonClick={setShowHogs}/>
			<br></br>
			<br></br>
			<NewHogForm onHogFormSubmit={addHog}/>
			<br></br>
			<br></br>
			<CardsList hogsArray={filteredHogsArray} showHogs={showHogs}/>
		</div>
	);
}

export default App;
