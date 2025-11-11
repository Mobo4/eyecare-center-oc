'use client';

import { useState, FormEvent } from 'react';
import { Calendar, Loader2, CheckCircle, XCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  appointmentType?: string;
  message?: string;
  newPatient?: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    appointmentType: '',
    message: '',
    newPatient: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        appointmentType: '',
        message: '',
        newPatient: false,
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-semibold">Thank you for your request!</p>
            <p className="text-green-700 text-sm mt-1">We will contact you soon to confirm your appointment.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-semibold">Error submitting form</p>
            <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Appointment Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
            Type of Appointment
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            value={formData.appointmentType}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
          >
            <option value="">Select an option</option>
            <option value="comprehensive-exam">Comprehensive Eye Exam</option>
            <option value="contact-lenses">Contact Lens Fitting</option>
            <option value="lasik-consultation">LASIK Consultation</option>
            <option value="emergency">Eye Emergency</option>
            <option value="follow-up">Follow-up Visit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-eyecare-blue focus:border-transparent disabled:bg-gray-100"
            placeholder="Please share any specific concerns or questions..."
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="newPatient"
            name="newPatient"
            checked={formData.newPatient}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 text-eyecare-blue focus:ring-eyecare-blue border-gray-300 rounded disabled:bg-gray-100"
          />
          <label htmlFor="newPatient" className="ml-2 text-sm text-gray-600">
            I am a new patient
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-eyecare-blue text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-eyecare-dark-blue transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5" />
              Request Appointment
            </>
          )}
        </button>

        <p className="text-sm text-gray-600 text-center">
          By submitting this form, you agree to be contacted by our office regarding your appointment request.
        </p>
      </form>
    </div>
  );
}

