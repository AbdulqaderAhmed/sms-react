import ReactDOM from "react-dom/client";
import App from "./App";
import "flowbite-react";
import "../src/assets/css/app.css";
import { Provider } from "react-redux";
import { store } from "./feature/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
