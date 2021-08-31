import React from 'react';
import style from './Header.module.css'
import logo from '../../common/img/logo.png'

const Header = () => {
    return (
        <header className={style.appHeader}>
            <img src={logo} className={style.logo}/>
        </header>
    );
};

export default Header;