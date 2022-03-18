export default function BottomFooter() {
  const date = new Date();
  return (
    <div className="bottom-footer">
      <div className="container">
        <p className="bottom-footer-text">
          Copyright {date.getFullYear()} <a href="/">eMakity LLC</a> | All right
          resevred
        </p>
      </div>
    </div>
  );
}
