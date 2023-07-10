import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>Copyright@2023</p>
          <p>SynLearn Pvt. Ltd.</p>
          <br />
          Helpdesk : +91 8920909445
          <br />
          Email : <a href="mailto:support@synlearn.in">support@synlearn.in</a>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="">
            <img width="28px" src="/images/facebook.png" alt="" />
          </a>
          <a href="">
            <img width="28px" src="/images/twitter.png" alt="" />
          </a>
          <a href="">
            <img width="28px" src="/images/instagram.png" alt="" />
          </a>
          <a href="">
            <img width="28px" src="/images/linkedin.png" alt="" />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px"
          }}
        >
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">Legal</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
