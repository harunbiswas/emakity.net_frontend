import { BsBagFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderBtn() {
  return (
    <div className="bottom-header-btn-wrapper">
      <Link to="/card" className="btn btn-grd bottom-header-btn card">
        <BsBagFill />
      </Link>
      <button className="btn btn-grd bottom-header-btn sing">
        <FaSignOutAlt /> sign in
      </button>
    </div>
  );
}
