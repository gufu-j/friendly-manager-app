import './App.css';
import {Route, Routes} from "react-router-dom";

import Home from './Home';

function App() {
  return (
    <div>
    <Routes>
          <Route exact path="/" element={ <Home/> } />
    </Routes>
    </div>
  );
}

export default App;
