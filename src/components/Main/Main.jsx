import React from "react";
import "../Main/Main.scss";
// import CardList from "../CardList/CardList";

const Main = (props) => {

    const { beers } = props;

    const createCards = beers.map(beer => {
        return <>
            <div className="cards">
                <img className="cards__img" src={beer.image_url} alt="" />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>{beer.description}</p>
            </div>
        </>
    })

    // const getImg = beers.map(beer => {
    //     return beer.image_url
    // })

    // const getTagLine = beers.map(beer => {
    //     return beer.tagline
    // })

    // const getDescription = beers.map(beer => {
    //     return beer.description
    // })


    return (
        <>
            <div className="container">
                {createCards}
            </div>
        </>
    )
}

export default Main;