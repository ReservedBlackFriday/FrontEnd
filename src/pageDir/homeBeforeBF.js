import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import SmallItemCard from "../components/SmallItemCard";
import style from "../cssDir/homeBeforeBF.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeBeforeBF = (props) => {
  const movePage = useNavigate();
  let [count1, setCount1] = useState("블랙프라이데이 구매 날짜 신청하러 가기")
  let [count2, setCount2] = useState("")
  let [count3, setCount3] = useState(false)

  const goLogin = () =>{
    movePage("/login");
  }
  const goApplyGroup = () =>{
    movePage("/applyGroup")
  }
  const getToken = () =>{
    const userId = sessionStorage.getItem("id");
    if(userId === null){
      alert("로그인이 필요합니다.")
      setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
      setCount2("")
      setCount3(false)
      goLogin()
      return
    }
    console.log(userId)
    axios.get(`http://munis.ddns.net:8080/waiting/finish/${userId}`)
    .then((response) => {
      // console.log(response)
        if (response.status === 200) {
          const token = response.data
          const data = {
            'email' : userId,
            'encryptedEmail' : token
          };
          const config = {"Content-Type": 'application/json'};
          axios.post("http://210.123.135.176:5555/waiting", data, config)
          .then((response) =>{
            if(response.status === 200){
              goApplyGroup()
            }
            else{
              alert('잘못된 접근입니다.')
              setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
              setCount2("")
              setCount3(false)
            }
          })
          .catch(error =>{
            console.error(error)
            setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
            setCount2("")
            setCount3(false)
          })
        } else {
          console.log('no token')
          setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
          setCount2("")
          setCount3(false)
        }
    })
    .catch(error => {
        console.error(error)
        setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
        setCount2("")
        setCount3(false)
    });
  }
  const count = () =>{
    setCount2("*")
    if(count2.length > 0){
      console.log(count2.length)
      setCount2('')
    }
    const userId = sessionStorage.getItem("id");
    if(userId === null){
      alert("로그인이 필요합니다.")
      setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
      setCount2("")
      setCount3(false)
      goLogin()
      return
    }
    axios.get(`http://munis.ddns.net:8080/waiting/${userId}`)
    .then((response) => {
      // console.log(response)
        if (response.status === 200) {
            if(response.data.front === -1){
              alert('대기열 정보가 없습니다.')
              setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
              setCount2("")
              setCount3(false)
            }
            if(response.data.front === 0){
              console.log("대기완료")
              getToken()
            }
            else{
              console.log("앞의 인원" + response.data.front)
              console.log("뒤의 인원" + response.data.back)
              setCount1("사용자 앞에 " + response.data.front + "명, 뒤에 " + response.data.back + "명의 대기자가 있습니다.")
              setTimeout(count, 1000);
              setCount2('')
            }
        } else {
          console.log("대기열 확인 실패")
          setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
          setCount2("")
          setCount3(false)
        }
    })
    .catch(error => {
        console.error(error)
    });
  }
  const tryApply = () => {
    if(count3){
      return
    }
    const userId = sessionStorage.getItem("id");
    if(userId === null){
      alert("로그인이 필요합니다.")
      setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
      setCount2("")
      setCount3(false)
      goLogin()
      return
    }
    const data = {
      'username' : userId,
    };
    const config = {
      "Content-Type": 'application/json',
      // "Access-Control-Allow-Origin": 'http://localhost:3000/',
      // "Access-Control-Allow-Credentials":"true",
    };
    axios.post('http://munis.ddns.net:8080/waiting', data, config)
    .then((response) => {
      // console.log(response)
        if (response.status === 200) {
          console.log('대기열 진입')
          //console.log(response)
            if(response.data === true){
              console.log('카운트 시작')
              count()
              setCount3(true)
            }
        } else {
          console.log("대기열 진입 실패")
          setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
          setCount2("")
          setCount3(false)
        }
    })
    .catch(error => {
        console.error(error)
        setCount1("블랙프라이데이 구매 날짜 신청하러 가기")
        setCount2("")
    });
  }
  return (
    <>
      <div className={style.entireContainer}>
        <button className={style.bfApplyBtn} onClick={tryApply}>{count2 +" " + count1+" " + count2}</button>
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
