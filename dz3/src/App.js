import './App.css';
import ReactBook from "./components/reactBook/ReactBook";
import ReactCopy from "./components/reactCopy/ReactCopy";
import Register from "./components/register/Register";

function App() {
  return (
      <div className="App">
        <ReactBook/>
        <ReactCopy/>
        <Register/>
      </div>
  );
}

export default App;