import React from "react";

const Filter = (props) => {

    const {checkedAbv, checkedDate, handleDateClick, handleAbvClick} = props;

    return (
        <div>
            <label htmlFor="abv">High ABV (6%)</label>
            <input type="checkbox" name="highAbv" id="abv" checked={checkedAbv} onClick={handleAbvClick} />
            <label htmlFor="date">Classic Range</label>
            <input type="checkbox" name="dateBrewed" id="date" checked={checkedDate} onClick={handleDateClick} />
        </div>
    )
}

export default Filter;
