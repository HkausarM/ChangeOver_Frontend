import './App.css';
import HomePage from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='homeLayout'>
          <HomePage className='sidenav' />
        </div>
      </header>
    </div>
  );
}

export default App;
