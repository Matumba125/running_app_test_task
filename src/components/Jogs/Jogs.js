import React, {useEffect, useState} from 'react';
import Jog from "./Jog/Jog";
import style from './Jogs.module.css'
import FilterField from "./FilterField/FilterField";
import addJog from '../../common/img/add.png'
import {useDispatch, useSelector} from "react-redux";
import EditJog from "../EditJog/EditJog";
import {setAddMode, setEditMode} from "../../store/appReducer";
import {getJogsTC} from "../../store/jogReducer";

const Jogs = () => {

        const filterStat = useSelector(state => state.app.filterStatus)
        const editMode = useSelector(state => state.app.editMode)
        const addMode = useSelector(state => state.app.addMode)
        const jogs = useSelector(state => state.jogs.jogs)

        const dispatch = useDispatch()

        const [jogDistance, setJogDistance] = useState(0)
        const [jogTime, setJogTime] = useState(0)
        const [currentJogId, setCurrentJogId] = useState(0)
        const [userId, setUserId] = useState(0)
        const [jogDate, setJogDate] = useState(0)

        const onDoubleClickHandler = (distance, time, jogId, userId, jogDate) => {
            setJogDistance(distance)
            setJogTime(time)
            setCurrentJogId(jogId)
            setUserId(userId)
            setJogDate(jogDate)
            dispatch(setEditMode(!editMode))
        }

        const onClickHandler = () => {
            dispatch(setAddMode(!addMode))
        }

        useEffect(() => {
            dispatch(getJogsTC())
        }, [])

        useEffect(() => {
        }, [filterStat, editMode, addMode, jogs])

        const renderElement = () => {
            if (editMode) {
                return <EditJog editing={true}
                                distance={jogDistance}
                                time={jogTime}
                                jogId={currentJogId}
                                userId={userId}
                                jogDate={jogDate}
                />
            } else if (addMode) {
                return <EditJog editing={false}/>
            } else {
                return (
                    <div>
                        {
                            filterStat ?
                                <FilterField/> : ''
                        }
                        <div className={style.jogsWrapper}>
                            {jogs.map(m =>
                                <Jog key={m.id}
                                     date={m.date}
                                     time={m.time}
                                     distance={m.distance}
                                     jogId={m.id}
                                     userId={m.user_id}
                                     onDoubleClick={onDoubleClickHandler}
                                />
                            )}
                        </div>
                        <div className={style.addJogBtn} onClick={onClickHandler}>
                            <img src={addJog} alt={'add'}/>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div id={'hello'} className={style.jogsWithFilterWrapper}>
                {renderElement()}
            </div>
        )
    }
;

export default Jogs;