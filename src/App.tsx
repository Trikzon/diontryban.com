import { StrictMode } from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarkdownPage from "./pages/MarkdownPage";

function App() {
    return (
        <StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/welcome" />} />
                    <Route path="/:slug" element={<MarkdownPage />} />
                    <Route path="/:folder/:slug" element={<MarkdownPage />} />
                </Routes>
            </Router>
        </StrictMode>
    )
}

export default App