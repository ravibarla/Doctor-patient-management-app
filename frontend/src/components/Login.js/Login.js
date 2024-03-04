import React, { useEffect, useState } from "react";
import "../styles/Login.styles.css";
import { Navigate, useParams } from "react-router";
import { usersType } from "../Home/usersType";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { type } = useParams();
  const user = usersType.filter((user) => user.type == type);
  // console.log(user[0]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handlelogin = async () => {
    try {
      const response = await fetch(user[0].loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        // .then((res) => console.log(res))
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server:", data);
          // alert("successfully logged in");
        });
    } catch (err) {
      console.log(err);
    }
  };
  const styles = {
    body: {
      position: "relative",
      height: "80vh",
      width: "100%",
      minHeight: "80vh",
      backgroundColor: "B5C0D0",
    },
    container: {
      backgroundColor: "cyan",
      height: " 100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "wrap",
      width: "auto",
    },
    flexItem: {
      border: "2px solid black",
      width: "40%",
      minWidth: "40%",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(password);
    handlelogin();
  };
  return (
    <div style={styles.body}>
      <div className="card" style={styles.container}>
        <div className="flex-item" style={styles.flexItem}>
          brand
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label>username</label>
            <input
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>password</label>
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button>Login</button>
            <p>Not a member yet ? </p>
            <button>
              <NavLink to={`/register/${type}`}>Sign Up</NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
