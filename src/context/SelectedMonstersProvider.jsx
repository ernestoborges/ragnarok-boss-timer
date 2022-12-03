import { createContext, useState } from "react";

const SelectedMonstersContext = createContext(null);

export function SelectedMonstersProvider({ children }) {
  const [selectedMonsters, setSelectedMonsters] = useState([]);

  return (
    <SelectedMonstersContext.Provider
      value={{ selectedMonsters, setSelectedMonsters }}
    >
      {children}
    </SelectedMonstersContext.Provider>
  );
}

export default SelectedMonstersContext;
