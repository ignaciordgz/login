import logo from './logo.svg';
import './App.css';
import RegisterButton from './components/registerButton/registerButton';
import ButtonLogin from './components/buttonLogin/buttonLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterButton></RegisterButton>
        <ButtonLogin></ButtonLogin>
      </header>
    </div>
  );
}

export default App;
