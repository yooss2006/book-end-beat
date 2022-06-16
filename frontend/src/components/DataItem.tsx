import React from "react";
import { BookFilterData } from "../type";

type DataItemProps = {
  key: number;
  detailData: BookFilterData;
};

const DataItem = ({ key, detailData }: DataItemProps) => {
  return (
    <li key={key}>
      <div className="informationCont">
        <img src={detailData.thumbnail} alt={detailData.title} />
        <div>
          <h3>{detailData.title}</h3>
          <dl>
            <dt>글쓴이</dt>
            <dd>{detailData.authors.join(",")}</dd>
          </dl>
          <dl>
            <dt>isbn</dt>
            <dd>{detailData.isbn}</dd>
          </dl>
        </div>
      </div>
      <button type="button" className="addItemBtn">
        추가
      </button>
    </li>
  );
};

export default DataItem;
