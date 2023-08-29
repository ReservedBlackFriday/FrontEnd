import { useEffect, useState } from "react";
import style from "../cssDir/BFProductDetail.module.css";
import image from "../assets/shoes.jpeg";
import axios from "axios";
import { useParams } from "react-router-dom";

const BFProductDetail = () => {
  const id = useParams().id;
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://210.123.135.176:5555/product/black_friday?productId=${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={style.popUpBackground}>
        <div className={style.popUpContainer}>
          <div className={style.imageContainer}>
            <img src={image} alt="shoes" />
          </div>
          {product ? (
            <div className={style.productInfoContainer}>
              <div className={style.name}>{product.product.productId.name}</div>
              <div className={style.amount}>
                {product.product.amount}개 남았습니다.
              </div>
              <div className={style.description}>
                {product.product.productId.description}
              </div>
              <div className={style.price}>
                <span className={style.prevPrice}>
                  {Math.floor(product.product.productId.price)}₩
                </span>
                <span className={style.discountPrice}>
                  {Math.floor(product.product.discount_price)}₩
                </span>
              </div>
              <span className={style.discountRate}>
                {Math.floor(product.product.discount_rate)}% 할인
              </span>
              <div className={style.payment}>결제</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default BFProductDetail;
