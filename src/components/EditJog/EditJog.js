import React, {useState} from 'react';
import style from "./EditJog.module.css";
import cancel from "../../common/img/cancel.png"
import {useDispatch} from "react-redux";
import {setAddMode, setEditMode} from "../../store/appReducer";
import {addJogTC, editJogTC} from "../../store/jogReducer";

const EditJog = (props) => {

    const dispatch = useDispatch()

    const [jogDistance, setJogDistance] = useState(props.distance || 0)
    const [jogTime, setJogTime] = useState(props.time || 0)
    const [jogDate, setJogDate] = useState(props.jogDate || '')

    const onDistanceChangeHandler = (e) => {
        setJogDistance(e.currentTarget.value)
    }
    const onTimeChangeHandler = (e) => {
        setJogTime(e.currentTarget.value)
    }
    const onDateChangeHandler = (e) => {
        setJogDate(e.currentTarget.value)
    }

    const onSaveClickHandler = () => {
        if(!props.editing) {
            dispatch(addJogTC(jogDate, jogTime, jogDistance))
        }else{
            dispatch(editJogTC(jogDate, jogTime, jogDistance, props.jogId, props.userId))
        }
        dispatch(setEditMode(false))
        dispatch(setAddMode(false))
    }

    const onCancelClickHandler = () => {
        dispatch(setEditMode(false))
        dispatch(setAddMode(false))
    }

    return (
        <div className={style.container}>
            <div className={style.editJogWrapper}>
                <div className={style.cancelWrapper} onClick={onCancelClickHandler}>
                    <img src={cancel} alt={'cancel'}/>
                </div>
                <div className={style.inputWrapper}>
                    <div className={style.inputItem}>
                        <span>Distance</span>
                        <input value={jogDistance} onChange={onDistanceChangeHandler} type={'number'}/>
                    </div>
                    <div className={style.inputItem}>
                        <span>Time</span>
                        <input value={jogTime} onChange={onTimeChangeHandler} type={'number'}/>
                    </div>
                    <div className={style.inputItem}>
                        <span>Date</span>
                        <input value={jogDate} onChange={onDateChangeHandler} type={'date'}/>
                    </div>
                </div>
                <div className={style.buttonWrapper}>
                    <button className={style.addJogBtn} onClick={onSaveClickHandler}>
                        <span>Save</span>
                    </button>
                    {props.editing &&
                    <button className={style.cancelEditing} onClick={onCancelClickHandler}>
                        <span>Cancel</span>
                    </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default EditJog;