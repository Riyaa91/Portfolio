import './App.css';
import Home from './Components/Home/Home';
import About2 from './Components/AboutMe/About2';
import Resume from './Components/Resume/Resume';
import Email from './Components/ContactMe/Contact';
function App() {
  return (
    <div className="App">
        <Home/>
        <About2/>
        <Resume/>
        <Email/>
    </div>
  );
}

export default App;
