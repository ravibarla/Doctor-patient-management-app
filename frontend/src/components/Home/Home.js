import React from "react";
import NavBox from "./NavBox";
import Footer from "./Footer";
import Body from "./Body";

export default function Home() {
  const styles = {
    body: { minHeight: "100vh", display: "flex", flexDirection: "column" },
  };
  return (
    <div style={styles.body}>
      <NavBox />
      <Body />
      <Footer />
    </div>
  );
}
