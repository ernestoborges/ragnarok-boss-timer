import { createContext, useState, useEffect } from "react";

const TimeContext = createContext(null);

export function TimeProvider({ children }) {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setTimer(new Date());
  }
  return (
    <TimeContext.Provider value={{ timer }}>{children}</TimeContext.Provider>
  );
}

export default TimeContext;
