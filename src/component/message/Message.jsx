import React, { useState } from "react";
import MessageStyle from "./Message.module.scss";

export const Message = ({theme}) => {
    const [showMessageBox, setShowMessageBox] = useState(false);

  const toggleMessageBox = () => {
    setShowMessageBox(!showMessageBox);
  };
  return (
    <div className={theme === "light" ? MessageStyle.light_theme : MessageStyle.dark_theme}>
      <div className={MessageStyle.message}>
        <div className={MessageStyle.message_title}>
          <div className={MessageStyle.left} onClick={toggleMessageBox}>
              <span>Messages</span>
          </div>
          <div className={MessageStyle.right}>
            <div className={MessageStyle.exPjjY6}>
                <span className={MessageStyle.exPjjY6m7}>New message</span>
              <div className={`${MessageStyle.messageBox} sBut47378`}>
                  <div className={`${MessageStyle.inner_messageBox} inner_sBut47378`}>
                      <div className={`${MessageStyle.inner_messageBoxSvg} fp32868bIcon msY7hicon`}>
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="r_feed_icon"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g></svg>
                      </div>
                  </div> 
              </div>
            </div>
              <div className={MessageStyle.exPjjY6}>
                <span>Expand</span>
                <div className={`${MessageStyle.messageBox} sBut47378`} onClick={toggleMessageBox} title="Expand">
                  <div className={`${MessageStyle.inner_messageBox} inner_sBut47378`}>
                      <div className={`${MessageStyle.inner_messageBoxSvg} fp32868bIcon msY7hicon`}>
                          <svg viewBox="0 0 24 24" aria-hidden="true" className={showMessageBox ? "r_feed_icon_toggle" : "r_feed_icon"}><g><path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z"></path></g></svg>
                      </div>
                  </div> 
                </div>  
              </div>
              
          </div>
        </div>
        <div className={`${MessageStyle.message_box_container} 
        ${showMessageBox 
        && MessageStyle.show_message_box_container}`}>
          <div className={MessageStyle.inner_message_box_container}>

          </div>
        </div>
      </div>  
    </div>
    
  );
}; 
