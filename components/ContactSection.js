import React, { useState } from 'react';
import { Instagram, Send, Paperclip } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionStatus('error');
        console.error('Form submission error:', errorData.message);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Network or other error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-hueneu-secondary section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-hueneu-primary text-center mb-12 font-poppins">
          Let’s Work Together
        </h2>

        <div className="max-w-2xl mx-auto bg-neutral-bg p-8 md:p-12 shadow-xl rounded-lg" style={{fontFamily: 'Inter, sans-serif'}}>
          {/* Form styled as a note/letter */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-hueneu-accent focus:border-hueneu-accent transition duration-150 ease-in-out shadow-sm"
                placeholder="What should we call you?"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-hueneu-accent focus:border-hueneu-accent transition duration-150 ease-in-out shadow-sm"
                placeholder="Where can we reach you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">Your Story (or just a hello!)</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-hueneu-accent focus:border-hueneu-accent transition duration-150 ease-in-out shadow-sm resize-none"
                placeholder="Tell us about your project, your vision, or your favorite color..."
              ></textarea>
            </div>
            
            {/* Optional: File Upload Placeholder - Not functional in this MVP */}
            {/* <div className="flex items-center text-sm text-neutral-500">
              <Paperclip size={18} className="mr-2 text-hueneu-primary" />
              <span>Attach a brief? (Optional, link to services deck or Who Knew visual)</span>
            </div> */}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-neutral-bg bg-hueneu-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hueneu-accent transition duration-150 ease-in-out disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Let’s design your story
                  </>
                )}
              </button>
            </div>
          </form>

          {submissionStatus === 'success' && (
            <p className="mt-6 text-center text-sm text-success">Thank you! Your message has been sent. We'll be in touch soon.</p>
          )}
          {submissionStatus === 'error' && (
            <p className="mt-6 text-center text-sm text-error">Oops! Something went wrong. Please try again or reach out via Instagram.</p>
          )}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-hueneu-primary hover:text-hueneu-accent transition-colors duration-150 ease-in-out group"
          >
            <Instagram size={24} className="mr-2 group-hover:scale-110 transition-transform"/>
            <span className="font-medium font-inter">@hueneu_</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
