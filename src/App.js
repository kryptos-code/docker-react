import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Rehman's page
        </p>
        <strong>Basement</strong>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        Please subscribe to my youtube channel <a href="http://www.instagram.com/kryptos_shoaib">Instagram</a>
      </footer>
    </div>
  );
}

export default App;
