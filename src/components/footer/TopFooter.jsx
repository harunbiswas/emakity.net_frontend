import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { MdOutlineMarkEmailRead, MdWrongLocation } from "react-icons/md";
import logo from "../../assets/images/logo-white.png";

export default function TopFooter() {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="top-footer-wrapper">
          <div className="top-footer-left">
            <div className="top-footer-brand">
              <a href="/" className="">
                <img src={logo} alt="" className="logo" />
              </a>
            </div>
            <div className="top-footer-description">
              <div className="top-footer-description-text">
                <p>
                  It is a long established fact that a reader will be distracted
                  laum is that it has a more-or-less normal distribution
                </p>
              </div>
              <ul className="top-footer-description-item-wrapper">
                <li className="top-footer-description-item">
                  <a
                    href="tel:+8801770201232"
                    className="top-footer-description-item-link"
                  >
                    <HiOutlinePhoneMissedCall />
                    134191373r9
                  </a>
                </li>
                <li className="top-footer-description-item">
                  <a
                    href="mailto:harunbiswasrubel@gmail.com"
                    className="top-footer-description-item-link"
                  >
                    <MdOutlineMarkEmailRead />
                    yourmaildw232@gmail.com
                  </a>
                </li>
                <li className="top-footer-description-item">
                  <MdWrongLocation />
                  Office Address of selected Country
                </li>
              </ul>
            </div>
          </div>
          <div className="top-footer-right">
            <div className="top-footer-right-item">
              <div className="top-footer-right-title">
                <h2>OUR COMPANY</h2>
              </div>
              <ul className="top-footer-right-body">
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Delivery Information
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Store Location
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Terms & Conditions
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Return Policy
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-footer-right-item">
              <div className="top-footer-right-title">
                <h2>MY ACCOUNT</h2>
              </div>
              <ul className="top-footer-right-body">
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Help & Faqs
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Orders & Returns
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Deliveries
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Refund & Returns
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Favoris Stores
                  </a>
                </li>
                <li className="top-footer-right-body-item">
                  <a href="/" className="top-footer-right-body-link">
                    Payment Types
                  </a>
                </li>
              </ul>
            </div>
            <div className="top-footer-right-item">
              <div className="top-footer-right-title">
                <h2>JOIN US</h2>
              </div>
              <div className="top-footer-right-input-group">
                <input type="text" placeholder="Enter you mail address" />
                <div className=""></div>
                <button type="button" className="btn btn-white footer-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
