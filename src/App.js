import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <h1>Викторина</h1>

      {/* <Question igor={[1, 2, 3]} /> */}
      <Users />
    </div>
  );
}

export default App;
