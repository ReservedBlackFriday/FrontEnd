import styles from '../cssDir/applyGroup.module.css';
import GroupBox from '../components/GroupBox';
import { useState, useEffect } from "react";

const ApplyGroup = (props) => {
    let [groups, setGroups] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G'])

    return(
        <div className={styles.page}>
            <div className={styles.applyGroupPage}>
                <div className={styles.applyWrap}>
                    <div className={styles.applyBox}>
                        <h1 className={styles.applyTitle}>블랙프라이데이 그룹 신청</h1>
                        <ul className={styles.groupList}>
                            {groups&&Array.isArray(groups)&&groups.map((item,i) => (
                                <li key={i} className={styles.groupListItem}>
                                    <GroupBox group={item}/>
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