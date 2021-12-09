import React from "react";
import "./Card.scss";

const Card = (props) => {

    const { img, name, tagline } = props;


    return <>
        <div>
            <img className="img" src={img} alt="" />
            <h1>{name}</h1>
            <h4>{tagline}</h4>
        </div>
    </>

};

export default Card;