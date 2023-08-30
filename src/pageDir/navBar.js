import { useNavigate, Link } from "react-router-dom";
import styles from "../cssDir/navBar.module.css";
import noMessage from "../imgs/noMessage.png";
import noMessageHover from "../imgs/noMessage_hover.png";
import Message from "../imgs/message.png";
import MessageHover from "../imgs/message_hover.png";
import message from "../imgs/message.png";
import React, { useEffect, useState } from "react";

const NavBar = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const movePage = useNavigate();

  useEffect(() => {
    setIsLogin(props.isLogin);
  }, [props.isLogin]);

  const goHome = () => {
    movePage("/");
  };
  const goMessage = () => {
    movePage("/message");
  };
  const goLogin = () => {
    if (isLogin) {
      sessionStorage.removeItem("id");
      alert("로그아웃 되었습니다.");
      props.setIsLogin(false);
    }
    movePage("/login");
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.logoDiv} onClick={goHome}>
        <h1 className={styles.logo}>logo</h1>
      </div>
      <div className={styles.leftDiv}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <div className={styles.navListItemText}>
              <form name="search" id="search_form" method="get">
                <input
                  type="text"
                  minLength="1"
                  id="searchInput"
                  className={styles.searchInput}
                  placeholder="검색"
                  name="search"
                ></input>
              </form>
            </div>
            <button
              type="submit"
              form="search_form"
              id="searchBtn"
              className={styles.searchInputBtn}
            ></button>
          </li>
        </ul>
      </div>

      <div></div>
      <div className={styles.rightDiv}>
        <ul className={styles.navList}>
          {isLogin ? (
            <li className={styles.navListItem}>
              <div className={styles.navListItemText}>
                {messageList &&
                Array.isArray(messageList) &&
                messageList.length > 0 ? (
                  <div className={styles.imgBox} onClick={goMessage}>
                    <img
                      src={Message}
                      width={60}
                      height={60}
                      className={styles.noMessageImg}
                    ></img>
                    <img
                      src={MessageHover}
                      width={60}
                      height={60}
                      className={styles.noMessageHoverImg}
                    ></img>
                  </div>
                ) : (
                  <div className={styles.imgBox} onClick={goMessage}>
                    <img
                      src={noMessage}
                      width={60}
                      height={60}
                      className={styles.noMessageImg}
                    ></img>
                    <img
                      src={noMessageHover}
                      width={60}
                      height={60}
                      className={styles.noMessageHoverImg}
                    ></img>
                  </div>
                )}
              </div>
            </li>
          ) : (
            <></>
          )}
          {isLogin ? (
            <li className={styles.navListItem}>
              <div className={styles.navListItemText}>
                <span>myPage</span>
              </div>
            </li>
          ) : (
            <></>
          )}
          <li className={styles.navListItem}>
            <div
              className={`${styles.navListItemText} ${styles.lastNavListItemText}`}
              onClick={goLogin}
            >
              {isLogin ? <span>logout</span> : <span>login</span>}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
