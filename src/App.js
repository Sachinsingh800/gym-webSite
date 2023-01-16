import Home from './Component/home/Home';
import Image from './HomePage.jpg'
import './App.css'

function App() {
  return (
    <div className='homePage'>    
   <Home />
    <img className='Backgrnd' src={Image} alt='Background'></img>
    </div>
  );
}

export default App;
