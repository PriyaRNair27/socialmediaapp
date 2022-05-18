import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addpost from './Components/Addpost';
import Searchpost from './Components/Searchpost';
function App() {
  return (
    <div>
      <Addpost/>
      <Searchpost/>
    </div>
  );
}

export default App;
