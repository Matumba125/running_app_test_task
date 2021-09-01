import './App.css';
import Header from "./components/Header/Header";
import AuthPage from "./components/AuthPage/AuthPage";
import AddJog from "./components/AddJog/AddJog";
import Info from "./components/Info/Info";
import JogsIsMissing from "./components/JogsIsMissing/JogsIsMissing";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={'mainContent'}>
            {/*<AuthPage/>*/}
            {/*<AddJog/>*/}
            {/*<Info/>*/}
            <JogsIsMissing/>
        </div>
    </div>
  );
}

export default App;
