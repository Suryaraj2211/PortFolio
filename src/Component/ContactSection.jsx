import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    const serviceID = 'service_sxh9z19';
    const templateID = 'template_9r9b0c9';
    const autoReplyTemplateID = 'template_miyvmb6';
    const publicKey = 'Z7O4G6oj8dJMha9SE';

    const notificationData = {
      from_firstName: formData.firstName,
      from_lastName: formData.lastName,
      from_email: formData.email,
      message: formData.message
    };

    const autoReplyData = {
      to_name: `${formData.firstName} ${formData.lastName}`.trim(),
      to_email: formData.email,
      message: formData.message
    };

    Promise.all([
      emailjs.send(serviceID, templateID, notificationData, publicKey),
      emailjs.send(serviceID, autoReplyTemplateID, autoReplyData, publicKey)
    ])
    .then(() => {
      alert('Message sent! Check your email for confirmation.');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Full error details:', error);
      alert(`Failed to send message: ${error.text || 'Please try again later'}`);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <ContactHeader />
          
          <div className="contact-content">
           
<ContactForm 
  formData={formData} // Make sure this is passed
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  isSubmitting={isSubmitting}
/>
            
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;