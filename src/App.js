// import logo from './logo.svg';
import './App.css';
import './assets/css/editors-choice.css'
import './assets/css/product-recomendation.css'
import './assets/css/product-recomendation.css'
import Home from './component/Home';
import Navbar from './component/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home></Home>
    </div>
  );
}

export default App;
