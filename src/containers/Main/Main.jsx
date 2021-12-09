import React, { useEffect, useState } from "react";
import "./Main.scss";
import Card from "../../components/Card/Card";
// import CardList from "../CardList/CardList";

const Main = (props) => {

    const { searchTerm } = props;

    const [beersArr, setBeersArr] = useState([]);

    useEffect(() => {
        const URL = "https://api.punkapi.com/v2/beers"
        fetch(URL)
            .then(response => response.json())
            .then(beer => {
                console.log(beer)
                setBeersArr(beer);
            })

    }, [])

    const filteredBeers = beersArr.filter(beer => {
        const beerName = beer.name.toLowerCase();
        console.log("searchTerm =", searchTerm)
        console.log("Beer name includes=", beerName.includes(searchTerm))
        return beerName.includes(searchTerm)
    })

    const beerCardJSX = filteredBeers.map((beer, index) => {
        return <>
            <Card key={"beer" + index} img={beer.image_url} name={beer.name} tagline={beer.tagline} />
        </>
    })

    console.log(filteredBeers);

    console.log(beerCardJSX);

    return (
        <>
            <div className="container">
                {beerCardJSX}
            </div>
        </>
    )
}

export default Main;