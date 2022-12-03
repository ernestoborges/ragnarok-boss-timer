import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TimeProvider } from "./context/TimeProvider";
import { SelectedMonstersProvider } from "./context/SelectedMonstersProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TimeProvider>
      <SelectedMonstersProvider>
        <App />
      </SelectedMonstersProvider>
    </TimeProvider>
  </StrictMode>
);
