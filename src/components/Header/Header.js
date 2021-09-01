import React, {useState} from 'react';
import style from './Header.module.css'
import logo from '../../common/img/logo.png'
import filter from '../../common/img/filter.png'
import activeFilter from '../../common/img/filter-active.png'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {switchFilter} from "../../store/filterReducer";

const Header = () => {

    const dispatch = useDispatch()

    const [isFilter, setIsFilter] = useState(false)

    const onClickHandler = () =>{
        setIsFilter(!isFilter)
        dispatch(switchFilter(!isFilter))
    }

    return (
        <header className={style.appHeader}>
            <div className={style.logo}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={style.navBlock}>
                <NavLink to={'/test/jogs'}
                         activeClassName={style.activeLink}
                         className={style.link}
                >
                    <h2>Jogs</h2>
                </NavLink>
                <NavLink className={style.link}
                    activeClassName={style.activeLink}
                             to={'/test/info'}>
                    <h2>Info</h2>
                </NavLink>
                <h2>Contact Us</h2>
                <img src={isFilter ? activeFilter : filter}
                     alt={'filter'}
                     onClick={onClickHandler}/>
            </div>
        </header>
    );
};

export default Header;