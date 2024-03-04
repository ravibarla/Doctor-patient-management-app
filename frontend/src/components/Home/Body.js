import React from "react";
// import { usersType } from "./usersType";
// import User from "./User";
import "../styles/body.styles.css";

export default function Body() {
  const styles = {
    body: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    pic: {
      display: "block",
      height: "100%",
      width: "100%",
    },
    box: {
      display: "inline-block",
      position: "absolute",
      top: "20%",
      left: "20%",
      height: "30%",
      width: "60%",
      border: "2px solid black",
    },
  };
  return (
    <div style={styles.body}>
      <img
        src="
      https://media.istockphoto.com/id/1354176591/photo/doctors-team.jpg?s=2048x2048&w=is&k=20&c=lMySov2Dvn5T1VW0wkREo0k68MccUxKkIA7xh8bpbME=
      "
        alt="img"
        style={styles.pic}
      />
      <div style={styles.box}>
        <div id="container">
          <div style={{backgroundColor:"red"}} className="flex-item">one</div>
          <div  style={{backgroundColor:"cyan"}} className="flex-item">two</div>
          <div  style={{backgroundColor:"grey"}} className="flex-item">three</div>
        </div>
      </div>
    </div>
  );
}
