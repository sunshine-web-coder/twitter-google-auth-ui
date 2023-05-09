import React, { useState } from "react";
import styles from "./TwitterBlue.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { GoPrimitiveDot } from 'react-icons/go';

export default function TwitterBlue({theme}) {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={theme === "light" ? styles.light_theme : styles.dark_theme}>
      <div className={styles.compose_modal}>
        <div className={styles.inner_compose_modal}>
          <div className={styles.modal_body}>
            <div className={styles.closeModal}>
              <div className={styles.inner_closeModal} onClick={handleClick}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.twitter_blue}>
              <div className={styles.top}>
                <div className={styles.top0983}>
                  <div className={styles.left}>
                    <span>
                      Blue subscribers with a verified phone number will get a blue
                      checkmark once approved.
                    </span>
                  </div>
                  <div className={styles.right}></div>
                </div>
                <div className={styles.center0983}>
                  <button className={activeButton === "button1" ? styles.activeButton : ""} onClick={() => handleButtonClick("button1")}>
                    <span>Annually</span>
                    <span>SAVE 12%</span>
                  </button>
                  <button className={activeButton === "button2" ? styles.activeButton : ""} onClick={() => handleButtonClick("button2")}><span>Monthly</span></button>
                </div>
                <div className={styles.r_6gpygo}>
                  <div className={styles.inner_r_6gpygo}>
                    <div className={styles.title}>
                      <span>Blue</span>

                    </div>
                    <div className={styles.dList}>
                      <li><span><GoPrimitiveDot /></span>Prioritized rankings in conversations and search</li>
                      <li><span><GoPrimitiveDot /></span>See approximately twice as many Tweets between ads in your For You and Following timelines.</li>
                      <li><span><GoPrimitiveDot /></span>Post longer videos and 1080p video uploads</li>
                      <li><span><GoPrimitiveDot /></span>All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features</li>

                      <div className={styles.learn_more_btn}>
                        <span>Learn more</span>
                        <span className={styles.arrow}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.f8873}>
                  {activeButton === "button1" ? (
                    <>
                      <p>
                        <span className={styles.discount}>NGN 43,800.00</span>
                        <span>NGN 38,500.00 / year</span>
                      </p>
                    </>
                  ):(
                    <>
                      <p>
                        <span>NGN 3,650.00 / Monthly</span>
                      </p>
                    </>
                  )}
                </div>
                <div className={styles.f8874}>
                  By subscribing, you agree to our <Link to="">Purchaser Terms of Service.</Link> Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. A verified phone number is required to subscribe. If you've subscribed on another platform, manage your subscription through that platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    
  );
}
