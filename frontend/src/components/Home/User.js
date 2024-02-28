import React from "react";

export default function User() {
  const styles = {
    overlays: {
      position: "absolute",
      top: " 50%",
      left: " 50%",
      transform: "translate(-50%, -50%)",
      backgroundColor:
        "rgba(255, 255, 255, 0.8)" /* Adjust the overlay color and opacity */,
      padding: "20px",
      borderRadius: "10px",
      zIndex: "1" /* Ensure the overlay is above the image */,
    },
  };
  return <div style={styles.overlays}>User</div>;
}
