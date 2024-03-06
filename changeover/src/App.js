import './App.css';
// import HomePage from './components/Pages/Home';
import LoginPage from '../src/components/Login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='homeLayout'>
          <LoginPage></LoginPage>
          {/* <HomePage className='sidenav' /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
