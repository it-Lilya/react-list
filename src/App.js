import Listing from '../src/components/Listing';
import './App.css';
import etsy from './data/etsy';

function App() {
 
  return (
    <div className="App">
      <Listing items={etsy}/>
    </div>
  );
}

export default App;
