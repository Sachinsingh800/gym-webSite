import Home from './home/Home';
import Image from './HomePage.jpg'
import './App.css'

function App() {
  return (
    <div >    
   <Home />
   <div>
    <img className='Backgrnd' src={Image} alt='Background'></img>
   </div>
    </div>
  );
}

export default App;
