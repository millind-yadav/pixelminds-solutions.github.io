import React, { useEffect, useState } from 'react';

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/; SameSite=Lax';
}

function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie('pm_consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    setCookie('pm_consent', 'all', 180);
    setVisible(false);
    if (window.__pm_load_analytics) window.__pm_load_analytics();
  };

  const rejectAll = () => {
    setCookie('pm_consent', 'none', 180);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-6 z-50 bg-white border border-slate-200 rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex-1 text-sm text-slate-700">
        <strong className="block text-base mb-1">We use cookies</strong>
        We use essential cookies and (with your permission) analytics and marketing cookies to
        improve our site. Choose your preference or read our{' '}
        <a href="/cookie-policy" className="underline">
          Cookie Policy
        </a>{' '}
        for details.
      </div>

      <div className="flex gap-3 mt-3 md:mt-0">
        <button
          onClick={rejectAll}
          className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring"
          aria-label="Reject all cookies"
        >
          Reject All
        </button>

        <button
          onClick={acceptAll}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring"
          aria-label="Accept all cookies"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
