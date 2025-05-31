import React from 'react';


const ContactForm = ({ 
  formData = { firstName: '', lastName: '', email: '', message: '' }, 
  handleChange, 
  handleSubmit, 
  isSubmitting 
}) => {
    return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="firstName" className="form-label">First Name</label>
            <div className="form-underline"></div>
          </div>
          
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <div className="form-underline"></div>
          </div>
        </div>
        
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label htmlFor="email" className="form-label">Email Address</label>
          <div className="form-underline"></div>
        </div>
        
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-input"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder=" "
            style={{ resize: 'vertical' }}
          ></textarea>
          <label htmlFor="message" className="form-label">Your Message</label>
          <div className="form-underline"></div>
        </div>
        
        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <div className="submit-icon">
            {isSubmitting ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;