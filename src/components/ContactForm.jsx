import React from 'react';
import { useForm } from '@formspree/react';

export default function ContactForm({ title = 'Request a Consultant' }) {
  const [state, handleSubmit] = useForm("xwkzqgqv"); // Replace with your Formspree form ID if different

  if (state.succeeded) {
    return <p className="mt-4 text-green-600">Thank you! We'll be in touch soon.</p>;
  }

  return (
    <form className="bg-white rounded-xl shadow p-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="mb-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <input type="email" name="email" placeholder="Your Email" required className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <input type="text" name="company" placeholder="Company (optional)" className="w-full border rounded p-2" />
      </div>
      <div className="mb-4">
        <select name="service" className="w-full border rounded p-2">
          <option value="">Select Service</option>
          <option value="AI Solutions">AI Solutions</option>
          <option value="Cloud Architecture">Cloud Architecture</option>
          <option value="Mobile Apps">Mobile Apps</option>
          <option value="DevOps">DevOps</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea name="message" placeholder="Your Message" rows={4} className="w-full border rounded p-2" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold" disabled={state.submitting}>Send Enquiry</button>
      {state.errors && state.errors.length > 0 && (
        <ul className="mt-2 text-red-600">
          {state.errors.map((error, i) => <li key={i}>{error.message}</li>)}
        </ul>
      )}
    </form>
  );
}
