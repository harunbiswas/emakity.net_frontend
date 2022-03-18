import { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import img from "../../assets/images/product/product-1.png";
export default function CardItem() {
  const [gty, setGty] = useState(1);

  const closeRef = useRef();

  const gtyTopHandler = () => {
    setGty(gty + 1);
  };
  const gtybottomHandler = () => {
    if (gty > 0) {
      setGty(gty - 1);
    }
  };

  const closeHandler = (e) => {
    closeRef.current.style.display = "none";
  };

  return (
    <div ref={closeRef} className="card-item">
      <div className="card-item-left">
        <div className="card-item-img">
          <img src={img} alt="" />
        </div>
        <div className="card-item-details">
          <h3 className="card-item-details-title">
            Yellow Box Nilla Wafer Cookies - 11oz
          </h3>
          <strong>Medium</strong>
          <span>SKU 257841</span>
        </div>
      </div>
      <div className="card-item-right">
        <div className="card-item-price">
          <span>Sale $18.99 </span>
          <p>
            reg. <del>$18.99</del>{" "}
          </p>
        </div>
        <div className="card-item-gty">
          {gty}
          <p onClick={gtyTopHandler} className="card-item-gty-top">
            <IoIosArrowDown />
          </p>
          <p onClick={gtybottomHandler} className="card-item-gty-bottom">
            <IoIosArrowUp />
          </p>
        </div>
        <div className="card-item-total-price">Sale $18.99</div>
      </div>
      <div onClick={closeHandler} className="card-item-close">
        <CgClose />
      </div>
    </div>
  );
}
