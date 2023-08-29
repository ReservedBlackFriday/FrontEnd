import styles from '../cssDir/login.module.css';
const Login = (props) =>{
    return(
        <div className={styles.page}>
            <div className={styles.loginPage}>
                <div className={styles.loginWrap}>
                    <div className={styles.loginBox}>
                        <h1 className={styles.loginHeader}>LogIn</h1>
                        <div className={styles.loginInputForm}>
                            <form name='login_form' id='login_form' method='post'>
                                <div className={styles.loginSector}>
                                    <input type='text' className={styles.loginInput} name='id'></input>
                                    <span className={styles.loginPlaceholder}>ID</span>
                                </div>
                                <div className={styles.loginSector}>
                                    <input type='password' className={styles.loginInput} name='password'></input>
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
            </div>
        </div>
    )
}
export default Login;