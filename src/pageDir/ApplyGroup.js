import styles from '../cssDir/applyGroup.module.css';
import GroupBox from '../components/GroupBox';
import { useState, useEffect } from "react";
import axios from "axios";

const ApplyGroup = (props) => {
    const date = ['2023.08.28','2023.08.29','2023.08.30','2023.08.31','2023.09.01']
    let [groups, setGroups] = useState([])

    const getCurrentHeadcount = () =>{
        axios.get('http://210.123.135.176:5555/index/count/bf_group')
        .then((response) => {
          console.log(response)
            if (response.status === 200) {
                console.log('인원 갱신 성공')
                let groupArr = Object.entries(response.data.count_list);
                setGroups(groupArr)
                //console.log(response.data.count_list)
            } else {
                console.log('갱신 실패')
            }
        })
        .catch(error => {
            console.error(error)
            console.log('갱신 실패')
        });
    }
    useEffect(() => {getCurrentHeadcount()},[])
    // const getNumOfApply = setInterval(() => {
    //     setGroupCurrentHeadcount()
    // }, 10000);

    return(
        <div className={styles.page}>
            <div className={styles.applyGroupPage}>
                <div className={styles.applyWrap}>
                    <div className={styles.applyBox}>
                        <h1 className={styles.applyTitle}>블랙프라이데이 그룹 신청</h1>
                        <ul className={styles.groupList}>
                            {groups&&Array.isArray(groups)&&groups.map((item,i) => (
                                <li key={i} className={styles.groupListItem}>
                                    <GroupBox date={date[i]} group={item}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ApplyGroup;