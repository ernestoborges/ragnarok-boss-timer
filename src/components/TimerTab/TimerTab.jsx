import { TimerList } from "../TimerList/TimerList"

export function TimerTab({ selectedTab }) {

  return (
    <section className={selectedTab === "timers" ? "" : "hidden"}>
      <TimerList />
    </section>
  );
}
