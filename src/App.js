import logo from './logo.svg';
import './App.css';
import About from './pages/about'
import Product from './pages/products'
import { useState } from 'react';
function App() {

  let [isVisible, setIsVisible] = useState(false)
  
  return (
    <div className="App">
      <header className="App-header">
        <About />
        {/* {
           isVisible === true? <Product /> : null
        } */}
        <Product />
        
        <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
       

      </header>
    </div>
  );
}

export default App;
