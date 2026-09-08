import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from "./App.jsx";

// grafite + âmbar: passa a ideia de eletrônico/circuito sem cair no azul genérico de "tech"
const tema = createTheme({
    palette: {
        primary: {
            main: "#1E293B",
        },
        secondary: {
            main: "#FFB300",
        },
    },
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={tema}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
