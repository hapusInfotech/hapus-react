import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Components/Loader";
import TopBar from "./Components/TopBar";
import MainNavbar from "./Components/MainNavbar";
import MainFooter from "./Components/MainFooter";
import NewsLetter from "./Components/NewsLetter";
import HomeBanner from "./Components/HomeBanner";
import OurProjects from "./Components/OurProjects";
import Testimonial from "./Components/Testimonial";
import OurPortfolio from "./Components/Portfolio/OurPortfolio";
import WorkProcess from "./Components/WorkProcess";
import Counter from "./Components/Counter";

function App() {
  const [loading, setLoading] = useState(true);
  const [componentsReady, setComponentsReady] = useState({
    homeBanner: false,
    workProcess: false,
    counter: false,
    ourProjects: false,
    testimonial: false,
    newsletter: false,
  });

  const checkAllComponentsReady = () => {
    const allReady = Object.values(componentsReady).every(Boolean);
    if (allReady) setLoading(false);
  };

  useEffect(() => {
    checkAllComponentsReady();
  }, [componentsReady]);

  return (
    <>
      {loading && <Loader />}
      <header>
        <TopBar />
        <MainNavbar />
      </header>
      <HomeBanner
        id="42"
        onReady={() =>
          setComponentsReady((prevState) => ({
            ...prevState,
            homeBanner: true,
          }))
        }
      />
      <WorkProcess
        id="41"
        onReady={() =>
          setComponentsReady((prevState) => ({
            ...prevState,
            workProcess: true,
          }))
        }
      />
      <Counter
        id="43"
        onReady={() =>
          setComponentsReady((prevState) => ({ ...prevState, counter: true }))
        }
      />
      <OurProjects
        onReady={() =>
          setComponentsReady((prevState) => ({
            ...prevState,
            ourProjects: true,
          }))
        }
      />
      <Testimonial
        onReady={() =>
          setComponentsReady((prevState) => ({
            ...prevState,
            testimonial: true,
          }))
        }
      />
      <NewsLetter
        id="31"
        onReady={() =>
          setComponentsReady((prevState) => ({
            ...prevState,
            newsletter: true,
          }))
        }
      />
      <footer role="contentinfo" className="mt-auto">
        <MainFooter />
      </footer>
    </>
  );
}

export default App;
