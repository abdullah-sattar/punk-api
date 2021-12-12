import React from "react";

const SearchBox = (props) => {

    const { searchTerm, handleInput } = props;

    return <form>
        <input type="text" placeholder="search..." value={searchTerm} onInput={handleInput} />
    </form>

}

export default SearchBox;