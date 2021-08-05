// import React, { useState } from "react";
// import "./ToggleSwitch.css";

// function ShortMoviesToggle({ onCheckboxToggle }) {
//     const [isChecked, setChecked] = useState(false);
//     function onChange(event) {
//         onCheckboxToggle(!isChecked);
//         setChecked(event.target.checked);
//     }
//     return (
//         <div className="toggle-switch">
//             <label className="toggle-switch__label">Короткометражки</label>
//             <input
//                 type="checkbox"
//                 className="toggle-switch__checkbox"
//                 name="shortMoviesToggle"
//                 id="shortMoviesToggle"
//                 checked={isChecked}
//                 onChange={(e) => onChange(e)}
//             />
//         </div>
//     );
// }

// export default ShortMoviesToggle;