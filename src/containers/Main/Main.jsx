import React from "react";
import "./Main.scss";
import Card from "../../components/Card/Card";
// import CardList from "../CardList/CardList";

const Main = (props) => {
  const { filteredBeers } = props;

  console.log(filteredBeers);

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


  return (
    <>
      {beerCardJSX}
    </>
  );
};

export default Main;
