import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomHeader from "../components/header/BottomHeader";
import MidleHeader from "../components/header/MidleHeader";
import Separator from "../components/separator/Separator";
import StoreDetails from "../components/store/StoreDetails";
import Baner from "../section/baner/Baner";
import Catagori from "../section/catagori/Catagori";
import AllProduct from "../section/Product/AllProduct";
import Values from "../Values";

export default function Store() {
  const [catagori, setCatagori] = useState([]);
  const [products, setProducts] = useState([]);
  const [storeData, setStoreData] = useState("");
  const [catId, setCatId] = useState("");

  const catIdChangeHandler = (data) => {
    if (data) {
      setCatId(data.id);
    }
  };
  const allCatagoriChangeHandler = () => {
    setCatId("");
  };

  const param = useParams();
  const storeURL = `${Values.BASE_URL}market/${param.id}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(storeURL, {
        headers: {
          "Api-Access-Token":
            "743b1e57df96fc47abd528c7f2b34242edd81c23dbe252928954b8ddc169ca27",
          "Content-Type": "application/json",
        },
      })
      .then((d) => {
        //setData(d.data.data);
        setCatagori(d.data.data.categories);
        setProducts(d.data.data.data.products);
        setStoreData(d.data.data.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, [param]);

  return (
    <div id="store">
      <MidleHeader />
      <BottomHeader />
      <Baner />
      <StoreDetails storeData={storeData} />
      <Catagori
        allCatagori={allCatagoriChangeHandler}
        catId={catId}
        handler={catIdChangeHandler}
        catagori={catagori}
      />
      <Separator />
      {/* <WeekProduct data={products} /> */}

      <AllProduct catId={catId} products={products} />
    </div>
  );
}
