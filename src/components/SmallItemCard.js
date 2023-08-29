import image from "../assets/shoes.jpeg";
import style from "../cssDir/SmallItemCard.module.css";
const SmallItemCard = ({ productName, productPrice }) => {
  return (
    <div className={style.card}>
      <img src={image} alt="shoes" className={style.image} />
      {productName ? <p>{productName}</p> : <p>아디다스 신발</p>}
      {productPrice ? (
        <p>
          <span className={style.price}>14,500</span>원~
        </p>
      ) : (
        <p>
          <span className={style.price}>{productPrice}</span>원~
        </p>
      )}
    </div>
  );
};

export default SmallItemCard;
