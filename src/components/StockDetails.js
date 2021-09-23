import { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";

function StockDetails() {
  const { stockId } = useParams();
  return <>Stock Details</>;
}

export default StockDetails;
