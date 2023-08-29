import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SmallItemCard from "../components/SmallItemCard";
import style from "../cssDir/homeBeforeBF.module.css";
const HomeBeforeBF = (props) => {
  return (
    <>
      <div className={style.entireContainer}>
        <div>
          <h1>오늘의 상품</h1>
        </div>

        <div className={style.cardContainer}>
          <SmallItemCard />
          <SmallItemCard />
          <SmallItemCard />
          <SmallItemCard />
          <SmallItemCard />
          <SmallItemCard />
        </div>

        {/* 메인페이지 슬라이드 */}
        <div>
          <h1>추천상품</h1>
        </div>
        {/* 추천상품 */}
        <div className={style.cardContainer}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <div className={style.cardContainer}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </>
  );
};

export default HomeBeforeBF;
