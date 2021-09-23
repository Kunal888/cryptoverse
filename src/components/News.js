import { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import Loader from "./Loader";
import moment from "moment";

import { useGetCryptosQuery } from "../apis/cryptoApi";
import { useGetCryptoNewsQuery } from "../apis/cryptoNewsApi";

function News({ simplified }) {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: crypto, isFetching } = useGetCryptosQuery(100);
  const { data: news } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (isFetching) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="Cryptocurency">Cryptocurrency</Select.Option>
            {crypto?.data?.coins?.map((currency, i) => (
              <Select.Option value={currency.name} key={i}>
                {currency.name}
              </Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {news?.value.map((news, i) => (
        <Col xs={24} sm={24} lg={12} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt=""
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt=""
                  />
                  <Typography.Text className="provider-name">
                    {news.provider[0]?.name}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
