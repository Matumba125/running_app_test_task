import './App.module.css';
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Jogs from "./components/Jogs/Jogs";
import {Route} from 'react-router-dom'
import AddJog from "./components/AddJog/AddJog";
import style from './App.module.css'

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <div className={style.mainContent}>
                {/*<AuthPage/>*/}
                {/*<AddJog/>*/}
                {/*<JogsIsMissing/>*/}
                <Route path={"/test/jogs"} render={() => <Jogs/>}/>
                <Route path={"/test/info"} render={() => <Info/>}/>
                <Route path={"/test/add-jog"} render={() => <AddJog/>}/>
            </div>
        </div>
    );
}

export default App;
