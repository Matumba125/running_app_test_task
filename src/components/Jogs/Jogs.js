import React, {useEffect, useState} from 'react';
import Jog from "./Jog/Jog";
import style from './Jogs.module.css'
import FilterField from "./FilterField/FilterField";
import addJog from '../../common/img/add.png'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Jogs = () => {

    const filterStat = useSelector(state => state.filter.filterStatus)

    useEffect(()=>{
        setFilter(filterStat)
    },[filterStat])

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
        },
        {
            "id": 3789,
            "user_id": "3",
            "distance": 64,
            "time": 43,
            "date": 1607731200
        },
        {
            "id": 3790,
            "user_id": "3",
            "distance": 87,
            "time": 54,
            "date": 1607731200
        },
        {
            "id": 3791,
            "user_id": "3",
            "distance": 37,
            "time": 37,
            "date": 1607731200
        },
        {
            "id": 3792,
            "user_id": "3",
            "distance": 53,
            "time": 3737,
            "date": 1607731200
        },
        {
            "id": 3793,
            "user_id": "3",
            "distance": 15,
            "time": 60,
            "date": 1630454400
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