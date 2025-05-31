import React from 'react';

const ContactMethod = ({ icon, label, content, type }) => {
  return (
    <div className="contact-method">
      <div className={`method-icon ${type}-icon`}>
        {icon}
      </div>
      <div className="method-content">
        <div className="method-label">{label}</div>
        {typeof content === 'string' ? (
          <div className="method-text">{content}</div>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default ContactMethod;