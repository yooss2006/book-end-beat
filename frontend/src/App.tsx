import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/BookShelf";
import Login from "./pages/Login";
import Record from "./pages/Record";
import "./style/common.css";

import character from "./assets/character1.png";

function App() {
  const [curPage, setCurPage] = useState("login");
  useEffect(() => {
    setCurPage(window.location.pathname.slice(1));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="blind">책과 음악</h1>
        <section className="contMember">
          <img src={character} alt="유순상" />
          <button className="button">logout</button>
        </section>
        <main>
          <nav className="navRoom">
            <ul>
              <li>책방</li>
              <li>음악방</li>
            </ul>
          </nav>
          <nav className="navCondition">
            <ul>
              <li>전체</li>
              <li>월 별</li>
              <li>장르 별</li>
            </ul>
          </nav>
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
