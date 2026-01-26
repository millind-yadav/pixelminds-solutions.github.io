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
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-2xl p-10 border border-blue-200">
          <h3 className="text-3xl font-bold mb-6 text-blue-700">Apply to Join PixelMinds</h3>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScU43gABm9J61uFGSeEZFMlPn_kgFhbNsBlAhBsqfL427Sj9Q/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="PixelMinds Careers Application"
            style={{ border: 'none', width: '100%', minHeight: '900px', background: 'transparent' }}
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
