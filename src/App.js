import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:4200/dashboard?identifier=748"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mock Login
        </a>
      </header>
    </div>
  );
}

export default App;
