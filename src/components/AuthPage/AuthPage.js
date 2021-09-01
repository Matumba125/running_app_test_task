import React from 'react';
import style from './AuthPage.module.css'
import bearFace from '../../common/img/bear-face.png'

const AuthPage = () => {
    return (
        <div className={style.container}>
            <div className={style.authWrapper}>
                <img src={bearFace} className={style.bearFace} alt={'bearFace'}/>
                <button className={style.loginButton}>
                    <span className={style.letMeIn}>Let me in</span>
                </button>
            </div>
        </div>
    );
};

export default AuthPage;