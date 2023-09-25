import ReactDOM from "react-dom/client";
import App from "./App";
import "flowbite-react";
import "../src/assets/css/app.css";
import { Provider } from "react-redux";
import { store } from "./feature/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
