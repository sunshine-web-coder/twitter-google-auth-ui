import React, { useEffect, useState } from "react";
import FeedSectionStyle from "./FeedSection.module.scss";

import { FHeader } from "./header/FHeader";
import Tweet from "./tweet/Tweet";
import ShowMoreFeed from "../showMoreFeed/ShowMoreFeed";
import FeedPost from "../feedPost/FeedPost";

const FeedSection = ({theme, user}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for demonstration purposes
  }, []);

  return (
    <div className={theme === "light" ? FeedSectionStyle.light_theme : FeedSectionStyle.dark_theme}>
      <div className={FeedSectionStyle.feed_section}>
        <div className={FeedSectionStyle.inner_feed_section}>
          <FHeader theme={theme} />
          <div className={FeedSectionStyle.main_feed}>
            <Tweet theme={theme} user={user} />
          </div>
          {loading ? (
            <div className="spinner_container">
              <div className="spinner">

              </div>
            </div>
          ) : (
            <>
              <ShowMoreFeed theme={theme} />
              <FeedPost theme={theme} />
            </>
          )}
        </div>
      </div> 
    </div>
    
  );
};

export default FeedSection;
