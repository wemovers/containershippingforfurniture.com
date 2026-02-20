import React from "react";
import image from "../assets/img/bg1.png";

const WhyWeExist = () => {
  return (
    <div id="why-us"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #FFE797 60%, #FCB53B 40%)",
        padding: "80px 60px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Decorative Circle */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          backgroundColor: "#84994F",
          borderRadius: "50%",
          top: "-100px",
          right: "-100px",
          opacity: "0.1",
        }}
      ></div>

      {/* Decorative Diagonal Shape */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "#FCB53B",
          transform: "rotate(45deg)",
          opacity: "0.07",
        }}
      ></div>

      {/* Left Content */}
      <div
        style={{
          flex: "1 1 50%",
          zIndex: 2,
          color: "#333",
          paddingRight: "40px",
        }}
      >
        <h2
          style={{
            color: "#84994F",
            fontSize: "44px",
            fontWeight: "800",
            marginBottom: "25px",
            letterSpacing: "1px",
          }}
        >
         Why are we here?

        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "25px",
            textAlign:"justify"
          }}
        >
        As the first reasonably priced international moving company in the United Arab Emirates, we are here to make your life easier by providing hassle-free shipment, storage, and transportation.

        </p>

        <div
          style={{
            borderLeft: "5px solid #84994F",
            paddingLeft: "20px",
            fontSize: "17px",
            lineHeight: "1.7",
            color: "#333",
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "10px",
          }}
        >
      1: We encourage you to relax

<br/>2: We give you comfort

<br/>3: We ship with ease

        </div>

       
      </div>

      {/* Right Image with Accent Frame */}
      <div
        style={{
          flex: "1 1 45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          marginTop: "40px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "100%",
            maxWidth: "480px",
            height: "100%",
            border: "4px dashed #84994F",
            borderRadius: "20px",
            zIndex: 1,
            transform: "rotate(-2deg)",
          }}
        ></div>

        <img
          src={image}
          alt="Why We Exist"
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
            border: "6px solid #FFE797",
            position: "relative",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
};

export default WhyWeExist;
