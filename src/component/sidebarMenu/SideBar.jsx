import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SideBarStyle from "./SideBar.module.scss";
import avatar from "../../assets/UNJ05AV8_400x400.jpg"
import { Accounts } from "../data/Accounts";
import useOnClickOutside from "../use-onclick-outside"
import { MoreLinks } from "../data/MoreLinks";
import { Accordion1 } from "../data/Accordion";
import Logout from "../logout/Logout"

const SideBar = ({user, toggleTheme, theme}) => {
  const [acctToggle, setAcctToggle] = useState(false);
  const [acctToggle2, setAcctToggle2] = useState(false);
  const [activeAccordion1, setActiveAccordion1] = useState(null);

  const ref = useRef(null);

  const toggleAcct = () => {
    setAcctToggle(!acctToggle);
  };

  const toggleAcct2 = () => {
    setAcctToggle2(!acctToggle2);
  };

  useOnClickOutside(ref, () => setAcctToggle2(false));

  const handleClick = (index) => {
    setActiveAccordion1(activeAccordion1 === index ? null : index);
  };

  return (
    <>
    <div className={theme === "light" ? SideBarStyle.light_theme : SideBarStyle.dark_theme}>
      <div className={`${SideBarStyle['sidebar']} ${acctToggle2 ? SideBarStyle.open : ''}`}>
        <div className={SideBarStyle.inner_sidebar}>
          <div className={SideBarStyle.inner_inner_sidebar}>
            <div className={SideBarStyle.top}>
              <div className={SideBarStyle.logo}>
                <Link to="">
                  <svg className={SideBarStyle.logoIcon} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                </Link>
              </div>
              <div className={SideBarStyle.sideMenuLink}>
                <nav>
                  <ul>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Home</div>
                      </Link>
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Explore</div>
                      </Link>
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Communities</div>
                      </Link> 
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Notifications</div>
                      </Link>
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Messages</div>
                      </Link>
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Bookmarks</div>
                      </Link>
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks} to="i/twitter_blue_sign_up">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M15.704 8.99c.457-.05.891-.17 1.296-.35-.302.45-.685.84-1.125 1.15.004.1.006.19.006.29 0 2.94-2.269 6.32-6.421 6.32-1.274 0-2.46-.37-3.459-1 .177.02.357.03.539.03 1.057 0 2.03-.35 2.803-.95-.988-.02-1.821-.66-2.109-1.54.138.03.28.04.425.04.206 0 .405-.03.595-.08-1.033-.2-1.811-1.1-1.811-2.18v-.03c.305.17.652.27 1.023.28-.606-.4-1.004-1.08-1.004-1.85 0-.4.111-.78.305-1.11 1.113 1.34 2.775 2.22 4.652 2.32-.038-.17-.058-.33-.058-.51 0-1.23 1.01-2.22 2.256-2.22.649 0 1.235.27 1.647.7.514-.1.997-.28 1.433-.54-.168.52-.526.96-.992 1.23zM2 21h15c3.038 0 5.5-2.46 5.5-5.5 0-1.4-.524-2.68-1.385-3.65-.08-.09-.089-.22-.023-.32.574-.87.908-1.91.908-3.03C22 5.46 19.538 3 16.5 3H2v18zM16.5 5C18.433 5 20 6.57 20 8.5c0 1.01-.43 1.93-1.12 2.57-.468.43-.414 1.19.111 1.55.914.63 1.509 1.69 1.509 2.88 0 1.93-1.567 3.5-3.5 3.5H4V5h12.5z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Twitter Blue</div>
                      </Link>
                    </li>
                    <li className={SideBarStyle.sideList}>
                      <Link className={SideBarStyle.sideLinks}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                        <div className={SideBarStyle.menuLabel}>Profile</div>
                      </Link>
                    </li>
                    <div className={SideBarStyle.f450r}>
                      <div ref={ref} className={`${SideBarStyle.dhui88} ${SideBarStyle.m7yn809} ${acctToggle2 ? SideBarStyle.acctActive : ""}`}>
                        <div className={SideBarStyle.inner_dhui88}>
                          <div className={SideBarStyle.top}>
                            <div className={`${SideBarStyle.inner_top} ${SideBarStyle.mi7nl_top}`}>
                              {MoreLinks.map((item, i) => (
                                <li className={SideBarStyle.inner_top_list} key={i}>
                                  <Link to={item.slug}>{item.svg} {item.label}</Link>
                                </li>
                              ))}
                            </div>
                          </div>
                          <div className={SideBarStyle.separator}></div>
                            <div className={SideBarStyle.bottom}>
                              {Accordion1.map((item, index) => (
                                <div key={index}>
                                  <button onClick={() => handleClick(index)}>
                                    {item.title}
                                    <span className={`${SideBarStyle.arrow} ${activeAccordion1 === index ? SideBarStyle.down : ''}`}></span>
                                  </button>
                                  {activeAccordion1 === index && 
                                  <div className={SideBarStyle.accordion_list}>
                                    {item.jsIIm ? (
                                      <>
                                        {item.content}
                                        <li onClick={toggleTheme} className="toggleTheme">
                                                <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z"></path></g></svg>
                                                light / dark mode
                                        </li>
                                      </>
                                    ):(
                                      <>
                                      {item.content}
                                      </>
                                    )}
                                    </div>}
                                </div>
                              ))}
                            </div>
                        </div>
                      </div>
                      <li onClick={toggleAcct2} className={SideBarStyle.sideList}>
                        <div className={SideBarStyle.moreLinks}>
                          <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                          <div className={SideBarStyle.menuLabel}>More</div>
                        </div>
                      </li>  
                    </div>
                    
                  </ul>
                </nav>
              </div>
              <div className={SideBarStyle.tweetBtn}>
                <Link className={SideBarStyle.tweetBtnLink} to="compose/tweet">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className={SideBarStyle.featherIcon}><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                  <span>Tweet</span>
                </Link>
              </div>
            </div>
            <div className={`${SideBarStyle.dhui88} ${acctToggle ? SideBarStyle.acctActive : ""}`}>
              <div className={SideBarStyle.inner_dhui88}>
                <div className={SideBarStyle.top}>
                  <div className={SideBarStyle.inner_top}>
                    {Accounts.map((item, i) => (
                      <li className="accounts a97jJ" key={i}>
                        <div className="lAvatar">
                          <div className="avatar">
                            <img src={user.photoURL} alt="" />
                          </div>
                        </div>
                        <div className={`${SideBarStyle.user_name_M} user_name`}>
                          <span>{user.displayName}</span>
                          <span>@{user.email.split("@")[0]}</span>
                        </div>
                      </li>
                    ))}
                  </div>
                </div> 
                <div className={SideBarStyle.separator}></div>
                  <div className={SideBarStyle.bottom}>
                    <li><Link className={SideBarStyle.sideLinks} to="/">Add an existing account</Link></li>
                    <li><Link className={SideBarStyle.sideLinks} to="/">Manage accounts</Link></li>
                    <li><Link className={SideBarStyle.sideLinks} to="javascript:void()" onClick={Logout}>Log out {user.email.split("@")[0]}</Link></li>
                  </div>
              </div>
            </div>
            <div className={SideBarStyle.profile}>
              <div className={`${SideBarStyle.inProfile} ${acctToggle ? SideBarStyle.inProfileActive : ""}`} onClick={toggleAcct}>
                <div className={SideBarStyle.mainProfile}>
                  <div className="accounts">
                    <div className="lAvatar">
                      <div className="avatar">
                          <img src={user.photoURL} alt="" />
                      </div>
                    </div>
                    <div className={`${SideBarStyle.user_name_M} user_name`}>
                      <span>{user.displayName}</span>
                      <span>@{user.email.split("@")[0]}</span>
                    </div>
                  </div>
                  <div className={SideBarStyle.right}>
                    <div className={SideBarStyle.dots}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;
