import BottomHeader from "../../components/header/BottomHeader";
import MidleHeader from "../../components/header/MidleHeader";
import TopHeader from "../../components/header/TopHeader";

export default function Header() {
  return (
    <header id="header">
      <TopHeader />
      <MidleHeader />
      <BottomHeader />
    </header>
  );
}
