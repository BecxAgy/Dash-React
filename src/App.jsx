import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import Topbar from "./components/global/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pie from "./pages/Pie";
import Form from "./pages/Form";
import Calendar from "./pages/Calendar";
import Line from "./pages/Line";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app flex relative">
          <main className="content">
            <Topbar />
            <Router>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/pie-chart" element={<Pie />} />
                <Route path="/pie-chart" element={<Line />} />
              </Routes>
            </Router>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
