import React from "react";
import Box from "./Box";

function BoxList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);
  return (
    <div className="result">
      {data.map((item) => (
        <Box key={item.imdbID} movie={item} />
      ))}
    </div>
  );
}

export default BoxList;