import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import logo from "../../../src/assets/images/logo.png";
import HeaderBtn from "../button/HeaderBtn";
export default function () {
  const [searchVal, setSearchVal] = useState("");

  const chnageHandler = (e) => {
    setSearchVal(e.target.value);
  };

  const serchRef = useRef();

  const onenHandler = () => {
    serchRef.current.classList.add("open");
  };
  const closeHandler = () => {
    serchRef.current.classList.remove("open");
  };
  return (
    <div className="bottom-header">
      <div className="container">
        <div className="bottom-header-wrapper">
          <div className="botom-header left">
            <div className="bottom-header-brand">
              <a href="/">
                <img src={logo} alt="logo" className="logo" />
              </a>
            </div>
          </div>
          <div className="bottom-header middle">
            <div
              className="bottom-header-search-btn-open"
              onClick={onenHandler}
            >
              <BsSearch />
            </div>
            <div ref={serchRef} className="bottom-header-search">
              <input
                onChange={(e) => chnageHandler(e)}
                type="text"
                name="search"
                value={searchVal}
                className="bottom-header-search-input"
                placeholder="Set your Address to show the Stores Delivering in your Area"
              />
              <button className="bottom-header-search-btn">
                <GoLocation />
              </button>
              <div
                onClick={closeHandler}
                className="bottom-header-search-btn-close"
              >
                <IoMdClose />
              </div>
            </div>
          </div>
          <div className="botom-header right">
            <HeaderBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
