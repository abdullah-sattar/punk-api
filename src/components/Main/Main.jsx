import React, {useEffect, useState} from "react";
import "../Main/Main.scss";
import Card from "../Card/Card";
// import CardList from "../CardList/CardList";

const Main = () => {

    // const { beers } = props;

    const [beersArr, setBeersArr] = useState([]);

    useEffect(() => {
        const URL = "https://api.punkapi.com/v2/beers"
        fetch(URL)
        .then(response => response.json())
        .then(beer => {
            setBeersArr(beer);
        })
        
    }, [])

    const beerCardJSX = beersArr.map(beer => {
        return <>
            <div key={beer.id} className="cards">
                <Card  img={beer.image_url} name={beer.name} tagline={beer.tagline} />
            </div>
        </>
    })

    {/* <img className="cards__img" src={beer.image_url} alt="" />
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>{beer.description}</p> */}

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
                {beerCardJSX}
            </div>
        </>
    )
}

export default Main;