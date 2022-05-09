import React, { useEffect, useState } from "react";
import "./App.scss";
import Main from "./containers/Main/Main";
import beers from "./data/beers";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerArr, setBeerArr] = useState([]);
  const [checkedAbv, setCheckedAbv] = useState(false);
  const [checkedDate, setCheckedDate] = useState(false);
  const [checkedPh, setCheckedPh] = useState(false);
  const [abv, setAbv] = useState("");
  const [dateBrewed, setDateBrewed] = useState("");

  useEffect(() => {
    if (checkedAbv && checkedDate) {
      setAbv("&abv_gt=6");
      setDateBrewed("?brewed_before=01-2010");
    } else if (checkedAbv) {
      setAbv("?abv_gt=6");
    } else if (checkedDate) {
      setDateBrewed("?brewed_before=01-2010");
    } else {
      setAbv("");
      setDateBrewed("");
    }
    const URL = `https://api.punkapi.com/v2/beers${dateBrewed}${abv}`;
    fetch(URL)
      .then((response) => response.json())
      .then((beers) => {
        if (checkedPh) {
          setBeerArr(beers.filter(beer => {return beer.ph < 4 && beer.name.toLowerCase().includes(searchTerm)}))
        } else {
          setBeerArr(beers.filter(beer => {return beer.name.toLowerCase().includes(searchTerm)}));
        }
      });
  }, [abv, dateBrewed, searchTerm, checkedAbv, checkedDate, checkedPh]);

  const handleInput = (event) => {
    console.log(event);
    setSearchTerm(event.target.value);
  };

  const handleAbvClick = (event) => {
    console.log(event);
    setCheckedAbv(event.target.checked);
  };

  const handleDateClick = (event) => {
    console.log(event);
    setCheckedDate(event.target.checked);
  };

  const handlePhClick = (event) => {
    console.log(event);
    setCheckedPh(event.target.checked);
  };

  return (
    <>
      <div className="App">
        <section className="navbar">
          <Navbar
            searchTerm={searchTerm}
            handleInput={handleInput}
            handleAbvClick={handleAbvClick}
            handleDateClick={handleDateClick}
            handlePhClick={handlePhClick}
          />
        </section>
        <section key={beers.id} className="main">
          <Main
            filteredBeers={beerArr}
          />
        </section>
      </div>
    </>
  );
};

export default App;
