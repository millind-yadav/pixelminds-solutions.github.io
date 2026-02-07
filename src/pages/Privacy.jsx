import React from 'react';
import Seo from '@components/Seo';

export default function Privacy() {
  return (
    <div>
      <Seo
        title="Privacy Policy — PixelMinds Consultancy"
        description="Privacy policy for PixelMinds Consultancy. Learn what data we collect, how we use it, and how to exercise your rights."
        url="https://pixelminds.co.uk/privacy"
      />

      <div className="max-w-4xl mx-auto py-16 px-6 prose prose-slate">
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy explains how PixelMinds Solutions LTD ("we", "us",
          "our") collects, uses, discloses and protects personal data about you
          when you visit our website or contact us. It also explains your rights
          and how to exercise them.
        </p>

        <h2>Data controller</h2>
        <p>
          PixelMinds Solutions LTD is the data controller. For queries about this
          policy or to exercise your rights, contact: <a href="mailto:privacy@pixelminds.co.uk">privacy@pixelminds.co.uk</a>.
        </p>

        <h2>Personal data we collect</h2>
        <ul>
          <li>Contact information you provide directly (name, email, company).</li>
          <li>Communications and support correspondence.</li>
          <li>Technical data collected automatically (IP, browser), where consent is given.</li>
        </ul>

        <h2>Your rights</h2>
        <p>You have rights including access, rectification, erasure, restriction, objection and portability. To exercise a right, email <a href="mailto:privacy@pixelminds.co.uk">privacy@pixelminds.co.uk</a>.</p>

        <h2>Complaints</h2>
        <p>If you are unhappy with our handling of your data you can complain to the ICO: <a href="https://ico.org.uk/concerns/">https://ico.org.uk/concerns/</a>.</p>

        <h2>Contact</h2>
        <p>For questions about this policy contact <a href="mailto:privacy@pixelminds.co.uk">privacy@pixelminds.co.uk</a>.</p>
      </div>
    </div>
  );
}
