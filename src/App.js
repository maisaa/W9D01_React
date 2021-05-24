import React from 'react';
import List from './components/List';


// jsx
const App = () => {

const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]
  


  return (
  <>
    <div>
      <h1>Todo List</h1>
      <List  collection={todos}/>
    </div>
  </>
  )
};

export default App