import { render } from "react-dom";

import App from "./App";
import { AlertProvider } from "./contextProvider/contextProvider";

const rootElement = document.getElementById("root");
render(
  <AlertProvider>
    <App />
  </AlertProvider>,

  rootElement
);
