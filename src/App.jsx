import React from "react";
import './App.css';
import Main from "./components/Main/Main";
import beers from "./data/beers";

const App = () => {

  return (
    <>
      <div className="App">
        <section className="main">
          <Main  />
        </section>
        {/* <section>
          <CardList />
        </section> */}
      </div>
    </>
  );
}

export default App;
