import React from "react";
import './App.css';
import beers from "./data/beers";

function App() {
  return (
    <>
      <div className="App">
        <section>
          <Navbar />
        </section>
        <section className="main">
          <Main />
        </section>
      </div>
    </>
  );
}

export default App;
