import React from "react";

function Pricing() {
  return (
    <>
      <div className="pricing">
        <h3
          style={{
            textAlign: "center",
            fontSize: "35px",
            fontWeight: "700",
            margin: "60px 0"
          }}
        >
          Pricing
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Chat (₹)</th>
                <th>Voice (₹)</th>
                <th>Video (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PRO</td>
                <td>35</td>
                <td>50</td>
                <td>70</td>
              </tr>
              <tr>
                <td>Advanced</td>
                <td>20</td>
                <td>30</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Intermediate</td>
                <td>8</td>
                <td>12</td>
                <td>16</td>
              </tr>
              <tr>
                <td>Beginner</td>
                <td>FREE</td>
                <td style={{ backgroundColor: "#adadadff" }}>X</td>
                <td style={{ backgroundColor: "#adadadff" }}>X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Pricing;
