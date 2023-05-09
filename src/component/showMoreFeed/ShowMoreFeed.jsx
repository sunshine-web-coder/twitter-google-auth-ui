import React from 'react'
import ShowMoreFeedStyle from "./ShowMoreFeed.module.scss"

const ShowMoreFeed = ({theme}) => {
  return (
    <div className={theme === "light" ? ShowMoreFeedStyle.light_theme : ShowMoreFeedStyle.dark_theme}>
      <div className={ShowMoreFeedStyle.Show_More_Feed}>
        <span>Show 68 Tweets</span>
      </div>
    </div>
   
  )
}

export default ShowMoreFeed