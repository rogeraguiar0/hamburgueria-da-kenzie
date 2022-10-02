import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;
