import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filter from "../../components/Filter/Filter";

const Navbar = (props) => {
  const { handleInput, searchTerm, handleAbvClick, handleDateClick, handlePhClick } = props;

  return (
    <div className="nav">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <Filter handleAbvClick={handleAbvClick} handleDateClick={handleDateClick} handlePhClick={handlePhClick}  />
    </div>
  );
};

export default Navbar;