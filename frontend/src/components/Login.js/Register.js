import React, { useState } from "react";
import { usersType } from "../Home/usersType";
import { useParams } from "react-router-dom";

export default function Register() {
  const { type } = useParams();
  const user = usersType.filter((user) => user.type == type);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const handleRegister = async () => {
    try {
      const response = await fetch(user[0].registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
        body: JSON.stringify({
          username: username,
          password: password,
          dob: dob,
          mobile: mobile,
        }),
      })
        .then((response) => response.json())
        // .then((data) => {
        //   console.log("Response from server:", data);
          // alert("successfully logged in");
        // });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>username</label>
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>password</label>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label>dob</label>
        <input
          name="dob"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
        />
        <label>mobile</label>
        <input
          name="mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
