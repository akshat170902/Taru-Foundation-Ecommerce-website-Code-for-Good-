import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>HELP</p>
          </div>
          <div className="list">
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation and Returns</li>
              <li>FAQ</li>
              <li>Report Infrigement</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>POLICY</p>
          </div>
          <div className="list">
            <ul>
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>SOCIAL</p>
          </div>
          <div className="list">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>TaruFoundation@gmail.com</p>
        <p>+91 987654321</p>
      </div>
    </div>
  );
}

export default Footer;
