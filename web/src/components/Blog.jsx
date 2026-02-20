import React from "react";
import img1 from "../assets/img/cheap1.jpg";
import img2 from "../assets/img/c1.png";
import img3 from "../assets/img/cheap2.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      imgSrc: img1,
      category: "Moving Company",
      title: "Cheapest International Packers and Movers Dubai | quality sales at low prices",
      desc: "Find the cheapest international movers in Dubai offering safe, fast, and affordable relocation services worldwide with expert care....",
      link: "/blog/cheapest-international-packers-and-movers-dubai-quality-sales-at-low-prices",
    },
    {
      id: 2,
      imgSrc: img2,
      category: "Moving Company",
      title: "How Do Cheap International Movers in Dubai Compare to Other Traditional Movers?",
      desc: "Moving to any other country can be both exciting and horrifying at the same time. You may also feel satisfied approximately beginning a brand-new area, but also frightened about the transition.....",
      link: "/blog/cheap-international-movers-in-dubai-compare-to-other",
    },
    {
      id: 3,
      imgSrc: img3,
      category: "Moving Company",
      title: "What Is Global Relocation in Abu Dhabi and Why UAE Companies Need It",
      desc: "Global transfer occurs when a company moves its employees, a whole area, or a department to a separate place.",
      link: "https://www.wemovers.ae/blog/what-is-global-relocation-in-abu-dhabi-and-why-uae-companies-need-it",
    },
  ];

  // 🎨 Updated Theme Colors
  const bgColor = "#25671E";
  const accentColor = "#F2B50B";
  const secondaryColor = "#48A111";
  const textColor = "#2e2e2e";

  const sectionStyle = {
    padding: "80px 20px",
    
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
  };

  const titleStyle = {
    fontSize: "2.6rem",
    fontWeight: "800",
    marginBottom: "10px",
    color: textColor,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const subtitleStyle = {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "50px",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.6",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "left",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    cursor: "pointer",
    border: `2px solid ${accentColor}`,
  };

  const cardHoverStyle = {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 28px rgba(0,0,0,0.2)",
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "20px",
    objectFit: "cover",
    height: "200px",
  };

  const postTitleStyle = {
    fontSize: "1.35rem",
    fontWeight: "700",
    color: "#555",
    marginBottom: "12px",
    lineHeight: "1.4",
  };

  const descStyle = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
    textAlign: "justify",
  };

  const linkStyle = {
    display: "inline-block",
    padding: "10px 22px",
    borderRadius: "50px",
    backgroundColor: secondaryColor,
    color: "#fff",
    fontWeight: "600",
    textDecoration: "none",
    letterSpacing: "0.5px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={titleStyle}>Recent Blog Posts</h2>
        <p style={subtitleStyle}>
          Stay updated with the latest relocation tips, moving guides, and expert insights from WeMovers.  
          Explore how we help thousands of families and businesses move with confidence.
        </p>
      </div>

      <div style={gridStyle}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={cardStyle}
            onMouseOver={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <img src={post.imgSrc} alt={post.title} style={imgStyle} />
            <h3 style={postTitleStyle}>{post.title}</h3>
            <p style={descStyle}>{post.desc}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = bgColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = secondaryColor)
              }
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
