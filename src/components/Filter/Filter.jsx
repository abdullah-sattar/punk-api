import React from "react";
import "./Filter.scss"

const Filter = (props) => {

    const {checkedAbv, checkedDate, checkedPh, handleDateClick, handleAbvClick, handlePhClick} = props;

    return (
        <div className="filter">
            <label htmlFor="abv">High ABV (> 6%)</label>
            <input type="checkbox" name="highAbv" id="abv" checked={checkedAbv} onClick={handleAbvClick} />
            <label htmlFor="date">Classic Range</label>
            <input type="checkbox" name="dateBrewed" id="date" checked={checkedDate} onClick={handleDateClick} />
            <label htmlFor="ph">Acidic - ph lower than 4</label>
            <input type="checkbox" name="lowerph" id="ph" checked={checkedPh} onClick={handlePhClick} />
        </div>
    )
}

export default Filter;
