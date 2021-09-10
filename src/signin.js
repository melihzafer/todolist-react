import React from "react";
import firebase from "firebase/app";
import "./firebase_confg";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

function LoginGoogle() {
  const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="card mx-auto" style={{ width: "50%", marginTop: "30vh" }}>
      <h5 className="card-header">Zwolfe</h5>
      <div className="card-body">
        <h5 className="card-title">Log In</h5>
        <p className="card-text">Login with your Google Account.</p>
        <button onClick={googleLogin} className="btn-dark btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
export default LoginGoogle;
