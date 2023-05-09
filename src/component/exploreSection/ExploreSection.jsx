import React, { useEffect, useState } from "react";
import ExploreSectionStyle from "./ExploreSection.module.scss";

import { FHeader } from "./header/FHeader";
import FeedPost from "../feedPost/FeedPost";

const ExploreSection = ({theme}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for demonstration purposes
  }, []);

  return (
    <div className={theme === "light" ? ExploreSectionStyle.light_theme : ExploreSectionStyle.dark_theme}>
      <div className={ExploreSectionStyle.feed_section}>
        <div className={ExploreSectionStyle.inner_feed_section}>
          <FHeader theme={theme} />
          {loading ? (
            <div className="spinner_container">
              <div className="spinner">

              </div>
            </div>
          ) : (
            <>
              <FeedPost theme={theme} />
            </>
          )}
        </div>
      </div> 
    </div>
    
  );
};

export default ExploreSection;
