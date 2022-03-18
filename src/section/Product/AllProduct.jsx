import { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import Title from "../../components/title/Title";

export default function AllProduct({ products, catId }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (products && !catId) {
      setProduct(products);
    } else if (products && catId) {
      const productsArr = [];
      products.forEach((d) => {
        if (catId == d.category_id) {
          productsArr.push(d);
        }
      });
      setProduct(productsArr);
    }
  }, [catId, products]);

  return (
    <section id="all-product">
      <div className="container">
        <Title name="See All Products at Family Saving Grocery" />
        <div className="all-product-wrapper">
          {product &&
            product.map((data, i) => <Product key={i} product={data} />)}
        </div>
      </div>
    </section>
  );
}
