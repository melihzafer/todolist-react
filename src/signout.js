import React from "react";
import firebase from "firebase/app";

function SignOut() {
  function logout() {
    firebase.auth().signOut();
  }

  return (
    firebase.auth().currentUser && (
      <a
        onClick={logout}
        className="text-dark my-3"
        href="#"
        tabIndex="-1"
        aria-disabled="true"
      >
        Sign Out
      </a>
    )
  );
}

export default SignOut;
