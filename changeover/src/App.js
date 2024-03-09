import './App.css';
import Login from '../src/components/Login/Login'
import Signup from './components/Login/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='homeLayout'>
          <Router>
            <Routes>
              <Route  path="/" element={<Login/>} />
              <Route  path="/signup" element={<Signup/>} />
            </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
