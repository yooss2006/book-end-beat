import axios from "axios";
import React, { useEffect, useState } from "react";
import DataList from "../components/DataList";

const Writing = () => {
  const [textData, setTextData] = useState("");

  const LoadBookData = () => {
    axios({
      method: "get", // 통신 방식
      url: "https://dapi.kakao.com/v3/search/book",
      headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}` },
      params: { target: "title", query: textData, sort: "accuracy", size: 5 },
      responseType: "json",
    }).then(function (response) {
      const data = response.data.documents;
    });
  };

  console.log(process.env.REACT_APP_KAKAO_KEY);
  useEffect(() => {
    textData && LoadBookData();
  }, [textData]);

  return (
    <section className="Writing">
      <form action="" method="post">
        <label>
          <p>입력</p>
          <input
            type="text"
            onChange={(e) => {
              setTextData(e.target.value);
            }}
            value={textData}
          />
        </label>
        <DataList />
      </form>
    </section>
  );
};

export default Writing;
