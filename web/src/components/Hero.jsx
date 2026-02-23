import { Link } from 'react-router-dom';
import Heroimg from '../assets/img/bg1.png';


const Hero = () => {
  const styles = {
    heroSection: {
      background: 'linear-gradient(135deg, #25671E 0%, #48A111 100%)',
      padding: '80px 0',
      color: '#ffffff',
    },
    heading: {
      color: '#ffffff',
      fontWeight: '700',
    },
    paragraph: {
      color: '#f5f5f5',
      textAlign:'justify'
    },
    primaryBtn: {
      backgroundColor: '#F2B50B',
      color: '#25671E',
      padding: '10px 28px',
      borderRadius: '50px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: '0.3s',
      marginRight: '15px',
    },
    videoBtn: {
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: '500',
    },
    playIcon: {
      fontSize: '22px',
      marginRight: '8px',
      color: '#F2B50B',
    },
  };

  return (
    <main className="main">
      <section id="hero" className="hero section" style={styles.heroSection}>
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            
            <div className="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 style={styles.heading} data-aos="fade-up">
               Container Shipping of Furniture 
              </h1>

              <p style={styles.paragraph} data-aos="fade-up" data-aos-delay="100">
               As one of the respected brands among the shipping companies in the UAE, we are concerned with safety, on time, and a professional approach. Special care is taken about every single step, beginning with packing till loading the containers and the coordination on the international level. Some of the most established logistics networks work closely with our group and are in the same league with the best services, such as Evergreen best Shipping Agency in Dubai, that would uphold the convenience of global transport standards.        </p>

              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <Link to="/blog" style={styles.primaryBtn}>
                  Read More
                </Link>

                <a
                  href="https://www.youtube.com/@wemoversuae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                  style={styles.videoBtn}
                >
                  <i className="bi bi-play-circle" style={styles.playIcon}></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>

            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
              <img
                src={Heroimg}
                className="img-fluid animated"
                alt="Best Movers and Packers"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;