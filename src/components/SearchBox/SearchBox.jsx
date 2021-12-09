import React from "react";

const SearchBox = (props) => {

    const { searchTerm, handleInput } = props;

    return <form>
        <input type="text" value={searchTerm} onInput={handleInput} />
    </form>

}

export default SearchBox;