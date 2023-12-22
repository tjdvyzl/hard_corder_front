import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { Question } from "./pages/Question";
import { FinishedScreen } from "./pages/FinishedScreen";
import { Box } from "./components/Box.style";
import { Header } from "./components/Header";
import Signup from "./pages/signup";
import Login from "./pages/login";
import MyPage from "./pages/myPage";
import Board from "./pages/Board";
import BoardDetailPage from "./pages/BoardDetailPage";
import MakeBoardPage from "./pages/MakeBoardPage";

function App() {
  return (
    <Box>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="quiz/:level" element={<Question />} />
          <Route path="results" element={<FinishedScreen />} />
          <Route path="signUp" element={<Signup />} />
          <Route path="signIn" element={<Login />} />
          <Route path="myPage" element={<MyPage />} />
          <Route path="board" element={<Board />} />
          <Route path="board/:id" element={<BoardDetailPage />} />
          <Route path="makeBoardPage" element={<MakeBoardPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
