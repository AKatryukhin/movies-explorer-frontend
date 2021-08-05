// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Navigation.css";

// function Navigation({isOpen, onClose}) {
//     return (
//         <div className={`navigation__popup ${isOpen  ? 'navigation__popup_opened' : ' '}`}>
//             <nav className="navigation__menu">
//             <button className="navigation__close-button" onClick={onClose}></button>
//                 <ul className="navigation__links">
//                     <li className="navigation__link-item">
//                         <NavLink
//                             to="/"
//                             className="navigation__link"
//                         >
//                             Главная
//                         </NavLink>
//                     </li>
//                     <li className="navigation__link-item">
//                         <NavLink
//                             to="/movies"
//                             className="navigation__link"
//                             activeClassName="navigation__link_active"
//                         >
//                             Фильмы
//                         </NavLink>
//                     </li>
//                     <li className="navigation__link-item">
//                         <NavLink
//                             to="/saved-movies"
//                             className="navigation__link"
//                             activeClassName="navigation__link_active"
//                         >
//                             Сохранённые фильмы
//                         </NavLink>
//                     </li>
//                     <li className="navigation__link-item navigation__link-item">
//                         <NavLink
//                             to="/profile"
//                             className="navigation__link navigation__profile-link"
//                             activeClassName="navigation__link_active"
//                         >
//                             Аккаунт
//                             <button className="navigation__profile-button" />
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

// export default Navigation;