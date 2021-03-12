import logo from './logo.svg';
import './App.css';
import Cup from './components/Cup';
import MeasureApp from './components/MeasureApp';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Cup />
        <MeasureApp />
      </div>
    </div>
  );
}

export default App;
