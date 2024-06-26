import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/mainScreen'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
