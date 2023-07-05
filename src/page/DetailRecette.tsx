import React from "react";
import { useParams } from "react-router-dom";

function DetailRecette() {
  const { id } = useParams();
  console.log(id);
  return <div>DetailRecette</div>;
}

export default DetailRecette;
