import React from "react";

function Header({ hook: a }) {
  return (
    <>
      <nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "175px"
          }}
        >
          <img src="/images/logo.png" alt="" />
          <h4 style={{ margin: "0", fontWeight: "700", fontSize: "25px" }}>
            SynLearn
          </h4>
        </div>
        <div className="nav_links">
          <a href="">
            <h5>Home</h5>
          </a>
          <a href="">
            <h5>Pricing</h5>
          </a>
          <a href="">
            <h5>Careers</h5>
          </a>
        </div>
        <div className="nav_btns">
          <button onClick={() => a.setOverlay(!a.toShow_overlay)}>Login</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
