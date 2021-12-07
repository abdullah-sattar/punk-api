import React from "react";
// import CardList from "../CardList/CardList";

const Main = (props) => {

    const { beers } = props;

    const getName = beers.map(beer => {
        return <>
        <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p>{beer.description}</p>
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
            <div>
                {getName}
            </div>
        </>
    )
}

export default Main;