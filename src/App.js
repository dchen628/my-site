import logo from './logo.svg';
import Spline from '@splinetool/react-spline';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spline scene="https://prod.spline.design/NwqqNy6qm8Nea8Yo/scene.splinecode" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
