import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/mainScreen/mainScreen'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen/>}/>
            <Route path="registration"/>
            <Route path="login"/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
