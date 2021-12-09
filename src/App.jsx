import React, { useEffect, useState } from "react";
import './App.css';
import Main from "./containers/Main/Main";
import beers from "./data/beers";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [beer, setBeer] = useState();

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers/${searchTerm}`
    fetch(URL)
      .then(response => response.json())
      .then(beer => {
        setBeer(beer);
      });

  }, [searchTerm])

  const handleInput = (event) => {
    console.log(event);
    setSearchTerm(event.target.value)
  }

  console.log(beer);

  return (
    <>
      <div className="App">
        <section key={beers.id} className="main">
          <Main searchTerm={searchTerm} />
        </section>
        <section>
          <Navbar searchTerm={searchTerm} handleInput={handleInput} />
        </section>
      </div>
    </>
  );
}

export default App;
