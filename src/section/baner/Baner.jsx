import NavMenu from "../../components/nav/NavMenu";
import Search from "../../components/search/Search";
import BanerSlider from "../../components/slider/BanerSlider";

export default function Baner() {
  return (
    <div id="baner">
      <NavMenu />

      <div className="container">
        <BanerSlider />
        <Search />
      </div>
    </div>
  );
}
