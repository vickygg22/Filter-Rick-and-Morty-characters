import React from "react";

const CharacterCard = (props) => {
    return (
        <div className="card col-3 mt-3 displaying">
        <img src={props.character.image} className="imageSize" id="square1" alt={props.character.name}/>
        <h4 className=" mt-3 text-dark">{props.character.name}</h4>
        <p>{props.character.location.name}</p>
      </div>
    )
};
export default CharacterCard;