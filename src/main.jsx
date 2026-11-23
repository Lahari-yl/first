import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./project/design";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);