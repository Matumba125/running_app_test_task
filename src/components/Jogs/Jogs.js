import React, {useState} from 'react';
import Jog from "./Jog/Jog";
import style from './Jogs.module.css'
import FilterField from "./FilterField/FilterField";
import addJog from '../../common/img/add.png'
import {NavLink} from "react-router-dom";

const Jogs = () => {

    const [filter, setFilter] = useState(false)

    const jogs = [
        {
            "id": 3092,
            "user_id": "3",
            "distance": 98,
            "time": 57,
            "date": 0
        },
        {
            "id": 3093,
            "user_id": "3",
            "distance": 55,
            "time": 4,
            "date": 1088035200
        },
        {
            "id": 3094,
            "user_id": "3",
            "distance": 54,
            "time": 4,
            "date": 1053388800
        },
        {
            "id": 3095,
            "user_id": "3",
            "distance": 45,
            "time": 34,
            "date": 1056499200
        }
    ]

    return (
        <div className={style.jogsWithFilterWrapper}>
            {filter ?
                <FilterField/> : ''
            }
            <div className={style.jogsWrapper}>
                {jogs.map(m =>
                    <Jog key={m.id}
                         date={m.date}
                         time={m.time}
                         distance={m.distance}
                         userId={m.user_id}
                         jogId={m.id}
                    />
                )}
            </div>
            <div className={style.addJogBtn}>
                <NavLink to={'/test/add-jog'}>
                    <img src={addJog} alt={'add'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default Jogs;