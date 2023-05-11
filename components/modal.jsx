import { useState, useEffect } from 'react';

export default function CookieConsentModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    setShowModal(!cookieConsent);
  }, []);

  function handleAccept() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookieConsent', 'true');
    }
    setShowModal(false);
  }

  function handleDecline() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('cookieConsent');
    }
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Cookie Consent</h2>
            <p>
            We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
            </p>
            <p>
            By clicking "Accept", you consent to the use of all cookies and the transfer of information to Google Analytics. You can review our <a href="/privacy">Privacy Policy</a> for more information about how we collect and use data.
            </p>
            <div className="modal-buttons">
              <button onClick={handleAccept}>Accept</button>
              <button onClick={handleDecline}>Decline</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 450px;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }
        .modal-buttons {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 20px;
        }
        .modal-buttons button:hover {
          background-color: navy;
        }
      `}</style>
    </>
  );
}
