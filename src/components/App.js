import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import CardsList from "./CardsList";

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
	const [selectedSortValue, setSelectedSortValue] = useState("Default");

	return (
		<div className="App">
			<Nav />
			<CardsList hogsArray={hogsArray}/>
		</div>
	);
}

export default App;
