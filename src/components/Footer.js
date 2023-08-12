import React from "react";

export default function Footer() {
  const footerStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f8f9fa", // Adjust background color as needed
    padding: "20px 0",
    textAlign: "center",
    color: "#434345",
  };

  return (
    <footer style={footerStyle}>
      <div className="text-center">
        © 2023 Copyright:
  
          Thiqah

      </div>
    </footer>
  );
}
