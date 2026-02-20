import React from "react";
import impactImg from "../assets/img/c2.png"; // Replace with your actual image path

const ImpactInAction = () => {
  return (
    <div
      id="impact-in-action"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #FFE797 40%, #F2B50B 90%)",
        padding: "80px 20px",
      }}
    >
      {/* Background decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor: "#48A111",
          opacity: "0.2",
        }}
      ></div>

      <div
        className="impact-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Text Section */}
        <div className="impact-text" style={{ flex: "1 1 45%", zIndex: "2" }}>
          <h2
            style={{
              fontSize: "2.8rem",
              color: "#48A111",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Our <span style={{ color: "#F2B50B" }}>Impact</span> in Action
          </h2>
          <p
            style={{
              color: "#333",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "40px",
              textAlign: "justify",
            }}
          >
            We offer specialized moving solutions tailored to your requirements
            in order to make your move go as smoothly as possible. You can be
            sure that your possessions will be protected during the entire
            procedure because Cheap International Movers in Abu Dhabi is a
            licensed and insured moving business.
          </p>
       
        </div>

        {/* Right Image Section */}
        <div
          className="impact-image"
          style={{
            flex: "1 1 45%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={impactImg}
            alt="Impact in Action"
            style={{
              width: "100%",
              maxWidth: "480px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transform: "rotate(-2deg)",
            }}
          />

          {/* Floating Statistic Cards */}
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "20px",
              background: "#F2B50B",
              padding: "20px",
              borderRadius: "16px",
              color: "#fff",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              transform: "rotate(-3deg)",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", margin: 0 }}>+10K</h3>
            <p style={{ margin: 0, fontWeight: "500" }}>Successful Moves</p>
          </div>

          <div
            style={{
              position: "absolute",
              top: "-30px",
              right: "0",
              background: "#48A111",
              padding: "18px 25px",
              borderRadius: "16px",
              color: "#fff",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
              transform: "rotate(3deg)",
            }}
          >
            <h3 style={{ fontSize: "1.8rem", margin: 0 }}>98%</h3>
            <p style={{ margin: 0, fontWeight: "500" }}>Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .impact-container {
              flex-direction: column;
            }

            .impact-text {
              order: 1;
              text-align: center;
            }

            .impact-image {
              order: 2;
              margin-top: 30px;
            }

            .impact-text h2 {
              font-size: 2rem;
            }

            .impact-text p {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImpactInAction;
