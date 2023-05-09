import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import style from "./Themes.module.scss";
import Private from "./view/dashboard/private/Private";
import ComposeTweet from "./component/modals/compose/ComposeTweet";
import TwitterBlue from "./component/modals/twitterBlue/TwitterBlue";
import Home from "./view/home/Home";
import { auth, provider } from "./firebase";
import { signInWithPopup, onAuthStateChanged  } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  console.log(user);
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/home')
      } else {
        setUser(null);
        navigate('/'); // Navigate to "/" if the user is not authenticated
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
  <>
    <div className={theme === "light" ? style.light_theme : style.dark_theme}>
        <Routes>
          {user?.displayName ? (
            <Route exact path="/home" element={<Private user={user} toggleTheme={toggleTheme} theme={theme} />}>
              <Route path="compose/tweet" element={<ComposeTweet theme={theme} />} />
              <Route path="i/twitter_blue_sign_up" element={<TwitterBlue theme={theme} />} />
            </Route>
          ):(  
          <Route exact path="/" element={<Home signInWithGoogle={signInWithGoogle} toggleTheme={toggleTheme} theme={theme} />} />
          )}    
        </Routes>
    </div>
  </>
  );
}

export default App;
