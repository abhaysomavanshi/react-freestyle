import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h1>REACT.JS FREESTYLE PROJECT</h1>
            <h2>Jenkins Build Successful</h2>
            <p>This React application was built using Jenkins.</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
