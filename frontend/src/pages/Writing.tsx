import axios from "axios";
import React, { useEffect, useState } from "react";
import DataList from "../components/DataList";
import { BookAPIData, BookFilterData } from "../type";

const Writing = () => {
  const [textData, setTextData] = useState("");
  const [temporaryData, setTemporaryData] = useState<BookFilterData[]>([]);

  const LoadBookData = () => {
    axios({
      method: "get", // 통신 방식
      url: "https://dapi.kakao.com/v3/search/book",
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}` },
      params: { target: "title", query: textData, size: 5 },
      responseType: "json",
    }).then(function (response) {
      const LoadData: BookAPIData[] = response.data.documents;
      const filterData: BookFilterData[] = LoadData.map((item) => {
        return {
          authors: item.authors,
          isbn: item.isbn,
          publisher: item.publisher,
          title: item.title,
          thumbnail: item.thumbnail,
        };
      });
      setTemporaryData(filterData);
    });
  };

  useEffect(() => {
    textData && LoadBookData();
  }, [textData]);

  return (
    <section className="Writing">
      <form action="" method="post">
        <label>
          <p>검색</p>
          <input
            type="search"
            className="search"
            onChange={(e) => {
              setTextData(e.target.value);
            }}
            value={textData}
          />
        </label>
        {textData && <DataList exampleData={temporaryData} />}
      </form>
    </section>
  );
};

export default Writing;
