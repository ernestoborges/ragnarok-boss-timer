import { TimerList } from "../TimerList/TimerList"
import {useState} from "react";

export function TimerTab({ selectedTab }) {

  const [listStyle, setListStyle] = useState("gallery")

  function handleListStyle(type){
    if(type !== listStyle){
      setListStyle(type)
    }
  }

  return (
    <section className={`timers-tab ${selectedTab !== "timers" ? "hide-tab" : ""}`}>
      <button onClick={()=>handleListStyle("gallery")}>gallery</button>
      <button onClick={()=>handleListStyle("list")}>list</button>
      <TimerList listStyle={listStyle} />
    </section>
  );
}
