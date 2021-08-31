import './App.css';
import Header from "./components/Header/Header";
import AuthPage from "./components/AuthPage/AuthPage";
import AddJog from "./components/AddJog/AddJog";

function App() {
  return (
    <div className="App">
        <Header/>
        <div>
            {/*<AuthPage/>*/}
            <AddJog/>
        </div>
    </div>
  );
}

export default App;
