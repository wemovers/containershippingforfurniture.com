import React, { useState } from "react";

const Faqs = () => {
  const primaryColor = "#25671E"; // Orange
  const secondaryColor = "#F2B50B"; // Light yellow
  const tertiaryColor = "#48A111"; // Gray-green
  const textColor = "#1a202c"; // Dark text
  const lightTextColor = "#4a5568"; // Light text

  const faqs = [
    {
      question: "1. Why are you Dubai's preferred moving company?",
      answer:
        "Over eleven years have passed since we completed the task. For more than a decade, A Moving Team has been working. Continually. Whether it is when our clients are looking for a professional moving agency, office relocation, or storage solutions in Dubai, we have earned our reputation from the passion and sweat we put into providing our clients with the best moving experience they can.<br/><br/>Choose a reliable Dubai mover to safely move your belongings and furniture in the UAE. We are one of the leading moving companies in Dubai<br/><br/>Our <strong>professional movers in Abu Dhabi</strong> have helped thousands of families move easily, comfortably, and stress-free, and reach their new home. It is our task to make the moving process smooth for both the local mover and the cross-country mover. If you're on the go and looking for storage, we can help, too, as we offer mobile storage solutions with our special Pods. <a href=' https://www.wemovers.ae/contact' target='_blank' rel='noopener noreferrer' class='clickable-link'>Contact our team</a> today to find out why our professional movers are considered the best in the business.",
    },
    {
      question: "2. Do you also provide storage?",
      answer:
        "We do! <br/><br/>We have a world-class POD system where we bring the storage box right to your door, and once loaded, we take it to our warehouse in Dubai. Our professional revivalists in Dubai will ensure that your POD arrives safely, and our air-conditioned warehouse will ensure that your items remain in perfect condition. <br/><br/>You can also order storage space and get an online quote by <a href='https://www.wemovers.ae/about' target='_blank' rel='noopener noreferrer' class='clickable-link'>clicking here</a>.",
    },
    {
      question: "3. Can you help us pack the luggage?",
      answer:
        "Indeed, we can!  Having your stuff professionally packed for long-term storage or relocation is actually a smart option.  Inadequate packaging is the main cause of goods—fragile in particular—not securely arriving at their destination in Dubai.  To help you safely move and pack your possessions, our staff of skilled <strong>movers and packers in Dubai</strong> is available.  We are regarded as one of Dubai's top moving firms for this additional reason.  You may rest easy knowing that your job is in capable hands because our staff at Cheap Movers has been trained over the years to always pack and move items with the highest care.",
    },
    {
      question: "4. Why should we choose cheap movers as our movers in Dubai?",
      answer:
        "There are hundreds of reasons why our clients call us time and time again as their preferred <strong>movers in Dubai</strong>, and below are just a few of the reasons! Using reusable materials and top-notch equipment, our staff will securely conduct all packing and unloading. Additionally, a complimentary pizza is yours as a reward when you're done!  You may relax knowing that everything is maintained clear of mold and dust while in our care.  In Dubai, our organization provides a variety of packing, storage, and <a href=' https://www.wemovers.ae/services' target='_blank' rel='noopener noreferrer' class='clickable-link'>moving services</a>.  You may rely on us to constantly give you peace of mind with our first-rate assistance.  As you can see from our years of experience and hundreds of five-star evaluations, we are the most reliable movers in Dubai.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section
      id="faqs"
      style={{
        
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor}22 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${tertiaryColor}33 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "950px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontWeight: "800",
              marginBottom: "16px",
              fontSize: "2.5rem",
              color: textColor,
              lineHeight: "1.2",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: lightTextColor,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Find answers to common questions about our moving and packing services
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ position: "relative" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "16px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                backgroundColor: activeIndex === index ? secondaryColor : "#FFFFFF",
                border: `2px solid ${activeIndex === index ? primaryColor : "transparent"}`,
                transition: "all 0.3s ease",
                transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "22px 26px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: activeIndex === index ? primaryColor : textColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: "1.2rem",
                    color: primaryColor,
                  }}
                >
                  ▼
                </span>
              </button>

              {activeIndex === index && (
                <div
                  style={{
                    padding: "0 26px 26px 26px",
                    color: lightTextColor,
                    lineHeight: "1.7",
                    fontSize: "1rem",
                    borderTop: `1px solid ${primaryColor}33`,
                    backgroundColor: "#FFFFFF",
                    textAlign: "justify",

                  }}
                  dangerouslySetInnerHTML={{ 
                    __html: faq.answer.replace(
                      'class="clickable-link"', 
                      `style="color: ${primaryColor}; font-weight: 600; text-decoration: none; border-bottom: 1px solid ${primaryColor};"`
                    )
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;