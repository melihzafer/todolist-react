import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import TodoListItem from "./Todo";
import firebase from "firebase";
import SignOut from "./signout";
function Home() {
  const db = firebase.firestore();
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      boolean: "true",
      todo: todoInput,
      data: firebase.firestore.FieldValue.serverTimestamp(),
      uid: firebase.auth().currentUser.email,
    });
    setTodoInput("");
  }

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          boolean: doc.data().boolean,
          uid: doc.data().uid,
        }))
      );
    });
  }
  return (
    <div className="App2">
      <h1>Zwolfe ToDo App</h1>

      <form>
        <TextField
          className="Input"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
          id="standard-basic"
          label="Type a task"
        />

        <Button
          type="submit"
          style={{ display: "none" }}
          onClick={addTodo}
          variant="contained"
        >
          Default
        </Button>
      </form>
      {todos.map((todo) => {
        if (todo.uid == firebase.auth().currentUser.email) {
          return (
            <TodoListItem
              todo={todo.todo}
              boolean={todo.boolean}
              key={todo.id}
              id={todo.id}
            />
          );
        }
      })}
      <br />
      <h6>Zwolfe | © Copyright by Melih Zafer </h6>
      <SignOut />
    </div>
  );
}

export default Home;
