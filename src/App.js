import './App.module.css';
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Jogs from "./components/Jogs/Jogs";
import {Route} from 'react-router-dom'
import style from './App.module.css'
import React, {useEffect} from "react";
import AuthPage from "./components/AuthPage/AuthPage";
import {useDispatch, useSelector} from "react-redux";
import EditJog from "./components/EditJog/EditJog";
import {setMobileModeAC} from "./store/appReducer";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {

    const dispatch = useDispatch()

    const setMobileMode = () => {
        if (window.innerWidth < 1000) {
            dispatch(setMobileModeAC(true))
        }
    }

    const isAuth = useSelector(state => state.auth.isAuth)
    const mobileMode = useSelector(state => state.app.mobileMode)
    const mobileMenu = useSelector(state => state.app.mobileMenu)

    useEffect(() => {
    }, [isAuth, mobileMode, mobileMenu])

    useEffect(() => {
        setMobileMode()
    }, [])

    return (

        <div className={style.App}>
            {mobileMenu ?
                <MobileMenu/>
                :
                <div>
                    <Header/>
                    {!isAuth ?
                        <div className={style.authWrapper}>
                            <AuthPage/>
                        </div>
                        :
                        <div className={style.mainContent}>
                            {/*<AuthPage/>*/}
                            {/*<AddJog/>*/}
                            {/*<JogsIsMissing/>*/}
                            <Route path={"/test/jogs"} render={() => <Jogs/>}/>
                            <Route path={"/test/info"} render={() => <Info/>}/>
                            <Route path={"/test/add-jog"} render={() => <EditJog/>}/>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default App;
