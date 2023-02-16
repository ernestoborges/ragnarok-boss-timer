import { TimerList } from "../TimerList/TimerList"
import { useState } from "react";
import "./styles.css"
import {IoGridOutline, IoListOutline} from "react-icons/io5"


export function TimerTab({ selectedTab }) {

  const [listStyle, setListStyle] = useState("gallery")

  function handleListStyle(type) {
    if (type !== listStyle) {
      setListStyle(type)
    }
  }

  return (
    <section className={`timers-tab ${selectedTab !== "timers" ? "hide-tab" : ""}`}>
      <div className="list-style-buttons-container">
        <button className={listStyle === "gallery" ? "selected-style-btn" : ""} onClick={() => handleListStyle("gallery")}>
          <IoGridOutline />
        </button>
        <button className={listStyle === "list" ? "selected-style-btn" : ""}  onClick={() => handleListStyle("list")}>
          <IoListOutline />
        </button>
      </div>
      <TimerList listStyle={listStyle} />
    </section>
  );
}
