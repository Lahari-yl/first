import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"
import { Provider } from "react-redux";
import studentstore from "./redux/studentstore.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
            <App />
    </StrictMode>
);