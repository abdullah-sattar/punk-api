import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filter from "../../components/Filter/Filter";

const Navbar = (props) => {
  const { handleInput, searchTerm, handleAbvClick, checkedAbv, handleDateClick, checkedDate, handlePhClick, checkedPh } = props;

  return (
    <div className="nav">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <Filter checkedAbv={checkedAbv} checkedDate={checkedDate} checkedPh={checkedPh} handleAbvClick={handleAbvClick} handleDateClick={handleDateClick} handlePhClick={handlePhClick}  />
    </div>
  );
};

export default Navbar;