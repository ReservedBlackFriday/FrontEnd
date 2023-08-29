import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SmallItemCard from "../components/SmallItemCard";
import style from "../cssDir/homeBeforeBF.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeBeforeBF = (props) => {
  const movePage = useNavigate();
  const goLogin = () =>{
    movePage("/login");
  }
  const tryApply = () => {
    const userId = sessionStorage.getItem("id");
    if(userId === null){
      alert("로그인이 필요합니다.")
      goLogin()
      return
    }
    const data = {
      'username' : userId,
    };
    const config = {
      "Content-Type": 'application/json',
      "Access-Control-Allow-Origin": 'http://localhost:3000/',
      "Access-Control-Allow-Credentials":"true",
    };
    axios.post('http://munis.ddns.net:8080/waiting/', data, config)
    .then((response) => {
      console.log(response)
        // if (response.status === 200) {
        //     console.log('로그인 성공')
        //     sessionStorage.setItem("id", id);
        //     props.setIsLogin(true)
        //     goHome()
        // } else {
        //     console.log('로그인 실패')
        // }
    })
    .catch(error => {
        console.error(error)
    });
  }
  return (
    <>
      <div className={style.entireContainer}>
        <button className={style.bfApplyBtn} onClick={tryApply}>블랙프라이데이 구매 날짜 신청하러 가기</button>
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
