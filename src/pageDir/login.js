import styles from '../cssDir/login.module.css'
import axios from "axios"
import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'

const Login = (props) =>{
    let [id, setId] = useState('')
    let [pw, setPw] = useState('')
    const movePage = useNavigate()

    const changeId = (e) =>{
        const value = e.target.value
        setId(value)
    }
    const changePw = (e) => {
        const value = e.target.value
        setPw(value)
    }
    const goHome = () =>{
        movePage('/');
        //window.location.reload();
    }
    const login = (e) =>{
        e.preventDefault()
        props.setIsLogin(true)
        goHome()
    }
    // const login = (e) => {
    //     e.preventDefault()
    //     setId()
    //     if (id === '') {
    //         alert('아이디를 입력해 주세요.')
    //         return false
    //     }
    //     if (pw === '') {
    //         alert('비밀번호를 입력해 주세요.')
    //         return false
    //     }
    //     let formData = new FormData()
    //     formData.append("id", id)
    //     formData.append("password", pw)
    //     axios.post('/login', formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     })
    //     .then((response) => {
    //         if (response.status === 200) {
    //             console.log('로그인 성공')
    //             props.setIsLogin("data from child")
    //             goHome()
    //         } else {
    //             console.log('로그인 실패')
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         console.log('로그인 실패')
    //         alert('로그인 실패\n이메일과 비밀번호를 확인해 주세요.')
    //     });
    // }

    return(
        <div className={styles.page}>
            <div className={styles.loginPage}>
                <div className={styles.loginWrap}>
                    <div className={styles.loginBox}>
                        <h1 className={styles.loginHeader}>LogIn</h1>
                        <div className={styles.loginInputForm}>
                            <form name='login_form' id='login_form' method='post'>
                                <div className={styles.loginSector}>
                                    <input type='text' className={styles.loginInput} name='id' onChange={changeId}></input>
                                    <span className={styles.loginPlaceholder}>ID</span>
                                </div>
                                <div className={styles.loginSector}>
                                    <input type='password' className={styles.loginInput} name='password' onChange={changePw}></input>
                                    <span className={styles.loginPlaceholder}>Password</span>
                                </div>
                                <div className={styles.loginBtnWrap}>
                                    <button className={styles.loginBtn} onClick={login}>SignIn</button>
                                    
                                </div>
                                
                            </form>
                            <div className={styles.loginBtnWrap}>
                                    <button className={styles.signUpBtn}>SignUp</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={styles.loginSector}>
                  <input
                    type="password"
                    className={styles.loginInput}
                    name="password"
                  ></input>
                  <span className={styles.loginPlaceholder}>Password</span>
                </div>
                <div className={styles.loginBtnWrap}>
                  <button className={styles.loginBtn}>SignIn</button>
                </div>
              </form>
              <div className={styles.loginBtnWrap}>
                <button className={styles.signUpBtn}>SignUp</button>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Login
