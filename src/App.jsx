import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Question } from "./pages/Question";
import { FinishedScreen } from "./pages/FinishedScreen";
import { Box } from "./components/Box.style";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="quiz/:level" element={<Question />} />
          <Route path="results" element={<FinishedScreen />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
