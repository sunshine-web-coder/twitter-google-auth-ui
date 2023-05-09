import React, { useState } from "react";
import styles from "./Home.module.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MobileHeader from "../../component/mobileHeader/MobileHeader";
import MenuDrawer from "../../component/menuDrawer/MenuDrawer";
import MobileBottomMenu from "../../component/mobileBottomMenu/MobileBottomMenu";
import ExploreSection from "../../component/exploreSection/ExploreSection";
import HomeSideBar from "../../component/homeSidebar/HomeSideBar";
import AuthSection from "../../component/authSection/AuthSection";

const Home = ({ toggleTheme, theme, signInWithGoogle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuToggleClose = () => {
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('compose/tweet');
  };

  return (
    <div className={styles.home_page}>
      {/* <MobileHeader handleMenuToggleOpen={handleMenuToggleOpen} /> */}
      <MenuDrawer
        toggleTheme={toggleTheme}
        theme={theme}
        isMenuOpen={isMenuOpen}
        handleMenuToggleClose={handleMenuToggleClose}
      />
      <div className={styles.inner_home_page}>
        <HomeSideBar toggleTheme={toggleTheme} theme={theme} />
        <ExploreSection theme={theme} />
        <AuthSection signInWithGoogle={signInWithGoogle} theme={theme} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.inner_bottom}>
          <div className={styles.left}>
            <p>Don’t miss what’s happening</p>
            <p>People on Twitter are the first to know.</p>
          </div>
          <div className={styles.right}>
            <Link to="">Log in</Link>
            <Link to="">Sign up</Link>
          </div>
        </div>
      </div>
      {/* <MobileBottomMenu theme={theme} /> */}
      <Outlet />
    </div>
  );
};

export default Home;
