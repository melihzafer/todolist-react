import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import firebase from "firebase";
function TodoListItem({ todo, boolean, id }) {
  const db = firebase.firestore();
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      boolean: !boolean,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }
  return (
    <div className="lists">
      <ListItem className="listeitems">
        <ListItemText
          primary={todo}
          style={{ textDecorationLine: boolean ? "none" : "line-through" }}
        />
        <Button
          onClick={toggleInProgress}
          className="li-button"
          color="Primary"
          variant="contained"
        >
          {boolean ? "Done" : "Undone"}
        </Button>
        <Button
          onClick={deleteTodo}
          color="Secondary"
          className="li-button"
          variant="contained"
        >
          Delete
        </Button>
      </ListItem>
      <p>{todo.todo}</p>
    </div>
  );
}

export default TodoListItem;
