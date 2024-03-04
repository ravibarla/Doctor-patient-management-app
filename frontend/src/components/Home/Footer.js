import React from "react";

export default function Footer() {
  const styles = {
    footer: {
      // marginTop: "auto",
      marginTop: "auto",
      backgroundColor: "#333",
      color: "white",
      padding: "10px",
      textAlign: "center",
      position: "fixed",
      width: "100%",
      bottom: "0",
      height: "20vh",
    },
  };
  return (
    <div style={styles.footer}>
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
}
