import image from "../assets/shoes.jpeg";
import style from "../cssDir/ItemCard.module.css";
const ItemCard = ({ itemName }) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt="sample" />
      <h3>
        나이키/뉴발란스/아디다스 성인&아동 남자 여자 스니커즈 런닝화 운동화
      </h3>
      <div className={style.expensive}>
        <h1 className={style.red}>30%</h1>
        <h1>35,700원~</h1>
        <h3 className={style.underLine}>51000</h3>
      </div>
      <div className={style.additionInfo}>
        <span>무료배송</span>
        <span>225개 구매</span>
      </div>
    </div>
  );
};

export default ItemCard;
