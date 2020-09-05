import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to database and fetch new todos to add/remove

 useEffect(() => {
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
     setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
   })
 }, []);
  
  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();        //will stop refershing the page again and again.
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>🔥Hello folks!!🆒</h1>
      <h1>Make your todo list now🔥🔥</h1>
      <form>
      <FormControl>
        <InputLabel >✅Write a Todo</InputLabel>
        <Input  value= {input} onChange = {event => setInput(event.target.value)} />
      </FormControl>
      <Button disabled = {! input} type= "submit" onClick = {addTodo} variant="contained" color="primary">Add todo</Button>
      </form>
      <ul>
      {todos.map(todo => (
        <Todo todo = {todo} />
  ))}
       
      </ul>

    </div>
  );
}

export default App;
