import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RacingBlueLight from '../components/RacingBlueLight';
import '../FAQ.css';

const FAQ = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What is managed IT services?",
          a: "Managed IT services means we become your dedicated IT department, handling everything from help desk support to cybersecurity monitoring. We proactively manage your technology infrastructure 24/7, so you can focus on running your business while we ensure your systems are secure, updated, and running smoothly."
        },
        {
          q: "Who are your typical clients?",
          a: "We serve a wide range of clients across Florida and Georgia, from individual remote workers and small businesses (3-50 users) to mid-market companies (50-250 users) and large enterprises (250+ users). Our clients span industries including healthcare, finance, manufacturing, professional services, and more."
        },
        {
          q: "What areas do you serve?",
          a: "We provide comprehensive IT services across Florida and Georgia. Our local presence ensures rapid on-site response when needed, while our 24/7 remote monitoring and support capabilities mean we're always watching over your systems."
        },
        {
          q: "How long have you been in business?",
          a: "TopTier Technologies was founded in 2010 and has been serving businesses for over 13 years. Our average client relationship spans over 7 years, demonstrating the trust and value we deliver consistently."
        }
      ]
    },
    {
      category: "Services & Support",
      questions: [
        {
          q: "What's included in 24/7 support?",
          a: "Our 24/7 support includes around-the-clock monitoring of your IT infrastructure, rapid incident response, remote troubleshooting, and emergency support. Depending on your tier (PREMIUM or ENTERPRISE), you get response times as fast as 15 minutes to 30 seconds for P1 critical issues."
        },
        {
          q: "Do you offer on-site support?",
          a: "Yes! While most issues can be resolved remotely, we provide on-site support when needed. CORE+ and higher tiers include scheduled on-site visits, while CORE tier can add on-site support as needed. Our certified field technicians are available across Florida and Georgia."
        },
        {
          q: "What is your average response time?",
          a: "Response times vary by tier: CORE (24 hours), CORE+ (1-4 hours), PREMIUM (15 minutes for P1, 1 hour for P2), and ENTERPRISE (30 seconds for P1). All response times are backed by our Service Level Agreements (SLAs)."
        },
        {
          q: "Can you help with cloud migration?",
          a: "Absolutely! We specialize in cloud migrations to Microsoft Azure and AWS. Our migration services include assessment, planning, execution, testing, and post-migration optimization. We've successfully migrated hundreds of businesses to the cloud with minimal disruption."
        },
        {
          q: "Do you provide cybersecurity services?",
          a: "Yes, cybersecurity is core to everything we do. We offer 24/7 SOC monitoring, NextGen antivirus/EDR, AI-powered threat detection, backup and disaster recovery, and compliance management. Our security services scale from basic protection (CORE) to enterprise-grade SOC/NOC monitoring (ENTERPRISE)."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          q: "How is pricing structured?",
          a: "We offer four transparent pricing tiers: CORE ($50-110/mo for 2-6 devices), CORE+ ($95/user/mo, minimum $1,500/mo), PREMIUM ($145/user/mo, minimum $4,500/mo), and ENTERPRISE ($150-175/user/mo, custom pricing). Each tier includes different service levels, response times, and features to match your business needs."
        },
        {
          q: "What's the difference between CORE and CORE+?",
          a: "CORE is designed for remote workers and home offices (2-6 devices) with basic managed services, 24-hour response time, and business hours support. CORE+ is for small businesses (3-50 users) and includes RMM monitoring, EDR security, a dedicated account manager, quarterly business reviews, and 1-4 hour response times."
        },
        {
          q: "Are there setup fees?",
          a: "Yes, there is a one-time onboarding fee to properly assess your environment, document your infrastructure, and integrate our monitoring systems. The fee varies by tier and complexity, typically ranging from $500-$2,500. We'll provide an exact quote during your consultation."
        },
        {
          q: "Can I customize my plan?",
          a: "Absolutely! While our four tiers provide a solid foundation, we can customize any plan to fit your specific needs. You can add services à la carte, adjust user counts, include specialized compliance requirements, or create a hybrid solution. Let's discuss your unique requirements."
        },
        {
          q: "Do you have contracts?",
          a: "We typically work on annual agreements to ensure continuity and allow us to properly plan and invest in your IT infrastructure. However, we're flexible and can discuss month-to-month options for certain tiers. Most importantly, we earn your business every day through exceptional service."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, ACH bank transfers, and can set up automated monthly billing for your convenience. For enterprise clients, we can also accommodate purchase orders and net-30 payment terms."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          q: "What security certifications do you have?",
          a: "We are Microsoft Partners, Fortinet Certified Security Experts, and maintain partnerships with leading security vendors including Datto, Cisco, and Dell Technologies. Our team holds industry certifications including CISSP, Security+, and vendor-specific security credentials."
        },
        {
          q: "Do you provide SOC monitoring?",
          a: "Yes! Our 24/7 Security Operations Center (SOC) monitors your network around the clock, detecting and responding to threats in real-time. SOC monitoring is included in PREMIUM and ENTERPRISE tiers, and can be added to CORE+ as an enhancement."
        },
        {
          q: "Can you help with compliance (HIPAA, PCI, SOC 2)?",
          a: "Absolutely. We have extensive experience with HIPAA, PCI-DSS, SOC 2, and other compliance frameworks. Our compliance management services (included in PREMIUM and ENTERPRISE tiers) include gap assessments, remediation, ongoing monitoring, and audit support."
        },
        {
          q: "How do you handle data breaches?",
          a: "We have a comprehensive incident response plan that includes immediate containment, forensic analysis, remediation, and recovery. Our PREMIUM and ENTERPRISE tiers include monthly disaster recovery testing to ensure we're always prepared. We also work with cyber insurance providers and legal counsel when needed."
        },
        {
          q: "What backup solutions do you provide?",
          a: "We implement multi-layered backup strategies including local backups, offsite replication, and cloud backup. All plans include backup and disaster recovery, with advanced features like immutable backups and automated testing available in higher tiers. We typically recommend a 3-2-1 backup strategy."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I get started?",
          a: "Getting started is easy! Call us at (850) 610-3889 or click the 'Schedule Consultation' button to book a free IT assessment. We'll discuss your business needs, review your current infrastructure, and recommend the right plan for you. Most clients are up and running within 2-4 weeks."
        },
        {
          q: "What's the onboarding process?",
          a: "Our onboarding process includes: 1) Initial consultation and needs assessment, 2) Infrastructure audit and documentation, 3) Solution design and agreement signing, 4) System integration and monitoring setup, 5) Team training and handoff, 6) 30-day check-in to ensure everything is running smoothly."
        },
        {
          q: "How long does implementation take?",
          a: "For most businesses, implementation takes 2-4 weeks from contract signing to full production. Complex environments or migrations may take 6-12 weeks. We work around your schedule to minimize disruption and can expedite timelines for urgent situations."
        },
        {
          q: "What if I need to cancel?",
          a: "We hope you never want to leave, but if circumstances change, we'll work with you on an exit plan. Most agreements have a 30-90 day notice period. We'll ensure a smooth transition, provide documentation, and hand off any credentials or systems professionally."
        },
        {
          q: "Do you offer trials or assessments?",
          a: "Yes! We offer free IT assessments where we review your current infrastructure, identify gaps and risks, and provide recommendations—no obligation. For qualified businesses, we can also arrange proof-of-concept trials for specific services."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <Navbar type="business" />
      <RacingBlueLight />

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">
            Get answers to common questions about our services, pricing, and support.
            Can't find what you're looking for? Give us a call!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="faq-category-title">{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = `${categoryIndex}-${questionIndex}`;
                  const isActive = activeQuestion === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className={`faq-item ${isActive ? 'active' : ''}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleQuestion(globalIndex)}
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          className={`faq-icon ${isActive ? 'rotated' : ''}`}
                          size={20}
                        />
                      </button>
                      {isActive && (
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta">
        <div className="container">
          <h2>Still have questions?</h2>
          <p>Our team is here to help. Reach out and we'll get back to you quickly.</p>
          <div className="faq-cta-buttons">
            <button
              className="btn-primary"
              onClick={() => window.open('tel:8506103889')}
            >
              <Phone size={20} />
              Call (850) 610-3889
            </button>
            <button
              className="btn-secondary"
              onClick={() => window.location.href = 'mailto:helpdesk@tttmsp.com'}
            >
              <Mail size={20} />
              Email Us
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate('/plan-selector')}
            >
              View Pricing Plans
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
