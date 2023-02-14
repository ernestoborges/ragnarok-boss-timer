import { TimerList } from "../TimerList/TimerList"

export function TimerTab({ selectedTab }) {

  return (
    <section className={`timers-tab ${selectedTab !== "timers" ? "hide-tab" : ""}`}>
      <TimerList />
    </section>
  );
}
