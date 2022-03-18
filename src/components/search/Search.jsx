import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div className="search">
      <div className="search-group">
        <input
          placeholder="What are you searching for?"
          type="text"
          className="search-input"
        />
        <div className=" btn-theme search-icon">
          <BsSearch />
        </div>
        <button className="btn btn-theme search-btn">Shop now</button>
      </div>
    </div>
  );
}
