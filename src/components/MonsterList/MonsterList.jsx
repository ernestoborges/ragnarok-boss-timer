import { MonsterItem } from "./MonsterItem";
export function MonsterList({ monsters }) {
  return (
    <ul className="monster-list">
      {monsters
        .filter((monster) => monster.spawn_maps.length > 0)
        .filter((boss) => {
          if (
            boss.spawn_maps.filter((spawn) => spawn.respawnTime >= 600000)
              .length > 0
          ) {
            return true;
          }
          return false;
        })
        .map((boss, index) => (
          <MonsterItem key={index} n={index} boss={boss} />
        ))}
    </ul>
  );
}
