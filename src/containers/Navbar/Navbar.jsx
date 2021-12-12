import React from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filter from "../../components/Filter/Filter";

const Navbar = (props) => {
  const { handleInput, searchTerm, handleAbvClick, checkedAbv, handleDateClick, checkedDate } = props;

  return (
    <div>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <Filter checkedAbv={checkedAbv} checkedDate={checkedDate} handleAbvClick={handleAbvClick} handleDateClick={handleDateClick}  />
    </div>
  );
};

export default Navbar;