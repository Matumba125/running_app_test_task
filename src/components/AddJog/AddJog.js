import React from 'react';
import style from "./AddJog.module.css";
import cancel from "../../common/img/cancel.png"

const AddJog = () => {
    return (
        <div className={style.container}>
            <div className={style.addJogWrapper}>
                <div className={style.cancelWrapper}>
                    <img src={cancel} className={style.cancel}/>
                </div>
                <div className={style.inputWrapper}>
                    <div className={style.inputItem}>
                        <span>Distance</span>
                        <input/>
                    </div>
                    <div className={style.inputItem}>
                        <span>Time</span>
                        <input/>
                    </div>
                    <div className={style.inputItem}>
                        <span>Data</span>
                        <input/>
                    </div>
                </div>
                <div>
                    <button className={style.addJogBtn}>
                        <span>Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddJog;