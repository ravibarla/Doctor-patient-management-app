import React from "react";
import { usersType } from "./usersType";
// import User from "./User";
import "../styles/body.styles.css";
import { Link } from "react-router-dom";

export default function Body() {
  const styles = {
    body: {
      position: "relative",
      height: "100%",
      width: "100%",
      minHeight: "100vh",
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
    // box: {
    //   display: "inline-block",
    //   position: "absolute",
    //   top: "30%",
    //   left: "20%",
    //   height: "20%",
    //   width: "60%",
    //   border: "2px solid black",
    // },
  };
  return (
    <div style={styles.body}>
      <div id="background"></div>
      {/* <img
        src="
      https://media.istockphoto.com/id/1354176591/photo/doctors-team.jpg?s=2048x2048&w=is&k=20&c=lMySov2Dvn5T1VW0wkREo0k68MccUxKkIA7xh8bpbME=
      "
        alt="img"
        style={styles.pic} 
  />*/}
      <div id="box" className="card-body ">
        <div id="container">
          {usersType.map((user) => (
            <div
              className="flex-item card"
          
            >
              <Link to={`/login/${user.type}`}>
                <div style={{ height: "70%" }}>
                  <img
                    src={user.iconImg}
                    alt=""
                    title={user.label}
                    className="img-small card-img-top rounded-circle border"
                  />
                </div>
                <div style={{ height: "30%" }} className="card-body">
                  <p className="card-text">{user.label}</p>
                </div>
              </Link>
            </div>
          ))}
          {/* <div className="flex-item">
            <div style={{ height: "70%" }}>
              <img
                src="   https://cdn-icons-png.flaticon.com/512/2302/2302715.png "
                alt=""
                title=""
                class="img-small"
              />
            </div>
            <div style={{ height: "30%" }}>
              <p>patient</p>
            </div>
          </div> */}
          {/* <div className="flex-item">
            <div style={{ height: "70%" }}>
              <img
                src="   https://cdn-icons-png.flaticon.com/512/3952/3952988.png "
                alt=""
                title=""
                class="img-small"
              />
            </div>
            <div style={{ height: "30%" }}>
              <p>doctor</p>
            </div>
          </div> */}
          {/* <div className="flex-item">
            <div style={{ height: "70%" }}>
              <img
                src="   https://cdn-icons-png.flaticon.com/512/2206/2206368.png "
                alt=""
                title=""
                class="img-small"
              />
            </div>
            <div style={{ height: "30%" }}>
              <p>patient</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
