import React from "react";
import './App.css';
import Main from "./components/Main/Main";
import CardList from "./components/CardList/CardList";
import beers from "./data/beers";

const App = () => {

  const createBeerCard = () => {
    beers.map((beer) => {
      return <Main key={beer.id} beer={beer} />
    })
  };

  return (
    <>
      <div className="App">
        <section className="main">
          {createBeerCard()}
        </section>
        <section>
          <CardList />
        </section>
      </div>
    </>
  );
}

export default App;
