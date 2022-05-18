import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addpost from './Components/Addpost';
import Searchpost from './Components/Searchpost';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<Addpost/>}/>
        <Route path="/search" exact element={<Searchpost/>}/>
        <Route path="/" exact element/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
