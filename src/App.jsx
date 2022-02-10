import React, { useEffect, useState } from "react";
import './App.scss';
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
  const [checkedPh, setCheckedPh] = useState(false);



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
  
  const handlePhClick = (event) => {
    console.log(event)
    setCheckedPh(event.target.checked)
  }

  return (
    <>
      <div className="App">
        <section className="navbar">
          <Navbar searchTerm={searchTerm} handleInput={handleInput} handleAbvClick={handleAbvClick} handleDateClick={handleDateClick} handlePhClick={handlePhClick} />
        </section>
        <section key={beers.id} className="main">
          <Main searchTerm={searchTerm} beerAbv={beerAbv} beerDate={beerDate} checkedAbv={checkedAbv} checkedDate={checkedDate} checkedPh={checkedPh} />
        </section>
      </div>
    </>
  );
}

export default App;

// checkedAbv={checkedAbv} checkedDate={checkedDate} checkedPh={checkedPh}