import React, { useEffect, useState } from "react";
import "./Main.scss";
import Card from "../../components/Card/Card";
// import CardList from "../CardList/CardList";

const Main = (props) => {
  const { searchTerm, beerAbv, beerDate, checkedAbv, checkedDate } = props;

  const [beersArr, setBeersArr] = useState([]);

  useEffect(() => {
    const URL = "https://api.punkapi.com/v2/beers";
    fetch(URL)
      .then((response) => response.json())
      .then((beer) => {
        console.log(beer);
        setBeersArr(beer);
      });
  }, []);

  const filteredBeers = beersArr.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    console.log("searchTerm =", searchTerm);
    console.log("Beer name includes=", beerName.includes(searchTerm));
    return beerName.includes(searchTerm);
  });

  const beerAbvJSX = beerAbv.map((beer, index) => {
    return (
      <>
        <Card
          key={"beer" + index}
          img={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      </>
    );
  });

    const beerDateJSX = beerDate.map((beer) => {
      return (
        <>
          <Card
            key={beer.id}
            img={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
          />
        </>
      );
    });

  const beerCardJSX = filteredBeers.map((beer, index) => {
    return (
      <>
        <Card
          key={"beer" + index}
          img={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
        />
      </>
    );
  });

  const displayCards = () => {
    if (checkedAbv) {
      return beerAbvJSX;
    } else if (checkedDate) {
      return beerDateJSX;
    } else {
      return beerCardJSX;
    }
  };

  //make another jsx variable that maps over a second filteredbbers array that only contains that abv beers array and also returns a card component with the right props, then create a function that produces an if statement where if checked is true then return the second jsx variable whereas if false the return the first jsx variable

  console.log(filteredBeers);

  console.log(beerCardJSX);

  return (
    <>
      <div className="container">{displayCards()}</div>
    </>
  );
};

export default Main;
