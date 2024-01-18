import logo from './logo.svg';
import './App.scss';
import UserLogin from './website/UserLogin';
import RegisterForm from './website/RegisterForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='UserLogin'> <UserLogin /> </div>
        <div className='RegisterForm'> <RegisterForm /> </div>
      </header>
    </div>
  );
}

export default App;
