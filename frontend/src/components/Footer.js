import React from "react";

export default function Footer() {
  const styles = {
    footerStyle: {
        color: "white",
        textAlign: "center",
        padding: "1em",
        position: "absolute",
        bottom: 0,
        width: "100%"
    }
  };
  return (
    <div style={styles.footerStyle}>
      <footer class="bg-body-tertiary text-center text-lg-start">
        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}
        >
          © 2020 Copyright:
          <a class="text-body" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
