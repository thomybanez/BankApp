import './App.css';
import Links from './Links.js';

const location = ["Home","About","Contact Us"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Links items = {location}/>             
      </header>
    </div>
  );
}

export default App;