import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import RacingBlueLight from '../components/RacingBlueLight';
import '../Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Business Needs Managed IT Services",
      excerpt: "Is your business struggling with IT issues? Here are 5 clear signs it's time to partner with a managed service provider to transform your technology infrastructure.",
      category: "IT Strategy",
      readTime: "5 min read",
      date: "Dec 4, 2025",
      featured: true
    },
    {
      id: 2,
      title: "What is SOC Monitoring and Why Your Business Needs It",
      excerpt: "Cyber threats are evolving faster than ever. Learn how 24/7 Security Operations Center monitoring can protect your business from modern attacks and data breaches.",
      category: "Security",
      readTime: "7 min read",
      date: "Nov 28, 2025"
    },
    {
      id: 3,
      title: "Azure vs On-Premises: Which is Right for Your Business?",
      excerpt: "Considering cloud migration? Discover the pros and cons of Azure cloud vs on-premises infrastructure, and learn how to make the right choice for your organization.",
      category: "Cloud",
      readTime: "12 min read",
      date: "Nov 21, 2025"
    },
    {
      id: 4,
      title: "The Complete Guide to Cybersecurity for Small Businesses",
      excerpt: "Small businesses are prime targets for cyberattacks. This comprehensive guide covers everything you need to know to protect your company in 2025 and beyond.",
      category: "Security",
      readTime: "15 min read",
      date: "Nov 15, 2025"
    },
    {
      id: 5,
      title: "How to Choose the Right IT Support Tier for Your Company",
      excerpt: "From CORE to ENTERPRISE, understanding the differences between support tiers can save you money and ensure you get the right level of service for your business needs.",
      category: "IT Strategy",
      readTime: "8 min read",
      date: "Nov 8, 2025"
    },
    {
      id: 6,
      title: "Disaster Recovery Planning: A Step-by-Step Guide",
      excerpt: "Don't wait for disaster to strike. Learn how to create a bulletproof disaster recovery plan that ensures business continuity and minimizes downtime.",
      category: "IT Strategy",
      readTime: "10 min read",
      date: "Nov 1, 2025"
    },
    {
      id: 7,
      title: "Understanding the True Cost of IT Downtime",
      excerpt: "What does IT downtime really cost your business? We break down the hidden costs of outages and show you how proactive management can save hundreds of thousands.",
      category: "Productivity",
      readTime: "6 min read",
      date: "Oct 25, 2025"
    },
    {
      id: 8,
      title: "Microsoft 365 Security Best Practices for 2025",
      excerpt: "Are you using Microsoft 365 to its full potential? Discover essential security settings and best practices that most businesses overlook.",
      category: "Security",
      readTime: "9 min read",
      date: "Oct 18, 2025"
    },
    {
      id: 9,
      title: "The Rise of AI in IT Operations: What SMBs Need to Know",
      excerpt: "Artificial intelligence is transforming IT management. Learn how AI-powered tools can enhance security, automate tasks, and reduce costs for your business.",
      category: "IT Strategy",
      readTime: "11 min read",
      date: "Oct 11, 2025"
    }
  ];

  const categories = ['all', 'Security', 'Cloud', 'Productivity', 'IT Strategy'];

  const filteredPosts = activeFilter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! You'll receive our weekly tech tips.`);
    setEmail('');
  };

  return (
    <div className="blog-page">
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-title">Technology Blog</h1>
          <p className="blog-hero-subtitle">
            Empower your SMB with Tech Strategies, Tips & News
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeFilter === 'all' && (
        <section className="blog-featured">
          <div className="container">
            <div className="featured-post">
              <div className="featured-badge">Featured</div>
              <div className="featured-content">
                <span className="featured-category">{featuredPost.category}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-meta">
                  <span className="meta-date">{featuredPost.date}</span>
                  <span className="meta-separator">•</span>
                  <span className="meta-read-time">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <button className="btn-primary" onClick={() => alert('Full blog post coming soon!')}>
                  Read Full Article
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Bar */}
      <section className="blog-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {regularPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-category">{post.category}</div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span className="meta-date">{post.date}</span>
                  <span className="meta-separator">•</span>
                  <span className="meta-read-time">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <button className="blog-card-link" onClick={() => alert('Full blog post coming soon!')}>
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Informed with Weekly Tech Tips</h2>
            <p>Get the latest IT strategies, security updates, and tech news delivered to your inbox every week.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sidebar Links */}
      <section className="blog-sidebar-links">
        <div className="container">
          <h3>Explore More Resources</h3>
          <div className="sidebar-links-grid">
            <div className="sidebar-link-card" onClick={() => navigate('/diy-it')}>
              <h4>🎙️ DIY-IT Podcast</h4>
              <p>Tech advice for SMBs in podcast form</p>
              <ArrowRight size={18} />
            </div>
            <div className="sidebar-link-card" onClick={() => navigate('/resources')}>
              <h4>📚 Resource Hub</h4>
              <p>Guides, webinars, and tools</p>
              <ArrowRight size={18} />
            </div>
            <div className="sidebar-link-card" onClick={() => window.open('tel:8506103889')}>
              <h4>📞 Schedule Consultation</h4>
              <p>Talk to our IT experts</p>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default Blog;
