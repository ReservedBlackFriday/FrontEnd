import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SmallItemCard from "../components/SmallItemCard";
import style from "../cssDir/homeBF.module.css";
import axios from "axios";
import BFEventBanner from "../components/BFEventBanner";

const HomeBF = (props) => {
  const getListURL = "http://210.123.135.176:5555/product/black_friday/list";
  const [productList, setProductList] = useState();

  useEffect(() => {
    axios
      .get(getListURL)
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response);
        setProductList(response.data.product_list);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={style.entireContainer}>
        <BFEventBanner />
        {!productList ? null : (
          <div>
            {productList.map((product, idx) => {
              <SmallItemCard
                productName={product.productId.name}
                productPrice={product.productId.price}
              />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeBF;
