import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import Users from './components/Users'
import FuncComponent from './components/type-components/FuncComponent'
import ClassComponent from './components/type-components/ClassComponent'

function App() {
  return (
    <div className="App">
      <h1>Викторина</h1>

      {/* <Question igor={[1, 2, 3]} /> */}
      {/* <Users /> */}
      <FuncComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
