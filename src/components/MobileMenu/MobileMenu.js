import React from 'react';
import style from "./MobileMenu.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMobileMenuAC} from "../../store/appReducer";
import mobileLogo from '../../common/img/logo.png'
import cancel from '../../common/img/cancelMobile.svg'

const MobileMenu = () => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setMobileMenuAC(false))
    }

    return (
        <div>
            <div className={style.header}>
                <img src={mobileLogo} alt={'mobile-logo'} className={style.logo}/>
                <img src={cancel} alt={'cancel'} className={style.cancel} onClick={onClickHandler}/>
            </div>
            <div className={style.navBlock}>
                <NavLink to={'/test/jogs'}
                         activeClassName={style.activeLink}
                         className={style.link}
                         onClick={onClickHandler}
                >
                    <h2>Jogs</h2>
                </NavLink>
                <NavLink className={style.link}
                         activeClassName={style.activeLink}
                         to={'/test/info'}
                         onClick={onClickHandler}
                >

                    <h2>Info</h2>
                </NavLink>
                <h2>Contact Us</h2>
            </div>
        </div>
    );
};

export default MobileMenu;