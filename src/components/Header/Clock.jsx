import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import TimeContext from "../../context/TimeProvider";

export function RealTimeClock() {
  const timer = useContext(TimeContext).timer;
  function rotation() {
    let h = timer.getHours() * 60 * 60;
    let m = timer.getMinutes() * 60;
    let s = timer.getSeconds();
    let total = h + m + s;
    return (360 / 86400) * total + 90;
  }
  function stringfyTime(number) {
    const str = "" + number;
    const pad = "00";
    return pad.substring(0, pad.length - str.length) + str;
  }
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <div
            className="day-night-spinner"
            style={{ transform: `rotate(${rotation()}deg)` }}
          >
            <div className="day">
              <FaSun />
            </div>
            <div className="night">
              <FaMoon />
            </div>
          </div>
          <div className="clock-pointer"></div>
          <div className="digital-clock">
            <span>{stringfyTime(timer.getHours())}</span>
            <span
              className={timer.getSeconds() % 2 === 0 ? "transparent" : " "}
            >
              &nbsp;:&nbsp;
            </span>
            <span>{stringfyTime(timer.getMinutes())}</span>
          </div>
        </div>
      </div>
    </>
  );
}
