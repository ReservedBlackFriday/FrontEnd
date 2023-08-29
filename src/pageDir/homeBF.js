import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SmallItemCard from "../components/SmallItemCard";
import style from "../cssDir/homeBF.module.css";
import axios from "axios";
import BFEventBanner from "../components/BFEventBanner";
import BFProductDetail from "../components/BFProductDetail";
import { Link, useNavigate } from "react-router-dom";

const HomeBF = (props) => {
  const getListURL = "http://210.123.135.176:5555/product/black_friday/list";
  const [productList, setProductList] = useState();

  const movePage = useNavigate();

  useEffect(() => {
    axios
      .get(getListURL)
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response.data.product_list);
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
          <div className={style.productListContainer}>
            {productList.map((product, idx) => {
              return (
                <div
                  onClick={() => {
                    movePage(`productDetail/${product._id}`);
                  }}
                >
                  <SmallItemCard
                    productName={product.productId.name}
                    productPrice={product.productId.price}
                    key={idx}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeBF;
