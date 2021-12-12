import React, { useEffect, useState } from "react";
import './App.css';
import Main from "./containers/Main/Main";
import beers from "./data/beers";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [beer, setBeer] = useState();
  const [checkedAbv, setCheckedAbv] = useState(false);
  const [beerAbv, setBeerAbv] = useState([]);
  const [checkedDate, setCheckedDate] = useState(false);
  const [beerDate, setBeerDate] = useState([]);


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

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?abv_gt=6`
    fetch(URL)
      .then(response => response.json())
      .then(beer => {
        setBeerAbv(beer);
      });
  }, [])

  console.log(beerAbv);

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?brewed_before=01-2010`
    fetch(URL)
      .then(response => response.json())
      .then(beer => {
        setBeerDate(beer);
      });
  }, [])


  const handleAbvClick = (event) => {
    console.log(event)
    setCheckedAbv(event.target.checked)
  }

  const handleDateClick = (event) => {
    console.log(event)
    setCheckedDate(event.target.checked)
  }

  return (
    <>
      <div className="App">
        <section key={beers.id} className="main">
          <Main searchTerm={searchTerm} beerAbv={beerAbv} beerDate={beerDate} checkedAbv={checkedAbv} checkedDate={checkedDate} />
        </section>
        <section>
          <Navbar searchTerm={searchTerm} handleInput={handleInput} handleAbvClick={handleAbvClick} handleDateClick={handleDateClick} checkedAbv={checkedAbv} checkedDate={checkedDate} />
        </section>
      </div>
    </>
  );
}

export default App;
