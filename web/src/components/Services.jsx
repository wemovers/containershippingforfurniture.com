import React from "react";
import moveImg from "../assets/img/cheap4.jpg";
import packImg from "../assets/img/c3.png";
import storageImg from "../assets/img/c1.png";

const Services = () => {
  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#25671E",
    marginBottom: "50px",
    letterSpacing: "1px",
  };

  const servicesContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "30px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "320px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transform: "skewY(-3deg)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardInner = {
    transform: "skewY(3deg)",
    padding: "25px",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderBottom: "5px solid #F2B50B",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#48A111",
    margin: "15px 0 10px 0",
    textAlign:"justify"
  };

  const descStyle = {
    color: "#555",
    fontSize: "15px",
    lineHeight: "1.6",
    textAlign:"justify"
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "skewY(-3deg) scale(1.05)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "skewY(-3deg)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
  };

  return (
    <div style={sectionStyle} id="services">
      <h2 style={headingStyle}>Our Specialized Moving Services</h2>

      <div style={servicesContainer}>
        {/* --- 1: Home Moving --- */}
        <div
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <img src={moveImg} alt="Home Moving Services" style={imgStyle} />
          <div style={cardInner}>
            <h3 style={titleStyle}>
              Seamless home moving services from cheap international moving companies
            </h3>
            <p style={descStyle}>
              Our team of <a href='https://www.wemovers.ae/services/home-relocation'>house movers in Abu Dhabi/Dubai</a> uses the best packing materials
              and equipment available to carefully load your belongings into the moving truck
              and deliver them in immaculate shape. Every aspect of your move will be overseen
              by the moving coordinator to ensure that nothing goes wrong and that everything
              goes according to plan.
            </p>
          </div>
        </div>

        {/* --- 2: International Moving --- */}
        <div
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <img src={packImg} alt="International Movers" style={imgStyle} />
          <div style={cardInner}>
            <h3 style={titleStyle}>International Movers in Dubai</h3>
            <p style={descStyle}>
              International moving is more than just changing the country you live in; 
              It also involves a significant change in one's life. After all, it's like
              packing up the whole household, moving and experiencing life in a whole new place.
              We understand both the stress and the pressure that come with international moving,
              which is why our skilled movers do everything to simplify your move abroad.
            </p>
          </div>
        </div>

        {/* --- 3: Storage Solutions --- */}
        <div
          style={cardStyle}
          onMouseEnter={cardHover}
          onMouseLeave={cardLeave}
        >
          <img src={storageImg} alt="Storage Units" style={imgStyle} />
          <div style={cardInner}>
            <h3 style={titleStyle}>Secure and affordable storage units in Dubai</h3>
            <p style={descStyle}>
              Over time, we collect so much stuff that we soon run out of space and don't know
              what to do with it. Instead of storing your extra items in a cramped space and
              cluttering up your living room, the best thing you can do is opt for an insured
              warehouse in Dubai. If you're looking for a way to keep your valuables and extra
              items safe and declutter your spaces, Cheap International Movers has reliable
              storage in Dubai for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
