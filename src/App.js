// import logo from './logo.svg';
import './App.css';
import './assets/css/editors-choice.css'
import './assets/css/product-recomendation.css'
import './assets/css/trending.css'
import './assets/css/latest-article.css'
import './assets/css/latest-review.css'
import './assets/css/popular-groups.css'
import Home from './component/Home';
import Navbar from './component/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      {/* <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div> */}

        <Navbar></Navbar>
        <Home></Home>
    </div>
  );
}

export default App;
