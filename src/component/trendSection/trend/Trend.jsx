import React from "react";
import TrendStyle from "./Trend.module.scss";
import { trendsData } from "../../data/TrendsData";
import { Link } from "react-router-dom";

const Trend = ({theme}) => {
  return (
    <div className={theme === "light" ? TrendStyle.light_theme : TrendStyle.dark_theme}>
      <div className={TrendStyle.trend_container}>
        <div className={TrendStyle.inner_trend_container}>
          <h2>Trends for you</h2>
          <div className={TrendStyle.trend_2jd87}>
              {trendsData.map((item, i) => (
                  <div className={TrendStyle.trend_box} key={i}>
                    <div className={TrendStyle.dkw9889}>
                      <p><span>{item.title}</span></p> 
                      <div className="sBut47378">
                          <div className="inner_sBut47378">
                              <div className='fp32868bIcon fphds39Icon'><svg viewBox="0 0 24 24" aria-hidden="true" className="r_feed_icon"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></div>
                          </div> 
                      </div>
                    </div>
                      
                      <p>#{item.hashTagsTitle}</p>
                      <p>{item.amounts_of_tweets}<span>K</span>&nbsp;Tweets</p>
                  </div>
              ))}
              <Link to="">
                  <div className={TrendStyle.trend_box}>
                      Show more
                  </div>
              </Link>
          </div>
          
        </div>
      </div>  
    </div>
    
  );
};

export default Trend;
