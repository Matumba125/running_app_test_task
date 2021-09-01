import React from 'react';
import style from './JogsIsMissing.module.css'
import errorImage from '../../common/img/sad-rounded-square-emoticon.png'

const JogsIsMissing = () => {
    return (
        <div className={style.jogIsMissingWrapper}>
            <div className={style.errorMessageWrapper}>
                <img src={errorImage}/>
                <span>Nothing is there</span>
            </div>
            <button className={style.createJogBtn}>
                <span>Create your jog first</span>
            </button>
        </div>
    );
};

export default JogsIsMissing;