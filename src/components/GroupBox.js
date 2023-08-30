import styles from '../cssDir/groupBox.module.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GroupBox = (props) =>{
    const movePage = useNavigate();

    const goLogin =() => {
        movePage("/login")
    }
    const goHome = () =>{
        movePage("/beforeBF")
    }

    const applyGroup = (e) => {
        e.preventDefault()
        const userId = sessionStorage.getItem("id");
        if(userId === null){
            alert('로그인 후 신청 가능합니다.')
            goLogin()
            return
        }
        const data = {
            'email' : userId,
            'bf_group': props.group[0]
        }
        console.log(userId)
        console.log(props.group[0])
        const config = {"Content-Type": 'application/json'};
        axios.patch('http://210.123.135.176:5555/users/bf_group', data, config)
        .then((response) => {
          console.log(response)
            if (response.status === 200) {
                console.log('신청 성공')
                alert(props.group[0] + '그룹에\n신청 성공')
                goHome()
            } else {
                console.log('신청 실패')
                alert('신청 실패')
            }
        })
        .catch(error => {
            console.error(error)
            console.log('신청 실패')
            alert('신청 실패')
        });
    }

    return(
        <div className={styles.box}>
            <div className={styles.groupData}>
                <div className={styles.groupTitle}>
                    <h1>{props.group[0] + ' 그룹'}</h1>
                </div>
                <div className={styles.groupDate}>
                    <div>구매 가능 날짜</div>
                    <div>{props.date}</div>
                </div>
                
            </div>
            <div className={styles.applyBox}>
                <div className={styles.currentHeadcount}>
                    {'현재 인원 수 : ' + props.group[1]}
                </div>
                <button className={styles.applyGroupBtn} onClick={applyGroup}>{props.group[0] + '그룹'}<br/>{'신청'}</button>
            </div>
        </div>
    )
}
export default GroupBox;