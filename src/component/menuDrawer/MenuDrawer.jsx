import React, { useState } from "react";
import styles from "./MenuDrawer.module.scss";
import { Link } from "react-router-dom";
import { MenuDrawerLists } from "../data/MenuDrawer";
import { Accordion1 } from "../data/Accordion";

export default function MenuDrawer({ toggleTheme, theme, isMenuOpen, handleMenuToggleClose }) {
  const [activeAccordion1, setActiveAccordion1] = useState(null);
  const handleClick = (index) => {
    setActiveAccordion1(activeAccordion1 === index ? null : index);
  };
  
  return (
    <div className={theme === "light" ? styles.light_theme : styles.dark_theme}>
      <div className={`${styles['overlay']} ${isMenuOpen ? styles.open : ''}`}></div>
      <div className={`${styles['menu_drawer']} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.inner_menu_drawer}>
          <div className={styles.title}>
            <div className={styles.inner_title}>
              <span>Account info</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" onClick={handleMenuToggleClose}>
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className={styles.nsbfu8}>
            <div className={styles.inner_nsbfu8}>
              <div className={styles.inner_nsbfu8_top}>
                <div className={styles.top}>
                  <div className="accounts">
                    <div className="lAvatar">
                      <div className="avatar">
                        <img
                          src="https://i.ibb.co/qYqbCKd/UNJ05-AV8-400x400.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rTop}>
                    <div className={`${styles.account_} accounts`}>
                      {/* <div className={`${styles.lAvatar_} lAvatar`}>
                                        <div className={`${styles.avatar_} avatar`}>
                                            <img src="https://i.ibb.co/qYqbCKd/UNJ05-AV8-400x400.jpg" alt="" />
                                        </div>
                                    </div> */}
                      <div className={styles.dots_btn}>
                        {/* <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg> */}
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <g>
                            <path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.center}>
                  <div className={`${styles.user_name_M} user_name`}>
                    <span>Yearst</span>
                    <span>@Yearst1</span>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <p>
                    <span>366</span>
                    <span>Following</span>
                  </p>
                  <p>
                    <span>40</span>
                    <span>Followers</span>
                  </p>
                </div>
              </div>
              <div className={styles.inner_nsbfu8_menu}>
                <ul>
                  {MenuDrawerLists.map((item, i) => (
                    <li key={i}>
                      <Link to={item.slug}>
                        <span
                          className={
                            item.twitterBlue ? styles.twitterBlueSvg : ""
                          }
                        >
                          {item.svg}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.separator}></div>
              <div className={styles.bottom}>
                {Accordion1.map((item, index) => (
                  <div key={index}>
                    <button onClick={() => handleClick(index)}>
                      {item.title}
                      <span
                        className={`${styles.arrow} ${
                          activeAccordion1 === index ? styles.down : ""
                        }`}
                      ></span>
                    </button>
                    {activeAccordion1 === index && (
                      <div className={styles.accordion_list}>
                        {item.jsIIm ? (
                          <>
                            {item.content}
                            <li onClick={toggleTheme} className="toggleTheme">
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <g>
                                  <path d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z"></path>
                                </g>
                              </svg>
                              light / dark mode
                            </li>
                            <li onClick={toggleTheme} className="toggleTheme">
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <g>
                                  <path d="M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z"></path>
                                </g>
                              </svg>
                              Log out @Yearst1
                            </li>
                          </>
                        ) : (
                          <>{item.content}</>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
