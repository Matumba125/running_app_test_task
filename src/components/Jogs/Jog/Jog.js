import React from 'react';
import style from './Jog.module.css'
import icon from '../../../common/img/icon.png'

const Jog = (props) => {

    const date = new Date(props.date*1000)
    const day =('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth()+1)).slice(-2);
    const year = date.getFullYear();

    return (
        <div className={style.jogWrapper}>
            <img src={icon} alt={'icon'}/>
            <div className={style.jogInfo}>
                <span className={style.propsData} style={{fontWeight:'normal'}}>{`${day}.${month}.${year}`}</span>
                <span>Speed:  <span className={style.propsData}>{(props.distance/props.time).toFixed(1)}</span></span>
                <span>Distance:  <span className={style.propsData}>{props.distance} km</span></span>
                <span>Time: <span className={style.propsData}>{props.time} min</span></span>
            </div>
        </div>
    );
};

export default Jog;