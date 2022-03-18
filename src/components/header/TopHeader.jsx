import { useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";

export default function TopHeader({ data, handler, country }) {
  const [emoji, setImoji] = useState("");

  useEffect(() => {
    data &&
      data.forEach((d) => {
        if (country === d.code) {
          setImoji(d.emoji);
        }
      });
  });
  return (
    <div className="top-header ">
      <div className="container">
        <div className="top-header-wrapper">
          <div className="top-header-left">
            {/* <div className="top-header-item">
              <div className="icon ">
                <GoLocation size={28} />
              </div>
              <p className="text">1326 Central Ave Queens, NY</p>
            </div>
            <div className="top-header-item">
              <div className="icon ">
                <BsFillPhoneVibrateFill size={28} />
              </div>
              <p className="text">1326 Central Ave Queens, NY</p>
            </div> */}
          </div>
          <div className="top-header-right ">
            <div className="top-header-item">
              <div className="image">{emoji}</div>
              <select onChange={(e) => handler(e)} name="country" id="">
                {data &&
                  data.map((d, i) => (
                    <option
                      key={i}
                      value={d.code}
                      className="text "
                      selected={d.code === country && "selected"}
                    >
                      {d.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="top-header-item">
              <div className="icon ">
                <MdLanguage size={28} />
              </div>
              <select name="languase" id="">
                <option value="1" className="text ">
                  English
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
