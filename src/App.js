// import logo from './logo.svg';
import './App.css';
import './assets/css/editors-choice.css'
import './assets/css/product-recomendation.css'
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home></Home>
    </div>
  );
}

export default App;
