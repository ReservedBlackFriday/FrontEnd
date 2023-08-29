import styles from '../cssDir/groupBox.module.css';
import { useState, useEffect } from "react";

const GroupBox = (props) =>{
    let [groupDate, setGroupDate] = useState('2023.08.30 ~ 2023.08.30');
    let [groupCurrentHeadcount, setGroupCurrentHeadcount] = useState(0);
    return(
        <div className={styles.box}>
            <div className={styles.groupData}>
                <div className={styles.groupTitle}>
                    <h1>{props.group + ' 그룹'}</h1>
                </div>
                <div className={styles.groupDate}>
                    <div>구매 가능 기간</div>
                    <div>{groupDate}</div>
                </div>
                
            </div>
            <div className={styles.applyBox}>
                <div className={styles.currentHeadcount}>
                    {'현재 인원 수 : ' + groupCurrentHeadcount}
                </div>
                <button className={styles.applyGroupBtn}>{props.group + '그룹'}<br/>{'신청'}</button>
            </div>
        </div>
    )
}
export default GroupBox;