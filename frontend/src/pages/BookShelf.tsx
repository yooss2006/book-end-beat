import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import BookSpace from "../components/BookSpace";

const BookShelf = () => {
  return (
    <section className="BookShelf">
      <h2 className="blind">책장</h2>

      <nav className="navCondition">
        <ul>
          <li>
            <button>전체</button>
          </li>
          <li>
            <button>날짜 별</button>
          </li>
          <li>
            <button>장르 별</button>
          </li>
        </ul>
        <Link to={"/book/writing"}>글쓰기</Link>
      </nav>

      <BookSpace />
    </section>
  );
};

export default BookShelf;
