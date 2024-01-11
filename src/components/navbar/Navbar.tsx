import React from "react";
import clases from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={clases.nav}>
            <div className={clases.item}>
                <NavLink to="/profile" activeClassName={clases.active}>Profile</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/dialogs" activeClassName={clases.active}>Message</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/news" activeClassName={clases.active}>News</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/musıc" activeClassName={clases.active}>Music</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/Settings" activeClassName={clases.active}>Settings</NavLink>
            </div>
        </nav>
    )
}