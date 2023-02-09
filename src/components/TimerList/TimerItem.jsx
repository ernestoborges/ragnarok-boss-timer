import "./styles.css"
import { useEffect, useState, useContext } from "react";
import TimeContext from "../../context/TimeProvider";
import SelectedMonstersContext from "../../context/SelectedMonstersProvider";
import { BiRefresh } from "react-icons/bi"
import { BsTrash } from "react-icons/bs";

export function TimerItem({ monster }) {
    const timer = useContext(TimeContext).timer;
    const setSelectedMonsters = useContext(SelectedMonstersContext).setSelectedMonsters

    const [startedAt, setStartedAt] = useState(new Date());

    function timeLeft(started) {
        const endsAt = started.getTime() + monster.respawnTime
        return endsAt - timer
    }

    function stringfyTime(number) {
        const str = "" + number;
        const pad = "00";
        return pad.substring(0, pad.length - str.length) + str;
    }

    function convertTime(obj) {
        const h = stringfyTime(obj.getHours());
        const m = stringfyTime(obj.getMinutes());
        const s = stringfyTime(obj.getSeconds());
        return `${h}:${m}:${s}`
    }

    function convertCronometer(miliseconds) {
        return new Date(miliseconds).toISOString().slice(11, 19);
    }

    useEffect(() => {
        setStartedAt(monster.startedAt)
    }, [monster.startedAt])

    return <li>
        <img
            src={`images/${monster.data.id}.png`}
            onError={
                (e) => {
                    e.onError = null;
                    e.src = "images/default.png"
                }
            }
            alt=""
        />
        <div>
            <p>{monster.data.name}</p>
            <p>{monster.respawnMap}</p>
            <p><span>started at:</span> {convertTime(startedAt)}</p>
            <p><span>time left:</span> {convertCronometer(timeLeft(startedAt))}</p>
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