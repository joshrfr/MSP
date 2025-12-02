import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import '../Services.css';

const QuestionnairePremium = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sections = [
    {
      id: 'business',
      title: 'Business Profile',
      description: 'Tell us about your company',
      questions: [
        { id: 'company_name', label: 'Company Name', type: 'text', required: true },
        { id: 'website', label: 'Website (if applicable)', type: 'text', required: false },
        { id: 'ein', label: 'EIN/Tax ID (for verification)', type: 'text', required: true },
        { id: 'years_business', label: 'How long have you been in business?', type: 'number', required: true },
        {
          id: 'industry',
          label: 'What industry are you in?',
          type: 'select',
          required: true,
          options: [
            'Accounting/Finance',
            'Healthcare',
            'Legal',
            'Manufacturing',
            'Retail',
            'Real Estate/Property Management',
            'Professional Services',
            'Other'
          ]
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      description: 'What does your IT environment look like?',
      questions: [
        { id: 'employee_count', label: 'Number of employees', type: 'number', required: true },
        { id: 'location_count', label: 'Number of locations', type: 'number', required: true },
        {
          id: 'it_infrastructure',
          label: 'What IT assets do you have? (select all that apply)',
          type: 'checkbox',
          required: true,
          options: [
            'On-premises servers',
            'Cloud services (Azure, AWS, Google Cloud)',
            'Hybrid (on-prem + cloud)',
            'Workstations/Laptops',
            'Mobile devices',
            'Network infrastructure',
            'VoIP/Phone systems',
            'Database systems'
          ]
        }
      ]
    },
    {
      id: 'current',
      title: 'Current IT Support',
      description: 'How are you handling IT today?',
      questions: [
        {
          id: 'current_support',
          label: 'How is IT managed today?',
          type: 'radio',
          required: true,
          options: [
            'In-house IT team',
            'Current MSP/service provider',
            'Mix of in-house and outsourced',
            'Trying to transition or improve'
          ]
        },
        {
          id: 'current_support_team_size',
          label: 'If in-house IT, how many people?',
          type: 'number',
          required: false
        },
        {
          id: 'security_posture',
          label: 'How confident are you in your security?',
          type: 'radio',
          required: true,
          options: [
            '1 - Not secure, very concerned',
            '2 - Has gaps, needs improvement',
            '3 - Decent, but need better practices',
            '4 - Good, but want better monitoring',
            '5 - Excellent, regular audits'
          ]
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance & Needs',
      description: 'Any special requirements?',
      questions: [
        {
          id: 'compliance_needs',
          label: 'Do you have compliance requirements? (select all)',
          type: 'checkbox',
          required: false,
          options: [
            'HIPAA (healthcare)',
            'PCI-DSS (payment processing)',
            'GDPR/Privacy regulations',
            'SOC 2 audit requirements',
            'Industry-specific standards',
            'No compliance requirements'
          ]
        },
        {
          id: 'pain_points',
          label: 'What are your top 3 IT pain points?',
          type: 'textarea',
          required: true,
          placeholder: 'E.g., Frequent outages, security concerns, lack of IT expertise...'
        },
        {
          id: 'expectations',
          label: 'What do you want from an MSP?',
          type: 'textarea',
          required: true,
          placeholder: 'E.g., Proactive support, security focus, scalability...'
        }
      ]
    },
    {
      id: 'budget',
      title: 'Budget & Timeline',
      description: 'Let\'s talk timing and investment',
      questions: [
        {
          id: 'budget_range',
          label: 'What\'s your approximate IT budget?',
          type: 'radio',
          required: true,
          options: [
            'Under $1,000/month',
            '$1,000-$2,500/month',
            '$2,500-$5,000/month',
            '$5,000-$10,000/month',
            '$10,000+/month',
            'Don\'t know yet'
          ]
        },
        {
          id: 'timeline',
          label: 'When are you ready to start?',
          type: 'radio',
          required: true,
          options: [
            'This week',
            'This month',
            'This quarter',
            'This year',
            'Just exploring'
          ]
        },
        {
          id: 'decision_maker',
          label: 'Are you the decision maker?',
          type: 'radio',
          required: true,
          options: [
            'Yes, I approve everything',
            'I recommend, others approve',
            'Just providing info, others decide',
            'Need to involve my team'
          ]
        }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      // For checkbox, handle array
      const current = answers[questionId] || [];
      const newValue = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [questionId]: newValue });
    } else {
      setAnswers({ ...answers, [questionId]: value });
    }
  };

  const calculateScore = () => {
    let score = 0;

    // Business maturity (25 points)
    const yearsInBusiness = parseInt(answers.years_business) || 0;
    if (yearsInBusiness >= 5) score += 25;
    else if (yearsInBusiness >= 3) score += 15;
    else score += 5;

    // Infrastructure complexity (20 points)
    const infrastructureCount = (answers.it_infrastructure || []).length;
    if (infrastructureCount >= 5) score += 20;
    else if (infrastructureCount >= 3) score += 12;
    else score += 5;

    // Current support (15 points)
    if (answers.current_support === 'In-house IT team') score += 15;
    else if (answers.current_support === 'Current MSP/service provider') score += 12;
    else score += 5;

    // Security maturity (15 points)
    const securityLevel = parseInt(answers.security_posture?.[0]) || 1;
    if (securityLevel >= 4) score += 15;
    else if (securityLevel >= 3) score += 10;
    else score += 5;

    // Compliance needs (15 points)
    const complianceCount = (answers.compliance_needs || []).length;
    if (complianceCount > 1) score += 15;
    else if (complianceCount === 1) score += 10;
    else score += 5;

    // Budget alignment (10 points)
    if (answers.budget_range?.includes('$5,000') || answers.budget_range?.includes('$10,000+')) score += 10;
    else if (answers.budget_range?.includes('$2,500')) score += 7;
    else score += 2;

    // Decision readiness (10 points bonus)
    if (answers.decision_maker === 'Yes, I approve everything') score += 5;
    if (answers.timeline !== 'Just exploring') score += 5;

    return Math.max(0, Math.min(100, score));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    const score = calculateScore();
    let status = 'manual_review';
    if (score >= 85) status = 'approved';
    else if (score >= 70) status = 'conditional';
    else if (score >= 50) status = 'schedule_call';
    else status = 'rejected';

    try {
      const response = await fetch('/api/qualifications/premium', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...answers,
          auto_score: score,
          qualification_status: status,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const data = await response.json();
        setResult({
          status: status,
          score: score,
          id: data.id
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setResult({
        status: status,
        score: score,
        id: 'temp'
      });
    }

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted && result) {
    const resultConfig = {
      approved: {
        icon: CheckCircle2,
        color: '#28a745',
        title: 'Perfect! You\'re Approved',
        message: 'We\'re excited to work with you! Our team will contact you within 24 hours to schedule your discovery call and discuss custom pricing.'
      },
      conditional: {
        icon: Clock,
        color: '#FF9800',
        title: 'Thanks for Applying',
        message: 'Your application looks promising! Our team will review it and contact you within 24 hours to discuss next steps.'
      },
      schedule_call: {
        icon: Clock,
        color: '#FF9800',
        title: 'Let\'s Talk',
        message: 'We\'d like to learn more about your situation. Our team will call you within 24 hours to discuss if we\'re the right fit.'
      },
      rejected: {
        icon: AlertCircle,
        color: '#FF6B6B',
        title: 'Thanks for Exploring',
        message: 'Based on your responses, we want to be transparent: we may not be the best fit for your needs. But give us a call - we might surprise you!'
      }
    };

    const config = resultConfig[result.status];
    const Icon = config.icon;

    return (
      <div className="services-page">
        <Navbar type="business" />
        <section style={{ padding: '100px 7.6923%', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <Icon size={80} style={{ color: config.color, marginBottom: '30px' }} />
            <h2 style={{ color: 'var(--text-primary)', fontSize: '36px', marginBottom: '20px' }}>
              {config.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
              {config.message}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '30px' }}>
              Reference ID: {result.id}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => window.open('tel:8506103889')}
                style={{
                  padding: '12px 32px',
                  background: '#87CEEB',
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Call Us Now
              </button>
              <button
                onClick={() => navigate('/business-plans')}
                style={{
                  padding: '12px 32px',
                  background: 'transparent',
                  color: '#87CEEB',
                  border: '2px solid #87CEEB',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Back to Plans
              </button>
            </div>
          </div>
        </section>
        <BusinessFooter />
      </div>
    );
  }

  const section = sections[currentSection];
  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="services-page">
      <Navbar type="business" />

      <section className="service-builder-section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Progress */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div>
                <h3 style={{ color: 'var(--text-primary)', margin: 0, marginBottom: '4px' }}>
                  {section.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '14px' }}>
                  {section.description}
                </p>
              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'right' }}>
                Section {currentSection + 1} of {sections.length}
                <br />
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              background: 'var(--border-subtle)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #87CEEB, #00D9FF)',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          {/* Questions */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '40px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {section.questions.map((q) => (
                <div key={q.id}>
                  <label style={{
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontWeight: '500',
                    display: 'block',
                    marginBottom: '12px'
                  }}>
                    {q.label} {q.required && <span style={{ color: '#FF6B6B' }}>*</span>}
                  </label>

                  {q.type === 'text' && (
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      placeholder={q.placeholder}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'rgba(135, 206, 235, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        boxSizing: 'border-box'
                      }}
                    />
                  )}

                  {q.type === 'number' && (
                    <input
                      type="number"
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'rgba(135, 206, 235, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        boxSizing: 'border-box'
                      }}
                    />
                  )}

                  {q.type === 'select' && (
                    <select
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'rgba(135, 206, 235, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="">Select an option</option>
                      {q.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  )}

                  {q.type === 'textarea' && (
                    <textarea
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      placeholder={q.placeholder}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: 'rgba(135, 206, 235, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        boxSizing: 'border-box',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                  )}

                  {q.type === 'radio' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {q.options.map((opt) => (
                        <label key={opt} style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px',
                          backgroundColor: answers[q.id] === opt ? 'rgba(135, 206, 235, 0.1)' : 'transparent',
                          border: `2px solid ${answers[q.id] === opt ? '#87CEEB' : 'var(--border-subtle)'}`,
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}>
                          <input
                            type="radio"
                            checked={answers[q.id] === opt}
                            onChange={() => handleAnswer(q.id, opt)}
                            style={{ marginRight: '12px' }}
                          />
                          <span style={{ color: 'var(--text-secondary)' }}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {q.type === 'checkbox' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {q.options.map((opt) => (
                        <label key={opt} style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px',
                          backgroundColor: (answers[q.id] || []).includes(opt) ? 'rgba(135, 206, 235, 0.1)' : 'transparent',
                          border: `2px solid ${(answers[q.id] || []).includes(opt) ? '#87CEEB' : 'var(--border-subtle)'}`,
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}>
                          <input
                            type="checkbox"
                            checked={(answers[q.id] || []).includes(opt)}
                            onChange={() => handleAnswer(q.id, opt)}
                            style={{ marginRight: '12px' }}
                          />
                          <span style={{ color: 'var(--text-secondary)' }}>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
            <button
              onClick={handleBack}
              disabled={currentSection === 0}
              style={{
                padding: '12px 24px',
                background: currentSection === 0 ? 'var(--border-subtle)' : 'transparent',
                color: currentSection === 0 ? 'var(--text-muted)' : 'var(--text-secondary)',
                border: '2px solid var(--border-subtle)',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: currentSection === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Back
            </button>

            {currentSection === sections.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  padding: '12px 32px',
                  background: '#87CEEB',
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleNext}
                style={{
                  padding: '12px 32px',
                  background: '#87CEEB',
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Next
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default QuestionnairePremium;
