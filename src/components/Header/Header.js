import React, {useState} from 'react';
import style from './Header.module.css'
import logo from '../../common/img/desktopLogo.png'
import filter from '../../common/img/filter.png'
import activeFilter from '../../common/img/filter-active.png'
import mobileMenu from '../../common/img/menu.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setMobileMenuAC, switchFilter} from "../../store/appReducer";

const Header = () => {

    const mobileMode = useSelector(state => state.app.mobileMode)

    const dispatch = useDispatch()

    const [isFilter, setIsFilter] = useState(false)

    const onClickHandler = () => {
        setIsFilter(!isFilter)
        dispatch(switchFilter(!isFilter))
    }

    const onMenuClickHandler = () => {
        dispatch(setMobileMenuAC(true))
    }

    return (
        <header className={style.appHeader}>
            <div className={style.logo}>
                <img src={logo} alt={'logo'}/>
            </div>
            {mobileMode ?
                <div className={style.navBlock}>
                    <img src={isFilter ? activeFilter : filter}
                         alt={'filter'}
                         onClick={onClickHandler}/>
                <NavLink to={'/test/mobileMenu'} >
                    <img src={mobileMenu} alt="mobile-menu" onClick={onMenuClickHandler}/>
                </NavLink>
                </div>
                    :
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
            }
        </header>
    );
};

export default Header;