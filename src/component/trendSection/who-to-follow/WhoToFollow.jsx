import React from 'react'
import WhoToFollowStyle from "./WhoToFollow.module.scss"
import { WhoToFollowData } from '../../data/WhoToFollow'

export default function WhoToFollow({theme}) {
  return (
    <div className={theme === "light" ? WhoToFollowStyle.light_theme : WhoToFollowStyle.dark_theme}>
        <div className={WhoToFollowStyle.Who_To_Follow}>
            <div className={WhoToFollowStyle.title}>
                <span>Who to follow</span>
            </div>
            {WhoToFollowData.slice(0,3).map((item, i) => (
                <div className={WhoToFollowStyle.Who_To_Follow_box} key={i}>
                    <div className={WhoToFollowStyle.left}>
                        <div className={WhoToFollowStyle.avatar}>
                            <img src={item.avatar} alt="" />
                        </div>
                        <div className={WhoToFollowStyle.user_name}>
                            <span>{item.name}</span>
                            <span>@{item.username}</span>
                        </div>
                    </div>
                    <div className={WhoToFollowStyle.right}>
                        <button>{item.follow}</button>
                    </div>
                </div>
            ))}
            <div className={WhoToFollowStyle.Who_To_Follow_box}>
                <span className={WhoToFollowStyle.seeMore}>See more</span>
            </div>
        </div>    
    </div>
    
  )
}
