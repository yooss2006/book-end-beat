import axios from "axios";
import React from "react";
import BookSpace from "../components/BookSpace";

const BookShelf = () => {
  console.log(process.env.REACT_APP_KAKAO_KEY);
  axios({
    method: "get", // 통신 방식
    url: "https://dapi.kakao.com/v3/search/book?target=title&query=미움받을 용기",
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}` },
    params: { target: "title", query: "미움받을 용기" },
    responseType: "json",
  }).then(function (response) {
    console.log(response);
  });

  return (
    <section className="BookShelf">
      <h2 className="blind">책장</h2>
      <BookSpace />
    </section>
  );
};

export default BookShelf;
