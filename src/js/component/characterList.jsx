import React from "react";
import CharacterCard from "./characterCard.jsx";
import data from "./data.json"

const CharacterList = (props) => {
    const auxList = data.map((character) => {
        return <CharacterCard key={character.id} character={character}/>
        
    })
    const filteredData = auxList.filter((el) => {
        //if no input the return the original
        if (props.input === "") {
            return el;
        } else if (el.props.character.name.toLowerCase().includes(props.input.toLowerCase())) {
            //returns filtered array
            return el;
          }
    })
    
    return (
        <div>
            {filteredData}
        </div>
    )
};
export default CharacterList;