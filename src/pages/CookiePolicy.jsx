import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 prose prose-slate">
      <h1>Cookie Policy</h1>

      <p>
        This Cookie Policy explains how PixelMinds Solutions LTD uses cookies
        and similar technologies on our website, the types of cookies we use,
        why we use them, and how you can manage your preferences.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device by websites to
        remember information about your visit. They may be essential for the
        site to function, or they may support analytics, functionality or
        marketing.
      </p>

      <h2>Types of cookies we use</h2>
      <ul>
        <li><strong>Essential cookies:</strong> necessary for the website to operate (e.g. remembering your cookie preference).</li>
        <li><strong>Performance / Analytics cookies:</strong> collect anonymous information about how visitors use the site to help us improve it.</li>
        <li><strong>Functional cookies:</strong> remember choices you make to enhance your experience.</li>
        <li><strong>Marketing cookies:</strong> used to deliver relevant advertising and measure campaign effectiveness (we do not enable marketing cookies without consent).</li>
      </ul>

      <h2>Cookies we set</h2>
      <p>The following is a summary of cookies and typical retention periods:</p>
      <table>
        <thead>
          <tr>
            <th>Cookie name</th>
            <th>Purpose</th>
            <th>Type</th>
            <th>Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>pm_consent</strong></td>
            <td>Stores your cookie preference (accept/reject) and whether analytics are allowed.</td>
            <td>Essential (consent preference)</td>
            <td>180 days</td>
          </tr>
          <tr>
            <td><strong>umami (analytics)</strong></td>
            <td>Anonymous analytics identifier used by Umami to measure site usage; set only if you consent to analytics.</td>
            <td>Performance / Analytics (non-essential)</td>
            <td>Typically 1 year (varies by provider)</td>
          </tr>
        </tbody>
      </table>

      <h2>How we obtain consent</h2>
      <p>
        On first visit we present a cookie banner which explains cookie
        categories and offers a clear choice to "Accept All" or "Reject All".
        Analytics and marketing cookies are disabled by default until you
        explicitly accept them. Your choice is stored in the <em>pm_consent</em>
        cookie.
      </p>

      <h2>Change or withdraw your consent</h2>
      <p>
        You can withdraw or change your consent at any time by clearing the
        <em>pm_consent</em> cookie in your browser or by contacting us at
        <a href="mailto:privacy@pixelminds.co.uk">privacy@pixelminds.co.uk</a>. If you
        withdraw consent for analytics, the analytics script will no longer run
        on subsequent visits.
      </p>

      <h2>Managing cookies via your browser</h2>
      <p>
        Most browsers allow you to control cookies through settings. To find
        out more about managing cookies in your browser, visit the help pages
        of your browser provider. Blocking cookies may affect site
        functionality.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        We use third-party services (e.g. Umami) that may set cookies on our
        behalf. These services are only activated if you consent to the
        relevant cookie category. Please refer to their privacy notices for
        more information about how they use cookies.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about our use of cookies or to exercise any data rights,
        contact us at <a href="mailto:privacy@pixelminds.co.uk">privacy@pixelminds.co.uk</a>.
      </p>

      <h2>More information</h2>
      <p>
        For general guidance about cookies and privacy, see the ICO guidance:
        <a href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/">ICO: Cookies and similar technologies</a>.
      </p>
    </div>
  );
}
