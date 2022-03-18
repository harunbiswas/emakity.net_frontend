import { useEffect, useState } from "react";
import cat from "../../assets/images/catagiri/cat-1.png";

export default function Cat({ data, handler, catId }) {
  const [title, setTitle] = useState("Vegetable");
  const [img, setImg] = useState(cat);

  useEffect(() => {
    if (data) {
      setTitle(data.name.en);
      if (data && data.media[1]) {
        setImg(data.media[1].url);
      }
    }
  }, [data]);

  return (
    <div className="cat-wrapper">
      <div
        className={`cat ${catId && catId === data.id && "active"}`}
        onClick={() => handler(data)}
      >
        <img src={img} alt="catagori" />
        <strong className="cat-title">{title}</strong>
      </div>
    </div>
  );
}
