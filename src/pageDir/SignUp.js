import styles from "../cssDir/login.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const movePage = useNavigate();

  const changeId = (e) => {
    const value = e.target.value;
    setId(value);
  };
  const changePw = (e) => {
    const value = e.target.value;
    setPw(value);
  };
  const goLogin = () => {
    movePage("/login");
  };
  const signup = (e) => {
      e.preventDefault()
      setId()
      if (id === '') {
          alert('아이디를 입력해 주세요.')
          return false
      }
      if (pw === '') {
          alert('비밀번호를 입력해 주세요.')
          return false
      }
    const data = {
        'email' : id,
        'password' : pw
    };
    const config = {"Content-Type": 'application/json'};
      axios.post('http://210.123.135.176:5555/users/signup', data, config)
      .then((response) => {
        console.log(response)
          if (response.status === 201) {
              console.log('회원가입 성공')
              alert('회원가입 성공')
              goLogin()
          } else {
              console.log('회원가입 실패')
          }
      })
      .catch(error => {
          console.error(error)
          console.log('회원가입 실패')
          alert(error.response.data.message)
      });
  }

  return (
    <div className={styles.page}>
      <div className={styles.loginPage}>
        <div className={styles.loginWrap}>
          <div className={styles.loginBox}>
            <h1 className={styles.loginHeader}>SignUp</h1>
            <div className={styles.loginInputForm}>
              <form name="login_form" id="login_form" method="post">
                <div className={styles.loginSector}>
                  <input
                    type="text"
                    className={styles.loginInput}
                    name="id"
                    onChange={changeId}
                  ></input>
                  <span className={styles.loginPlaceholder}>ID</span>
                </div>
                <div className={styles.loginSector}>
                  <input
                    type="password"
                    className={styles.loginInput}
                    name="password"
                    onChange={changePw}
                  ></input>
                  <span className={styles.loginPlaceholder}>Password</span>
                </div>
                <div className={styles.loginBtnWrap}>
                  <button className={styles.doSignUpBtn} onClick={signup}>
                    SignUp
                  </button>
                </div>
              </form>
              <div className={styles.loginBtnWrap}>
                <button className={styles.cancleBtn}>cancle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
