import './App.css';
import { MainComponent } from './MainComponent';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent></MainComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
