import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import BusinessFooter from '../components/BusinessFooter';
import '../Services.css';

const QuestionnaireCorePlus = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: 'business_type',
      question: 'What best describes you?',
      type: 'radio',
      options: [
        { value: 'soho', label: 'Individual / SOHO (1-2 people)' },
        { value: 'small_business', label: 'Small business (3-10 employees)' },
        { value: 'medium_business', label: 'Medium business (11-50 employees)' },
        { value: 'other', label: 'Something else' }
      ]
    },
    {
      id: 'current_support',
      question: 'What IT support do you have today?',
      type: 'checkbox',
      options: [
        { value: 'none', label: 'No IT support (I do it myself)' },
        { value: 'part_time', label: 'Part-time IT person' },
        { value: 'full_time', label: 'Full-time IT staff' },
        { value: 'another_msp', label: 'Another IT service company' },
        { value: 'mixed', label: 'Mix of above' }
      ]
    },
    {
      id: 'tech_comfort',
      question: 'How tech-comfortable is your team?',
      type: 'radio',
      options: [
        { value: '1', label: '1 - Can\'t turn it on/off' },
        { value: '2', label: '2 - Basic (email, web browsing)' },
        { value: '3', label: '3 - Intermediate (troubleshoot basics)' },
        { value: '4', label: '4 - Advanced (can manage devices)' }
      ]
    },
    {
      id: 'pain_point',
      question: 'What\'s your biggest IT challenge right now?',
      type: 'radio',
      options: [
        { value: 'outages', label: 'Device/network outages (things break a lot)' },
        { value: 'security', label: 'Security/ransomware concerns' },
        { value: 'no_support', label: 'Can\'t find good IT support' },
        { value: 'cost', label: 'Current IT support is too expensive' },
        { value: 'compliance', label: 'Need compliance help (HIPAA, etc)' },
        { value: 'other', label: 'Other issue' }
      ]
    },
    {
      id: 'timeline',
      question: 'When do you need this service?',
      type: 'radio',
      options: [
        { value: 'immediate', label: 'Immediately (this week)' },
        { value: 'soon', label: 'Soon (this month)' },
        { value: 'planning', label: 'Planning ahead (1-3 months)' },
        { value: 'exploring', label: 'Just exploring' }
      ]
    }
  ];

  // Scoring algorithm
  const calculateScore = (formAnswers) => {
    let score = 0;

    // Business size (30 points max)
    if (formAnswers.business_type === 'small_business') score += 30;
    else if (formAnswers.business_type === 'soho') score += 10;
    else if (formAnswers.business_type === 'medium_business') score += 25;
    else score -= 5;

    // IT support (20 points max)
    if (Array.isArray(formAnswers.current_support)) {
      if (formAnswers.current_support.includes('another_msp')) score += 15;
      else if (formAnswers.current_support.includes('part_time')) score += 10;
      else if (formAnswers.current_support.includes('none')) score += 5;
      if (formAnswers.current_support.length === 0) score -= 5;
    }

    // Tech comfort (25 points max)
    const techLevel = parseInt(formAnswers.tech_comfort);
    if (techLevel >= 3) score += 25;
    else if (techLevel === 2) score += 15;
    else score += 5;

    // Clear pain point (25 points max)
    if (formAnswers.pain_point && formAnswers.pain_point !== 'other') score += 20;
    else if (formAnswers.pain_point === 'other') score += 10;

    // Timeline (bonus or penalty)
    if (formAnswers.timeline === 'exploring') score -= 10;
    else if (formAnswers.timeline === 'immediate') score += 5;

    return Math.max(0, Math.min(100, score)); // 0-100 scale
  };

  const handleAnswer = (value) => {
    if (questions[currentQuestion].type === 'checkbox') {
      const current = answers[questions[currentQuestion].id] || [];
      const newAnswers = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [questions[currentQuestion].id]: newAnswers });
    } else {
      setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    // Calculate score
    const score = calculateScore(answers);

    // Determine status
    let status = 'manual_review';
    if (score >= 70) {
      status = 'auto_approved';
    }

    // Send to backend
    try {
      const response = await fetch('/api/qualifications/core-plus', {
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
          message: status === 'auto_approved'
            ? 'Congratulations! You\'re approved to proceed to checkout.'
            : 'Thanks! Our team will review your application and contact you within 2 hours during business hours.',
          id: data.id
        });
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      // Proceed anyway
      setResult({
        status: status,
        score: score,
        message: 'Thanks for completing the questionnaire!',
        id: 'temp'
      });
      setSubmitted(true);
    }

    setLoading(false);
  };

  const isAnswered = () => {
    const q = questions[currentQuestion];
    if (q.type === 'checkbox') {
      return answers[q.id] && answers[q.id].length > 0;
    } else {
      return answers[q.id] !== undefined;
    }
  };

  if (submitted && result) {
    return (
      <div className="services-page">
        <Navbar type="business" />
        <section style={{ padding: '100px 7.6923%', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            {result.status === 'auto_approved' ? (
              <>
                <CheckCircle2 size={80} style={{ color: '#28a745', marginBottom: '30px' }} />
                <h2 style={{ color: 'var(--text-primary)', fontSize: '36px', marginBottom: '20px' }}>
                  You're Approved! ✓
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
                  {result.message}
                </p>
                <button
                  onClick={() => navigate('/business-plans?tier=core-plus')}
                  style={{
                    padding: '14px 32px',
                    background: '#87CEEB',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    margin: '0 auto 16px'
                  }}
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => window.open('tel:8506103889')}
                  style={{
                    padding: '14px 32px',
                    background: 'transparent',
                    color: '#87CEEB',
                    border: '2px solid #87CEEB',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Or Call Us First
                </button>
              </>
            ) : (
              <>
                <AlertCircle size={80} style={{ color: '#FF9800', marginBottom: '30px' }} />
                <h2 style={{ color: 'var(--text-primary)', fontSize: '36px', marginBottom: '20px' }}>
                  Thanks for Applying!
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px' }}>
                  {result.message}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '30px' }}>
                  Reference ID: {result.id}
                </p>
                <button
                  onClick={() => navigate('/business-plans?tier=core-plus')}
                  style={{
                    padding: '14px 32px',
                    background: 'var(--brand-primary)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Back to Plans
                </button>
              </>
            )}
          </div>
        </section>
        <BusinessFooter />
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="services-page">
      <Navbar type="business" />

      <section className="service-builder-section">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Progress Bar */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ color: 'var(--text-primary)', margin: 0 }}>
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
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

          {/* Question */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '40px'
          }}>
            <h2 style={{ color: 'var(--text-primary)', fontSize: '28px', marginBottom: '32px' }}>
              {question.question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {question.type === 'radio' ? (
                // Radio options
                question.options.map((option) => (
                  <label key={option.value} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: answers[question.id] === option.value ? 'rgba(135, 206, 235, 0.1)' : 'transparent',
                    border: `2px solid ${answers[question.id] === option.value ? '#87CEEB' : 'var(--border-subtle)'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input
                      type="radio"
                      value={option.value}
                      checked={answers[question.id] === option.value}
                      onChange={() => handleAnswer(option.value)}
                      style={{ marginRight: '12px', cursor: 'pointer' }}
                    />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
                      {option.label}
                    </span>
                  </label>
                ))
              ) : (
                // Checkbox options
                question.options.map((option) => (
                  <label key={option.value} style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: answers[question.id]?.includes(option.value) ? 'rgba(135, 206, 235, 0.1)' : 'transparent',
                    border: `2px solid ${answers[question.id]?.includes(option.value) ? '#87CEEB' : 'var(--border-subtle)'}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <input
                      type="checkbox"
                      checked={answers[question.id]?.includes(option.value) || false}
                      onChange={() => handleAnswer(option.value)}
                      style={{ marginRight: '12px', cursor: 'pointer' }}
                    />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
                      {option.label}
                    </span>
                  </label>
                ))
              )}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              style={{
                padding: '12px 24px',
                background: currentQuestion === 0 ? 'var(--border-subtle)' : 'transparent',
                color: currentQuestion === 0 ? 'var(--text-muted)' : 'var(--text-secondary)',
                border: '2px solid var(--border-subtle)',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Back
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!isAnswered() || loading}
                style={{
                  padding: '12px 32px',
                  background: !isAnswered() ? 'var(--border-subtle)' : '#87CEEB',
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: !isAnswered() || loading ? 'not-allowed' : 'pointer',
                  opacity: !isAnswered() ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {loading ? 'Submitting...' : 'Submit'}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isAnswered()}
                style={{
                  padding: '12px 32px',
                  background: !isAnswered() ? 'var(--border-subtle)' : '#87CEEB',
                  color: '#000',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: !isAnswered() ? 'not-allowed' : 'pointer',
                  opacity: !isAnswered() ? 0.5 : 1,
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

export default QuestionnaireCorePlus;
