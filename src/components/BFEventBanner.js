import { useState } from "react";
import style from "../cssDir/BFEventBanner.module.css";
import { FcApproval } from "react-icons/fc";
import dayjs from "dayjs";

const BFEventBanner = () => {
  const dateList = ["8/30", "8/31", "9/1", "9/2", "9/3"];
  return (
    <div className={style.entireContainer}>
      <div className={style.title}>Black Friday</div>
      <div className={style.subTitle}>Day of B Team</div>
      <div className={style.dateContainer}>
        {dateList.map((date, idx) => {
          if (dayjs().format("M/DD") === date) {
            return (
              <div
                className={style.date}
                style={{ color: "green", fontSize: "2rem" }}
              >
                {date}
              </div>
            );
          } else {
            return <div className={style.date}>{date}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default BFEventBanner;
