import card from "../../assets/images/card.png";

export default function Manazment() {
  return (
    <div className="manazment">
      <div className="manazment-left"></div>
      <div className="manazment-right">
        <div className="manazment-right-header">
          <img src={card} alt="" />
          <div className="manazment-right-header-wrapper">
            <h4 className="manazment-right-header-title">
              Earn 5% back in reward dollars when you open an eMakity Credit
              Card.
            </h4>
            <a href="/">Terms of Use</a> & <a href="/">Privacy Policy</a>
          </div>
        </div>
        <div className="manazment-right-body">
          <div className="manazment-right-body-cupon-form">
            <p>Apply a Promotion Code</p>
            <input type="text" />
            <button className="btn btn-theme">apply</button>
          </div>
          <div className="manazment-right-body-moany">
            <div className="manazment-right-body-moany-item">
              <p>Total Items</p>
              <p>$29.99</p>
            </div>
            <div className="manazment-right-body-moany-item">
              <p>Shipping & Handling </p>
              <p>$5.00</p>
            </div>
            <div className="manazment-right-body-moany-item">
              <p>Tax:</p>
              <p>$34.99</p>
            </div>
            <div className="manazment-right-body-moany-item-total">
              <p>Estimated Order Total:</p>
              <p>$34.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
