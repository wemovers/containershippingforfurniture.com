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
      textAlign:'justify'
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
    <section style={styles.section} id="about">
      <div style={styles.container}>
        
        <h2 style={styles.heading}>What’s Next?</h2>
        <p style={styles.subHeading}>
This container shipping of furniture is not as difficult to plan as it may appear. We are a group willing to help you follow all the steps.    </p>

        <div style={styles.grid}>
          
          {/* Step 1 */}
          <div style={styles.card}>
            <div style={styles.number}>01</div>
            <h3 style={styles.cardTitle}>Provide Your Furniture Detail and Destination
</h3>
            <p style={styles.cardText}>
             Inform us on what kind of furniture you want to ship, the amount of the furniture, and the place you would want to deliver the furniture. This will make our team know precisely what you will need to be shipped, and it will organise the most secure way of transporting. Be it the house furnishings or an office, we will see that nothing goes wrong.
   </p>
            <div style={styles.accentBar}></div>
          </div>

          {/* Step 2 */}
          <div style={styles.card}>
            <div style={styles.number}>02</div>
            <h3 style={styles.cardTitle}>Select Full or Shared Container Services</h3>
            <p style={styles.cardText}>
             
             Depending on the size of shipment and budget, you can have a full container to yourself or a shared container to obtain a less costly shipment. Our professionals will help you to select the safest and most effective method of shipping your furniture.

            </p>
            <div style={styles.accentBar}></div>
          </div>

          {/* Step 3 */}
          <div style={styles.card}>
            <div style={styles.number}>03</div>
            <h3 style={styles.cardTitle}>Get a Personalized Shipping Delivery Quotation.
</h3>
            <p style={styles.cardText}>
           Once we consider your needs, we offer you a good and precise quote based on your shipment. The only thing that one needs to know is the prices to go without having to be shocked at the other expenses.
</p>
            <div style={styles.accentBar}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsNext;