import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import Topbar from "./components/global/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pie from "./pages/Pie";

import Calendar from "./pages/Calendar";
import Line from "./pages/Line";
import Sidebar from "./components/global/Sidebar";
import List from "./pages/doctor/List";
import Form from "./pages/doctor/Form";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app flex relative">
            <Sidebar />
            <main className="content">
              <Topbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* Doctor Routes */}
                <Route path="/doctor/create" element={<Form />} />
                <Route path="/doctor/list" element={<List />} />
                <Route path="/calendar" element={<Calendar />} />

                <Route path="/pie-chart" element={<Pie />} />
                <Route path="/line-chart" element={<Line />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
