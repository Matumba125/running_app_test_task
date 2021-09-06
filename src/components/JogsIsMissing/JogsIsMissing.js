import React from 'react';
import style from './JogsIsMissing.module.css'
import errorImage from '../../common/img/sad-rounded-square-emoticon.png'
import {NavLink} from "react-router-dom";

const JogsIsMissing = () => {
    return (
        <div className={style.jogIsMissingWrapper}>
            <div className={style.errorMessageWrapper}>
                <img src={errorImage} alt={'errorMessage'}/>
                <span>Nothing is there</span>
            </div>
            <NavLink to={'/test/add-jog'} className={style.createJogBtn}>
                <span>Create your jog first</span>
            </NavLink>
        </div>
    );
};

export default JogsIsMissing;