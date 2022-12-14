import "./styles.css";
import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import { TabSwitch } from "./components/TabSwitch/TabSwitch";

import { MonsterTab } from "./components/MonsterTab/MonsterTab";
import { TimerTab } from "./components/TimerTab/TimerTab";

export default function App() {
  const [monsterList, setMonsterList] = useState([]);
  const [selectedTab, setSelectedTab] = useState("monsters");
  useEffect(() => {
    fetch("https://ragnarok-api.b4a.app/en/monsters")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setMonsterList(data);
      })
      .catch((error) => {
        console.error("Error fetching monster data");
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <TabSwitch
        tabs={["monsters", "timer"]}
        selected={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <main>
        {monsterList ? (
          <>
            <MonsterTab selectedTab={selectedTab} monsters={monsterList} />
            <TimerTab selectedTab={selectedTab} />
          </>
        ) : (
          "carregando"
        )}
      </main>
    </div>
  );
}
