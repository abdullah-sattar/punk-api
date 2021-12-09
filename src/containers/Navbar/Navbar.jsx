import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const Navbar = (props) => {

    const {handleInput, searchTerm} = props;

    return <SearchBox searchTerm={searchTerm} handleInput={handleInput} />

}

export default Navbar;

