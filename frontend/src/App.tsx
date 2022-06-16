import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/BookShelf";
import Login from "./pages/Login";
import Record from "./pages/Record";
import "./style/common.css";

import character from "./assets/character1.png";
import Writing from "./pages/Writing";
import { BookFilterData } from "./type";

export const bookEndRecordContextData = React.createContext<{
  bookData: BookFilterData[];
} | null>(null);

export const useBookEndRecordContextData = () => {
  const state = useContext(bookEndRecordContextData);
  if (!state) throw new Error("state를 찾을 수 없습니다.");
  return state;
};

let today = new Date();

function App() {
  const [data, setData] = useState([]);

  const addData = () => {};

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
