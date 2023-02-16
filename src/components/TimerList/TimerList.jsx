import { useContext } from "react";
import { GalleryItem } from "./GalleryItem"
import { ListItem } from "./ListItem";
import SelectedMonstersContext from "../../context/SelectedMonstersProvider";

export function TimerList({ listStyle }) {
    const selectedMonsters = useContext(SelectedMonstersContext).selectedMonsters
    return (
        <>
            <ul className={`timer-list type-gallery ${listStyle === "list" ? "hidden" : ""}`}>
                {selectedMonsters.map((monster, i) => <GalleryItem key={i} monster={monster} />)}
            </ul>
            <ul className={`timer-list type-list ${listStyle === "gallery" ? "hidden" : ""}`}>
                <li><div>Card</div><div><p>Name</p><p>Map</p><p>Killed</p><p>Time left</p></div><div></div></li>
                {selectedMonsters.map((monster, i) => <ListItem key={i} monster={monster} />)}
            </ul>
        </>
    )
}