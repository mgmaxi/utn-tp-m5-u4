import logo from './logo.png';
import './App.css';
import ViewFilms from './components/ViewFilms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ViewFilms />
      </header>
    </div>
  );
}

export default App;
