import React from "react";
// import Banner from "../components/Banner/Banner.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../components/Profile";
import Project from "../components/Project";
const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 "> 
      <Profile />
      <Project />
    </div>
  );
};

export default App;
