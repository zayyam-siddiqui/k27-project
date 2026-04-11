import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.from('.form-field', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="form-field mb-8">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b-2 border-white pb-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d3fd50] transition-colors duration-300 font-[font1] text-xl"
        />
      </div>

      <div className="form-field mb-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b-2 border-white pb-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d3fd50] transition-colors duration-300 font-[font1] text-xl"
        />
      </div>

      <div className="form-field mb-8">
        <input
          type="text"
          name="company"
          placeholder="Entreprise / Type de projet"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-white pb-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d3fd50] transition-colors duration-300 font-[font1] text-xl"
        />
      </div>

      <div className="form-field mb-8">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full bg-transparent border-b-2 border-white pb-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d3fd50] transition-colors duration-300 font-[font1] text-xl resize-none"
        ></textarea>
      </div>

      <div className="form-field flex justify-end">
        <button
          type="submit"
          disabled={loading || submitted}
          className="uppercase text-2xl font-[font2] border-2 rounded-full pt-2 px-8 text-black bg-[#d3fd50] border-[#d3fd50] hover:text-[#d3fd50] hover:bg-transparent transition-all duration-300 font-bold disabled:opacity-50"
        >
          {loading ? 'Envoi...' : submitted ? 'Merci!' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
