import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/BookShelf";
import Login from "./pages/Login";
import Record from "./pages/Record";
import "./style/common.css";

import character from "./assets/character1.png";
import Writing from "./pages/Writing";

function App() {
  const [recordData, setrecordData] = useState([]);
  const [bookData, setBookData] = useState([]);
  // const [curPage, setCurPage] = useState("login");
  // useEffect(() => {
  //   setCurPage(window.location.pathname.slice(1));
  // }, []);
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
              <li>
                <Link to={"/book"}>책방</Link>
              </li>
              <li>
                <Link to={"/record"}>음악방</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/book" element={<BookShelf />} />
            <Route path="/book/writing" element={<Writing />} />
            <Route path="/record" element={<Record />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
