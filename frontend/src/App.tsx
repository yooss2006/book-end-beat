import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/BookShelf";
import Login from "./pages/Login";
import Record from "./pages/Record";
import "./style/common.css";

function App() {
  const [curPage, setCurPage] = useState("login");
  useEffect(() => {
    setCurPage(window.location.pathname.slice(1));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>로그인</h1>
          <nav>
            <ul>
              <li className={curPage === "bookshelf" ? "on" : ""}>
                <a href="/bookshelf">책장</a>
              </li>
              <li className={curPage === "record" ? "on" : ""}>
                <a href="/record">음악장</a>
              </li>
              <li className={curPage === "" ? "on" : ""}>
                <a href="/">로그인</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/bookshelf" element={<BookShelf />} />
            <Route path="/record" element={<Record />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
