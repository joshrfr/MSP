import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Download, FileText, ArrowRight, Podcast, Headphones } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import RacingBlueLight from '../components/RacingBlueLight';
import '../DIYITPodcast.css';

const DIYITPodcast = () => {
  const navigate = useNavigate();

  const episodes = [
    {
      number: 12,
      title: "Securing Your Remote Workforce",
      duration: "32:45",
      date: "Dec 4, 2025",
      description: "With remote work becoming permanent for many businesses, securing distributed teams is more critical than ever. We discuss VPNs, MFA, endpoint security, and best practices for keeping your remote workforce protected."
    },
    {
      number: 11,
      title: "Cloud Backup Strategies That Actually Work",
      duration: "28:12",
      date: "Nov 27, 2025",
      description: "Not all backup strategies are created equal. Learn the 3-2-1 rule, discover why immutable backups matter, and find out how to test your disaster recovery plan before disaster strikes."
    },
    {
      number: 10,
      title: "Choosing the Right Firewall for Your Business",
      duration: "35:20",
      date: "Nov 20, 2025",
      description: "Confused by firewall options? We break down the differences between traditional firewalls, next-gen firewalls, and UTM appliances. Plus, we discuss Fortinet, Cisco, and Palo Alto solutions for different business sizes."
    },
    {
      number: 9,
      title: "Understanding Managed IT Services",
      duration: "29:45",
      date: "Nov 13, 2025",
      description: "What exactly does an MSP do? We demystify managed IT services, explain the different service tiers, and help you determine if outsourcing IT is right for your business."
    },
    {
      number: 8,
      title: "Azure vs AWS: Making the Right Choice",
      duration: "38:30",
      date: "Nov 6, 2025",
      description: "Should you choose Microsoft Azure or Amazon AWS? We compare pricing, features, and real-world use cases to help you make an informed decision for your cloud migration."
    },
    {
      number: 7,
      title: "Building a Disaster Recovery Plan",
      duration: "33:15",
      date: "Oct 30, 2025",
      description: "Hope for the best, plan for the worst. Learn how to create a comprehensive disaster recovery plan that ensures business continuity, even when catastrophe strikes."
    },
    {
      number: 6,
      title: "The Hidden Costs of IT Downtime",
      duration: "25:40",
      date: "Oct 23, 2025",
      description: "What does downtime really cost your business? We calculate the true impact including lost revenue, productivity losses, and reputational damage—and show you how to prevent it."
    },
    {
      number: 5,
      title: "Microsoft 365 Security Settings You Must Enable",
      duration: "31:20",
      date: "Oct 16, 2025",
      description: "Out-of-the-box M365 security isn't enough. We walk through essential security settings that most businesses miss, from conditional access to advanced threat protection."
    },
    {
      number: 4,
      title: "Phishing Attacks: Training Your Team",
      duration: "27:55",
      date: "Oct 9, 2025",
      description: "Your employees are your weakest link—or your strongest defense. Learn how to implement effective security awareness training and simulate phishing attacks to keep your team vigilant."
    },
    {
      number: 3,
      title: "Network Design for Small Business",
      duration: "34:10",
      date: "Oct 2, 2025",
      description: "Building or upgrading your network? We cover switches, access points, VLANs, and network segmentation—everything you need to create a secure, scalable network infrastructure."
    }
  ];

  const topics = [
    "Cybersecurity best practices",
    "Cloud migration strategies",
    "Network optimization tips",
    "IT budgeting and planning",
    "Software selection guides",
    "Disaster recovery planning",
    "Compliance and regulations",
    "Remote work technologies"
  ];

  return (
    <div className="diy-it-page">
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Hero Section */}
      <section className="diy-hero">
        <div className="container">
          <div className="diy-hero-icon">
            <Podcast size={60} />
          </div>
          <h1 className="diy-hero-title">DIY-IT Podcast</h1>
          <p className="diy-hero-subtitle">
            The do-it-yourself tech podcast series for SMBs
          </p>
          <div className="diy-hero-buttons">
            <button className="btn-primary" onClick={() => alert('Subscribe on Apple Podcasts')}>
              🎧 Subscribe on Apple Podcasts
            </button>
            <button className="btn-secondary" onClick={() => alert('Subscribe on Spotify')}>
              🎙️ Subscribe on Spotify
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="diy-about">
        <div className="container">
          <h2>About the Podcast</h2>
          <p>
            DIY-IT is your go-to resource for practical technology advice tailored to small and medium businesses.
            Join our team of IT experts as they break down complex IT topics into actionable insights you can
            implement today—whether you're managing IT in-house or evaluating managed services.
          </p>
          <p>
            New episodes drop every Tuesday. Subscribe on your favorite podcast platform to never miss an episode!
          </p>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="diy-episodes">
        <div className="container">
          <h2 className="section-title">Latest Episodes</h2>
          <div className="episodes-list">
            {episodes.map((episode) => (
              <div key={episode.number} className="episode-card">
                <div className="episode-header">
                  <div className="episode-number">Episode {episode.number}</div>
                  <div className="episode-duration">
                    <Headphones size={16} />
                    {episode.duration}
                  </div>
                </div>
                <h3 className="episode-title">{episode.title}</h3>
                <p className="episode-date">{episode.date}</p>
                <p className="episode-description">{episode.description}</p>
                <div className="episode-actions">
                  <button className="episode-btn primary" onClick={() => alert('Audio player coming soon!')}>
                    <Play size={18} />
                    Play Episode
                  </button>
                  <button className="episode-btn" onClick={() => alert('Download coming soon!')}>
                    <Download size={18} />
                    Download
                  </button>
                  <button className="episode-btn" onClick={() => alert('Show notes coming soon!')}>
                    <FileText size={18} />
                    Show Notes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="diy-topics">
        <div className="container">
          <h2>Topics We Cover</h2>
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <div key={index} className="topic-card">
                <span className="topic-checkmark">✓</span>
                <span className="topic-text">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="diy-subscribe">
        <div className="container">
          <h2>Subscribe & Follow</h2>
          <p>Don't miss an episode! Subscribe on your favorite podcast platform:</p>
          <div className="subscribe-buttons">
            <button className="subscribe-btn" onClick={() => alert('Subscribe on Apple Podcasts')}>
              🎧 Apple Podcasts
            </button>
            <button className="subscribe-btn" onClick={() => alert('Subscribe on Spotify')}>
              🎵 Spotify
            </button>
            <button className="subscribe-btn" onClick={() => alert('Subscribe on Google Podcasts')}>
              🎙️ Google Podcasts
            </button>
            <button className="subscribe-btn" onClick={() => alert('Copy RSS Feed URL')}>
              📡 RSS Feed
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="diy-cta">
        <div className="container">
          <h2>Want expert help implementing these strategies?</h2>
          <p>Our team can handle all your IT needs so you can focus on growing your business.</p>
          <button className="btn-primary" onClick={() => window.open('tel:8506103889')}>
            Talk to Our Team
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default DIYITPodcast;
