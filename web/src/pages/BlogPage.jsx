import { Helmet } from 'react-helmet';
import '../assets/css/BlogPage.css'


import img from '../assets/img/cargo.jpg';

import img2 from '../assets/img/cf1.jpg';


import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Select the Best International Cargo Movers in the UAE for Your Business',
      description: 'Need an international cargo mover in the UAE? WEMovers provides affordable shipping services, relocation service and courier services worldwide...',
       metaTitle:'How to Select the Best International Cargo Movers in the UAE for Your Business',
      metaDescription:'Need an international cargo mover in the UAE? WEMovers provides affordable shipping services, relocation service and courier services worldwide.',
        thumbnail: img,
      date: 'February 23,2026',
      url: '/blog/best-international-cargo-movers-in-uae'
    },
    {
      id: 2,
      title: 'Key Benefits of Choosing Freight Forwarding Services in Abu Dhabi',
     
      description: 'Operating a business in the UAE implies that your supply chain is 24/7. It could be that this is your first encounter with freight forwarding in Abu Dhabi....',    metaTitle:'Good Movers & Packers | Top No.1 Equipment Suppliers in UAE',
      metaTitle:'Freight Forwarding Services In Abu Dhabi | WeMovers',
      metaDescription:'Choose WeMovers for trusted freight forwarding services in Abu Dhabi. Fast customs clearance, global routes & expert cargo solutions across the UAE.',
      thumbnail: img2,
      date: 'February 23, 2026',
      url: '/blog/freight-forwarding-services-in-uae'
    },
  ];
  const titles = blogPosts.map(post => post.metaTitle).join(' | ');
  const descriptions = blogPosts.map(post => post.metaDescription).join(' ');

  return (
    <>
    <Helmet>
        <title>{titles}</title>
        <meta name="description" content={descriptions.slice(0, 150) + '...'} />
      </Helmet>
    <div className="blog-page">
      <div className="blog-header">
        <h1>
          <a href="/blogs" className="recent-blogs-link">Recent Blogs</a>
        </h1>
        <p className="blog-subtitle">Stay updated with our latest articles and tutorials</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-thumbnail">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description" style={{textAlign:'justify'}}>{post.description}</p>
              <Link to={post.url} className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;