import "./styles.css"
import { useEffect, useState, useContext } from "react";
import TimeContext from "../../context/TimeProvider";
import SelectedMonstersContext from "../../context/SelectedMonstersProvider";
import { BiRefresh } from "react-icons/bi"
import { BsTrash } from "react-icons/bs";
import { timeLeft, convertTime, convertCronometer, noCardList } from "../../functions/TimerListFunctions";

export function ListItem({ monster }) {
    const timer = useContext(TimeContext).timer;
    const setSelectedMonsters = useContext(SelectedMonstersContext).setSelectedMonsters

    const [startedAt, setStartedAt] = useState(new Date());

    useEffect(() => {
        setStartedAt(monster.startedAt)
    }, [monster.startedAt])

    return <li>
        <img
            src={!noCardList.includes(monster.data.id) ? `images/${monster.data.id}.png` : "images/default.png"}
            alt=""
        />
        <div>
            <p>{monster.data.name}</p>
            <p>{monster.respawnMap}</p>
            <p>{convertTime(startedAt)}</p>
            <p>{convertCronometer(timeLeft(startedAt, monster.respawnTime, timer))}</p>
        </div>
        <div>
            <button onClick={() => setStartedAt(new Date())}>
                <BiRefresh />
            </button>

            <button
                onClick={
                    () => setSelectedMonsters(
                        (prev) => prev.filter(
                            filtered => filtered.index !== monster.index
                        )
                    )
                }>
                <BsTrash />
            </button>
        </div>

    </li>
}