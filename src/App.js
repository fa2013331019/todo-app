import React, {Component} from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import CounterButton from './components/counter/Counter'
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css'


function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      <TodoApp/>
    </div>
  );
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="Learning Components">
        My Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
      </div>
    );
  }
}



function FourthComponent() {
  return(
    <div className="fourthComponent">
     Fourth Component
    </div>
  );
}

export default App;
