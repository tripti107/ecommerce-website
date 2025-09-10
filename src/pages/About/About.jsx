import React from 'react';
import { Users, Award, Shield, Truck, Heart, Star } from 'lucide-react';
import './About.scss';

const About = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Secure Shopping',
      description: 'Your data and payments are protected with industry-leading security measures.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50 with express delivery options available.'
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Guarantee',
      description: 'All products come with our quality guarantee and easy return policy.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Customer Care',
      description: '24/7 customer support to help you with any questions or concerns.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Passionate about creating exceptional shopping experiences.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in curating high-quality products for our customers.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Dedicated to ensuring every customer has a great experience.'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-page__hero">
        <div className="about-page__hero-content">
          <h1>About ShopEasy</h1>
          <p>
            We're passionate about making online shopping simple, secure, and enjoyable. 
            Since 2020, we've been committed to providing high-quality products and 
            exceptional customer service.
          </p>
        </div>
      </section>

      <section className="about-page__story">
        <div className="about-page__story-content">
          <div className="about-page__story-text">
            <h2>Our Story</h2>
            <p>
              ShopEasy was born from a simple idea: online shopping should be easy, 
              trustworthy, and enjoyable. We started as a small team with big dreams 
              and have grown into a trusted platform serving thousands of customers worldwide.
            </p>
            <p>
              Our mission is to connect people with products they love while providing 
              an exceptional shopping experience from browse to delivery. We carefully 
              curate every item in our catalog to ensure quality and value.
            </p>
            <div className="about-page__achievements">
              <div className="about-page__achievement">
                <span className="about-page__achievement-number">50,000+</span>
                <span className="about-page__achievement-label">Happy Customers</span>
              </div>
              <div className="about-page__achievement">
                <span className="about-page__achievement-number">1,000+</span>
                <span className="about-page__achievement-label">Products</span>
              </div>
              <div className="about-page__achievement">
                <span className="about-page__achievement-number">4.8</span>
                <span className="about-page__achievement-label">
                  <Star size={16} className="star-filled" /> Rating
                </span>
              </div>
            </div>
          </div>
          <div className="about-page__story-image">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Our team working together"
            />
          </div>
        </div>
      </section>

      <section className="about-page__features">
        <h2>Why Choose ShopEasy?</h2>
        <div className="about-page__features-grid">
          {features.map((feature, index) => (
            <div key={index} className="about-page__feature">
              <div className="about-page__feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-page__team">
        <h2>Meet Our Team</h2>
        <div className="about-page__team-grid">
          {team.map((member, index) => (
            <div key={index} className="about-page__team-member">
              <div className="about-page__team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="about-page__team-member-info">
                <h3>{member.name}</h3>
                <div className="about-page__team-member-role">{member.role}</div>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-page__values">
        <div className="about-page__values-content">
          <h2>Our Values</h2>
          <div className="about-page__values-list">
            <div className="about-page__value">
              <Users size={32} />
              <div>
                <h3>Customer First</h3>
                <p>Every decision we make is guided by what's best for our customers.</p>
              </div>
            </div>
            <div className="about-page__value">
              <Award size={32} />
              <div>
                <h3>Quality Excellence</h3>
                <p>We never compromise on quality and continuously strive for excellence.</p>
              </div>
            </div>
            <div className="about-page__value">
              <Heart size={32} />
              <div>
                <h3>Genuine Care</h3>
                <p>We genuinely care about our customers, team, and community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;