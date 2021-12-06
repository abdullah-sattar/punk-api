import React from "react";
// import CardList from "../CardList/CardList";

const Main = (props) => {

    const { name, tagline, description, image_url } = props.beer;

    return (
        <>
        <div>
            <img src={image_url} alt="" />
            <h1>{name}</h1>
            <h2>{tagline}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}

export default Main;