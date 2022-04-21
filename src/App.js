import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import * as React from 'react';
import data from './data.json';
import ToDoList from './components/ToDoList';

function App() {
  const [ toDoList, setToDoList ] = React.useState(data);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
