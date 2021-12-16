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
import Footer from './component/Footer';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
    </div>
  );
}

export default App;
