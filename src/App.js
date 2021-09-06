import './App.module.css';
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Jogs from "./components/Jogs/Jogs";
import {Route} from 'react-router-dom'
import style from './App.module.css'
import React, {useEffect} from "react";
import AuthPage from "./components/AuthPage/AuthPage";
import {useSelector} from "react-redux";
import EditJog from "./components/EditJog/EditJog";

function App() {

    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(() => {
    }, [isAuth])

    return (

        <div className={style.App}>
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
    );
}

export default App;
