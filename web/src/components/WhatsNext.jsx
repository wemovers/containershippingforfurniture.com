import React from "react";

const WhatsNext = () => {
  const styles = {
    section: {
      background: "#f9fbf7",
      padding: "100px 20px",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "42px",
      fontWeight: "700",
      color: "#25671E",
      marginBottom: "15px",
    },
    subHeading: {
      fontSize: "16px",
      color: "#666",
      maxWidth: "700px",
      margin: "0 auto 60px auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
    },
    card: {
      background: "#ffffff",
      padding: "40px 30px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
    },
    number: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#48A111",
      color: "#ffffff",
      fontWeight: "700",
      fontSize: "22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px auto",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "15px",
      color: "#25671E",
    },
    cardText: {
      fontSize: "15px",
      color: "#555",
      lineHeight: "1.6",
    },
    accentBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "5px",
      background: "#F2B50B",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        <h2 style={styles.heading}>What’s Next?</h2>
        <p style={styles.subHeading}>
          Moving doesn’t have to be stressful. Here’s how WeMovers ensures a smooth and professional relocation experience from start to finish.
        </p>

        <div style={styles.grid}>
          
          {/* Step 1 */}
          <div style={styles.card}>
            <div style={styles.number}>01</div>
            <h3 style={styles.cardTitle}>Request a Free Quote</h3>
            <p style={styles.cardText}>
              Contact our relocation experts and share your moving requirements. 
              We provide a transparent, no-obligation quote tailored to your needs.
            </p>
            <div style={styles.accentBar}></div>
          </div>

          {/* Step 2 */}
          <div style={styles.card}>
            <div style={styles.number}>02</div>
            <h3 style={styles.cardTitle}>Plan & Schedule</h3>
            <p style={styles.cardText}>
              Our professional team coordinates everything — packing, loading, 
              transportation, and secure handling of your belongings.
            </p>
            <div style={styles.accentBar}></div>
          </div>

          {/* Step 3 */}
          <div style={styles.card}>
            <div style={styles.number}>03</div>
            <h3 style={styles.cardTitle}>Move with Confidence</h3>
            <p style={styles.cardText}>
              Sit back and relax while we safely deliver and set up your items 
              at the new location — on time and damage-free.
            </p>
            <div style={styles.accentBar}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsNext;