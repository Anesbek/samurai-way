import React from "react";
import App from "../../App";
import s from './Header.module.css';

 const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg" alt=""/>
            </header>
        </div>

    )
}

export default Header;