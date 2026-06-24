import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    { q: 'How do I register for an account?', a: 'Click on the Register button on the top right, fill in your details, and submit. You will instantly get access to your dashboard.' },
    { q: 'I forgot my password, how can I reset it?', a: 'Currently, please contact the administrator to reset your password. A self-service reset feature will be added in future enhancements.' },
    { q: 'Can I edit my profile information?', a: 'Yes, once logged in as a student, navigate to the "Edit Profile" section from the sidebar to update your details.' },
    { q: 'How do I contact my professors?', a: 'Visit the Staffs page or look up your course instructors in your dashboard to find their contact information.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '800px' }}>
      <h1 className="section-title">Frequently Asked Questions</h1>
      
      <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="glass-card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => toggleFAQ(index)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-dark)' }}>{faq.q}</h3>
              <span style={{ color: 'var(--primary)' }}>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeIndex === index && (
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
