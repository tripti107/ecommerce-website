import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: 'support@shopeasy.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: '123 Commerce Street, Business District, NY 10001',
      description: 'Come say hello at our office'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 5:00 PM',
      description: 'Weekend support available online'
    }
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in original condition with tags attached.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email to monitor your package.'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <div className="contact-page__hero-content">
          <h1>Get in Touch</h1>
          <p>
            Have a question, suggestion, or need help? We'd love to hear from you. 
            Our team is here to provide the support you need.
          </p>
        </div>
      </section>

      <section className="contact-page__info">
        <div className="contact-page__info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-page__info-card">
              <div className="contact-page__info-icon">
                {info.icon}
              </div>
              <div className="contact-page__info-content">
                <h3>{info.title}</h3>
                <div className="contact-page__info-details">{info.details}</div>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-page__form-section">
        <div className="contact-page__form-container">
          <div className="contact-page__form-header">
            <MessageCircle size={32} />
            <div>
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
          </div>

          <form className="contact-page__form" onSubmit={handleSubmit}>
            <div className="contact-page__form-row">
              <div className="contact-page__form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="contact-page__form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="contact-page__form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What is this regarding?"
              />
            </div>

            <div className="contact-page__form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button type="submit" className="contact-page__submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="contact-page__faq">
        <h2>Frequently Asked Questions</h2>
        <div className="contact-page__faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="contact-page__faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;