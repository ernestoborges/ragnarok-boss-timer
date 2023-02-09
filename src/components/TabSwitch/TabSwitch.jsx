import { useContext } from "react";
import SelectedMonstersContext from "../../context/SelectedMonstersProvider";
import "./styles.css";
export function TabSwitch({ tabs, selected, setSelectedTab }) {

  const selectedMonstersLength = useContext(SelectedMonstersContext).selectedMonsters.length
  return (
    <>
      <ul className="tab-switch">
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={tab === selected ? "selected-tab" : ""}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            {tab}
            {tab === "timers" && selectedMonstersLength > 0  && <span className="timers-count">{selectedMonstersLength}</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
