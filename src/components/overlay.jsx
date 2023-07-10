import React from "react";

function Overlay({ hook: a }) {
  return (
    <>
      <div className="overlay">
        <div className="box">
          <h2 onClick={() => a.setOverlay(!a.toShow_overlay)} className="close">
            X
          </h2>
          <h2 style={{ textAlign: "center" }}>Welcome Back</h2>
          <form className="signin">
            <input placeholder="Email Address" type="email" name="" id="" />
            <input placeholder="Password" type="password" name="" id="" />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Overlay;
