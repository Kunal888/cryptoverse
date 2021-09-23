import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useGetCryptosQuery } from "../apis/cryptoApi";
import Loader from "./Loader";
import Stocks from "./Stocks";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return <Loader />;

  return (
    <div>
      {/* <div className="global-stats">
        <Typography.Title level={2} className="heading">
          Global Crypto Stats
        </Typography.Title>
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value={stats.total} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(stats.totalExchanges)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(stats.totalMarketCap)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={millify(stats.total24hVolume)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(stats.totalMarkets)}
            />
          </Col>
        </Row>
      </div> */}
      {console.log(data)}
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Stocks
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/stocks">Show More</Link>
        </Typography.Title>
      </div>
      <Stocks simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Related News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </div>
  );
}

export default Home;
