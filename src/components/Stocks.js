import { useState, useEffect } from "react";
import millify from "millify";
// import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import Loader from "./Loader";

import { useGetStocksQuery } from "../apis/stockApi";

function Stocks({ simplified }) {
  const { data, isFetching } = useGetStocksQuery();
  // let currentData = data?.slice(0, 100);
  const [stocks, setStocks] = useState(data?.slice(0, 100));
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (simplified) {
      // const currentData = data?.slice(0, 10);
      setStocks(data?.slice(0, 10));
    } else {
      const filteredData = data
        ?.slice(0, 100)
        ?.filter((c) =>
          c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setStocks(filteredData);
    }
  }, [data, searchTerm, simplified]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Stock"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {stocks?.map((stock, i) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={i}>
            {/* <Link key={i} to={`/stocks/${stock.identifier}`}> */}
            <Card title={`${i + 1}. ${stock.symbol}`} hoverable>
              <p>Symbol: {stock.identifier}</p>
              <p>Daily High: {millify(stock.dayHigh)}</p>
              <p>Daily Low: {millify(stock.dayLow)}</p>
            </Card>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Stocks;
