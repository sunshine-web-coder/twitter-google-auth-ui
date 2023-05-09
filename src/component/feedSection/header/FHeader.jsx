import React, { useState } from "react";
import FHeaderStyle from "./FHeader.module.scss";

export const FHeader = ({theme}) => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    // Perform any other functionality associated with the button click
  };
  return (
    <div className={theme === "light" ? FHeaderStyle.light_theme : FHeaderStyle.dark_theme}>
      <div className={FHeaderStyle.FHeader}>
        <div className={FHeaderStyle.fHtop}>
          <span>Home</span>
        </div>
        <div className={FHeaderStyle.fHbottom}>
          <button
            className={activeButton === "button1" ? FHeaderStyle.active : ""}
            onClick={() => handleClick("button1")}
          >
            For you
          </button>
          <button
            className={activeButton === "button2" ? FHeaderStyle.active : ""}
            onClick={() => handleClick("button2")}
          >
            Following
          </button>
        </div>
      </div>
    </div>
  );
};
