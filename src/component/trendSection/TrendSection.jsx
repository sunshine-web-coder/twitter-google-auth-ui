import React, { useEffect, useState } from "react";
import TrendSectionStyle from "./TrendSection.module.scss";
import SearchBar from "./searchBar/SearchBar";
import Trend from "./trend/Trend";
import WhoToFollow from "./who-to-follow/WhoToFollow";
import { Footer } from "./footer/Footer";
import Spinner from "../spinner/Spinner";
// import { Spinner, Spinner2 } from "../spinner/Spinner";

const TrendSection = ({theme}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for demonstration purposes
  }, []);
  return (
      <div className={TrendSectionStyle.trend_section}>
        <SearchBar theme={theme} />
        {loading ? (
          <Spinner theme={theme} />
        ) : (
          <Trend theme={theme} />
        )}
        <div className={TrendSectionStyle.dhdhs8788}>
          {loading ? (
            <></>
          ) : (
            <WhoToFollow theme={theme} />
          )}
          <Footer />
        </div>
      </div>
  );
};

export default TrendSection;
