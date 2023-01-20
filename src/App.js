import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import HomePage from './components/HomePage';


// no router, just have it as a single page.

function App() {
  return (
    <>
      <div>
        <HomePage />
      </div>
    </>
  )
}

export default App;