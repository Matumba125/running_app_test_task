import React, {useState} from 'react';
import style from './FilterField.module.css'
import {useDispatch} from "react-redux";
import {filterJogsAC} from "../../../store/jogReducer";

const FilterField = () => {

    const dispatch = useDispatch()

    const [dateFrom, setDateFrom] = useState()
    const [dateTo, setDateTo] = useState()

    const onDateFromChangeHandler = (e) => {
        setDateFrom(e.currentTarget.value)
    }
    const onDateToChangeHandler = (e) => {
        setDateTo(e.currentTarget.value)
    }

    const onClickHandler =()=>{
        const newDateFrom = new Date(dateFrom?.split(`.`).reverse().join('-')).getTime()/1000
        const newDateTo = new Date(dateTo?.split(`.`).reverse().join('-')).getTime()/1000
        dispatch(filterJogsAC(newDateFrom || '', newDateTo || ''))
    }

    return (
        <div className={style.filterWrapper}>
            <div className={style.filterItem}>
                <span>Date from</span>
                <input value={dateFrom} onChange={onDateFromChangeHandler}/>
            </div>
            <div className={style.filterItem}>
                <span>Date to</span>
                <input value={dateTo} onChange={onDateToChangeHandler}/>
            </div>
            <button onClick={onClickHandler}>
                Set
            </button>
        </div>
    );
};

export default FilterField;