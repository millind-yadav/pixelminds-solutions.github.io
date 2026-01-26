import React from 'react';

const roles = [
  {
    title: 'AI Engineer',
    description: 'Build and deploy machine learning models for enterprise clients. Python, TensorFlow, cloud experience preferred.',
  },
  {
    title: 'Cloud Architect',
    description: 'Design scalable cloud solutions on AWS/Azure/GCP. DevOps and security experience a plus.',
  },
  {
    title: 'Frontend Developer',
    description: 'Create beautiful, performant web apps with React and Tailwind. UI/UX skills a bonus.',
  },
];

export default function Careers() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Careers at PixelMinds</h1>
        <p className="mb-8 text-lg text-gray-700">Join our team of innovators and help shape the future of technology consulting.</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roles.map(role => (
            <div key={role.title} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
              <p className="text-gray-600 mb-4">{role.description}</p>
            </div>
          ))}
        </div>
        <form className="bg-white rounded-xl shadow p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>
          <div className="mb-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <input type="email" name="email" placeholder="Your Email" required className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <input type="text" name="linkedin" placeholder="LinkedIn Profile (optional)" className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <input type="file" name="cv" accept=".pdf,.doc,.docx" className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <textarea name="cover" placeholder="Cover Letter" rows={4} className="w-full border rounded p-2" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Submit Application</button>
        </form>
      </div>
    </section>
  );
}
