import React from 'react';
import style from './AuthPage.module.css'
import bearFace from '../../common/img/bear-face.png'
import mobileBearFace from '../../common/img/mobileBearFace.png'
import {useDispatch, useSelector} from "react-redux";
import {setAuthInfoTC} from "../../store/authReducer";
import {NavLink} from "react-router-dom";

const AuthPage = () => {

    const mobileMode = useSelector(state => state.app.mobileMode)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setAuthInfoTC())
    }

    return (
        <div className={style.container}>
            <div className={style.authWrapper}>
                <img src={mobileMode ? mobileBearFace : bearFace} className={style.bearFace} alt={'bearFace'}/>
                <NavLink to={'/test/jogs'} className={style.loginButton} onClick={onClickHandler}>
                    <span className={style.letMeIn}>Let me in</span>
                </NavLink>
            </div>
        </div>
    );
};

export default AuthPage;