import React, { useState } from "react";
import image from "../assets/img/bg1.png";

const WhyWeExist = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="why-us"
      style={{
        background: "#FFFFFF",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Modern geometric background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(72, 161, 17, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(242, 181, 11, 0.03) 0%, transparent 50%),
            repeating-linear-gradient(45deg, rgba(0,0,0,0.01) 0px, rgba(0,0,0,0.01) 2px, transparent 2px, transparent 8px)
          `,
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section label - centered */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "40px",
              height: "2px",
              background: "#48A111",
            }}
          />
          <span
            style={{
              color: "#48A111",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Our Purpose
          </span>
          <span
            style={{
              width: "40px",
              height: "2px",
              background: "#48A111",
            }}
          />
        </div>

        {/* Full width content - centered card */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Content card - full width */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              borderRadius: "32px",
              padding: "64px",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.15)",
              border: "1px solid rgba(242, 181, 11, 0.1)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "64px",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "32px",
                color: "#1A1A1A",
              }}
            >
              Why are we{" "}
              <span
                style={{
                  color: "#48A111",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                here?
                <span
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: 0,
                    width: "100%",
                    height: "12px",
                    background: "rgba(242, 181, 11, 0.3)",
                    zIndex: -1,
                  }}
                />
              </span>
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#4A4A4A",
                marginBottom: "56px",
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              As the first reasonably priced international moving company in the United Arab Emirates, we are here to make your life easier by providing hassle-free shipment, storage, and transportation.
            </p>

            {/* Modern list with icons - centered */}
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "24px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {[
                { num: "01", text: "We encourage you to relax", color: "#48A111" },
                { num: "02", text: "We give you comfort", color: "#F2B50B" },
                { num: "03", text: "We ship with ease", color: "#48A111" },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "24px",
                    padding: "12px 0",
                    borderBottom: index < 2 ? "1px dashed rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "800",
                      color: item.color,
                      opacity: "0.5",
                      minWidth: "50px",
                      textAlign: "right",
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#1A1A1A",
                      fontWeight: "500",
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;