import './App.css';
import HomePage from '../src/components/Pages/Home'
import Login from '../src/components/Login/Login'
import Signup from './components/Login/SignIn';
import SellItemPage from './components/Pages/SellItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='homeLayout'>
          <Router>
            <Routes>
            <Route  path="/" element={<HomePage/>} />
              <Route  path="/Login" element={<Login/>} />
              <Route  path="/Signup" element={<Signup/>} />
              <Route  path="/Sell" element={<SellItemPage/>} />
            </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
