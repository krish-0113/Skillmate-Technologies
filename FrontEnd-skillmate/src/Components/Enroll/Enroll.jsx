// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Enroll.css';
import qrCode from '../../assets/qr_code.png'; // Adjust the path to your QR code image

const Enroll = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQRCode(true);
  };

  return (
    <div className="enroll-container">
      <div className="info-section">
        <h1>Payment for Training Course</h1>
        
        <div className="payment-info">
          <p>Dear Participant,</p>
          <p>You are paying the training fee towards Training Program conducted by Skillmate, an initiative of Tech for Educators.</p>
          <p>All the best,</p>
          <p>Team - Skillmate, an initiative of Tech for Educators</p>
          <p><strong>Contact Us:</strong></p>
          <p>gajanan@Skillmate.com</p>
          <p>08305747570</p>
          <p><strong>Terms & Conditions:</strong></p>
          <p><strong>Batch Transfer Policy</strong></p>
          <p>In case you wish to transfer your admission/enrolment to other batch, you will be required to pay the Transfer Fee of Rs.1,500</p>
          <p><strong>Cancellation of Admission</strong></p>
          <p>Cancellation of admission can be done within 24 hours of making the payment. Fee under such circumstances will be refunded by deducting Rs.300/- as processing fee. No refund will be done if you fail to inform about cancellation within the stipulated time.</p>
          <p><strong>Batch Start date</strong></p>
          <p>Sometimes batch start date may get postponed by a couple of days due to unavoidable circumstances. We will keep you posted on that.</p>
          <p>You agree to share information entered on this page with Tech for Educators (owner of this page) and Razorpay, adhering to applicable laws.</p>
          <p>Merchant’s business policies</p>
        </div>
      </div>

      <div className="form-section">
        <h1>Enroll Now</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Gmail ID for content access:
            <input type="email" name="gmail" pattern=".+@gmail\.com" required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Amount:
            <input type="text" name="amount" value="₹ 9,322.00" readOnly />
          </label>
          <button type="submit" className="pay-button">Pay ₹ 9,322.00</button>
        </form>
        {showQRCode && (
          <div className="qr-code">
            <h2>Scan the QR code to pay</h2>
            <img src={qrCode} alt="QR Code for payment" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Enroll;
