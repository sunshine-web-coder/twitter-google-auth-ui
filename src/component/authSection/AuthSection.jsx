import React, { useEffect, useState } from "react";
import styles from "./AuthSection.module.scss"
import { Footer } from "../footer/Footer";
import Auth from "./auth/Auth";

const AuthSection = ({theme, signInWithGoogle}) => {
  return (
      <div className={styles.auth_section}>
        <div className={styles.dhdhs8788}>
          <Auth signInWithGoogle={signInWithGoogle} theme={theme} />
          <Footer />
        </div>
      </div>
  );
};

export default AuthSection;
