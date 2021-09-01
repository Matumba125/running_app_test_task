import React from 'react';
import style from './FilterField.module.css'

const FilterField = () => {
    return (
        <div className={style.filterWrapper}>
            <div className={style.filterItem}>
                <span>Date from</span>
                <input/>
            </div>
            <div className={style.filterItem}>
                <span>Date to</span>
                <input/>
            </div>
        </div>
    );
};

export default FilterField;