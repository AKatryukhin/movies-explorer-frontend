import React, { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
    const [isChecked, setChecked] = useState(false);
    function onChange(event) {
        setChecked(event.target.checked);
    }
    return (
        <div className="filter-checkbox">
           
            <input
                type="checkbox"
                className="filter-checkbox__input"
                name="filterCheckbox"
                id="filterCheckbox"
                checked={isChecked}
                onChange={(e) => onChange(e)}
            />
             <label className="filter-checkbox__label">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;