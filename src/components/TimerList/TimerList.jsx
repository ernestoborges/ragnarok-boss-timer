import { useContext } from "react";
import { TimerItem } from "./TimerItem"
import SelectedMonstersContext from "../../context/SelectedMonstersProvider";


export function TimerList(){
    const selectedMonsters = useContext(SelectedMonstersContext).selectedMonsters
    return <ul className="timer-list">
        {selectedMonsters.map((monster, i) => <TimerItem key={i} monster={monster} />)}
    </ul>
}