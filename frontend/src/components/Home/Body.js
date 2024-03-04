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
      minHeight:"100vh"
    },
    // '@media(max-height:50vh)':{
    //   body:{
    //     position: "relative",
    //     height: "100%",
    //     width: "100%",
    //   }
    // },
    // pic: {
    //   display: "inline-block",
    //   height: "100%",
    //   width: "100%",
    //   minHeight:"100%"
    // },
    box: {
      display: "inline-block",
      position: "absolute",
      top: "30%",
      left: "20%",
      height: "20%",
      width: "60%",
      border: "2px solid black",
    },
  };
  return (
    <div style={styles.body}>
      <div id="background">

      </div>
      {/* <img
        src="
      https://media.istockphoto.com/id/1354176591/photo/doctors-team.jpg?s=2048x2048&w=is&k=20&c=lMySov2Dvn5T1VW0wkREo0k68MccUxKkIA7xh8bpbME=
      "
        alt="img"
        style={styles.pic} 
  />*/}
      <div style={styles.box}>
        <div id="container">
          <div  className="flex-item">one</div>
          <div  className="flex-item">two</div>
          <div  className="flex-item">three</div>
        </div>
      </div>
    </div>
  );
}
