import { useState, useEffect } from "react"; 
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
// import Geography from "./pages/geography";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sizeWindow, setSizeWindow] = useState(1200)
  const [theme, colorMode] = useMode();

  useEffect(() => {
    const windowSize = () => {
      setSizeWindow(window.innerWidth)
      if (window.innerWidth <= 900 && !isCollapsed) {
        setIsCollapsed(true)
      }
    }

    window.addEventListener('resize', windowSize)
    windowSize()

    return () => window.removeEventListener('resize', windowSize)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* reset CSS to default provided with material ui */}
        <CssBaseline />
        <div className="app">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main className={`content ${sizeWindow <= 900 || isCollapsed ? 'mobile' : ''}`}>
            <Topbar sizeWindow={sizeWindow} isCollapse={isCollapsed} />
            <Box paddingTop="68.56px">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
