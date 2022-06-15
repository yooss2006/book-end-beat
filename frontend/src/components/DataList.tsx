import React from "react";
import { BookFilterData } from "../type";
import DataItem from "./DataItem";

type DataListProps = {
  exampleData: BookFilterData[];
};

const DataList = ({ exampleData }: DataListProps) => {
  return (
    <ul className="DataLIst">
      {exampleData &&
        exampleData.map((item, index) => {
          return <DataItem key={index} detailData={item} />;
        })}
    </ul>
  );
};

export default DataList;
