import React, { useEffect, useState } from "react";

function Carousel() {
  const [c_index, update_cIndex] = useState(1);
  // useEffect only works on render so document not defined error vanished
  useEffect(() => {
    let color_arr = ["#15b12f59", "#b115a559", "#b1ac1559"];
    document.querySelector(".carousel").style.backgroundColor =
      color_arr[c_index];
  });
  setTimeout(() => {
    update_cIndex((curr) => {
      return curr === 2 ? 0 : curr + 1;
    });
  }, 4000);
  return (
    <>
      <div className="carousel">
        <div style={{ display: c_index === 0 ? "flex" : "none" }}>
          <h4>First of its Kind</h4>
          <img src="/images/Model.png" alt="" />
        </div>
        <div style={{ display: c_index === 1 ? "flex" : "none" }}>
          <h4>Learn & Earn, Together</h4>
          <img src="/images/learnEarn.png" alt="" />
        </div>
        <div style={{ display: c_index === 2 ? "flex" : "none" }}>
          <h4>No Subscription</h4>
          <img src="/images/pay_play.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Carousel;
