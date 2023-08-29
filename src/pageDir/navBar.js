import {useNavigate, Link} from 'react-router-dom'
import styles from '../cssDir/navBar.module.css';
import noMessage from '../imgs/noMessage.png';
import noMessageHover from '../imgs/noMessage_hover.png';
import message from '../imgs/message.png';
import React, {useState} from 'react';

const NavBar = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    const movePage = useNavigate()

    const goHome = () => {
        movePage('/')
    }
    return(
        <div className={styles.navBar}>
            <div className={styles.logoDiv} onClick={goHome}>
                <h1 className={styles.logo}>logo</h1>
            </div>
            <div className={styles.leftDiv}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link className={styles.navListItemText}>
                            <form name='search' id='search_form' method='get'>
                                <input type='text' minLength="1" id='searchInput' className={styles.searchInput}
                                    placeholder='검색' name='search'></input>
                            </form>
                        </Link>
                        <button type='submit' form='search_form' id='searchBtn'
                            className={styles.searchInputBtn}></button>
                    </li>
                </ul>
            </div>
            
            <div>
                
            </div>
            <div className={styles.rightDiv}>
                <ul className={styles.navList}>
                    {isLogin ? <li className={styles.navListItem}>
                        <Link className={styles.navListItemText}>
                            <div className={styles.imgBox}>
                                <img src={noMessage} width={60} height={80} className={styles.noMessageImg}></img>
                                <img src={noMessageHover} width={60} height={80} className={styles.noMessageHoverImg}></img>
                            </div>
                        </Link>
                    </li> : <></>}
                    {/* <li className={styles.navListItem}>
                        <a className={styles.navListItemText}>
                            <div className={styles.imgBox}>
                                <img src={noMessage} width={80} height={80} className={styles.noMessageImg}></img>
                                <img src={noMessageHover} width={80} height={80} className={styles.noMessageHoverImg}></img>
                            </div>
                        </a>
                    </li> */}
                    {isLogin ? <li className={styles.navListItem}>
                        <Link className={styles.navListItemText}>
                            <span>myPage</span>
                        </Link>
                    </li>:<></>}
                    {/* <li className={styles.navListItem}>
                        <a className={styles.navListItemText}>
                            <span>myPage</span>
                        </a>
                    </li> */}
                    <li className={styles.navListItem}>
                        <Link className={`${styles.navListItemText} ${styles.lastNavListItemText}`}>
                            {isLogin ? <span>logout</span> : <span>login</span>}
                        </Link>
                    </li>
                    {/* <li className={styles.navListItem}>
                        <a className={styles.navListItemText}>
                            <span>logout</span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
export default NavBar;