import React, { useState } from "react";
import CharacterList from "./characterList.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value;
    setInputText(lowerCase);
  };
	return (
		<div className="text-center">
			<h1>Rick and Morty characters</h1>
			<input type="text" placeholder="Filter by name" onChange={inputHandler}/>
			<div className="row">
				<CharacterList input={inputText}/>
			</div>
		</div>
	);
};

export default Home;
