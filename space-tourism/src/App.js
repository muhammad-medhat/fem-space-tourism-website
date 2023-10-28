import "./css/App.css";
import { DesignSystem } from "./com/DesignSystem";
import { MainNav } from "./com/MainNav";
import "./css/pages.css";
import { Destination } from "./com/pages/Destination";
import { Route, Routes } from "react-router-dom";
import { Home } from "./com/pages/Home";
import { Crew } from "./com/pages/Crew";
import { Technology } from "./com/pages/Technology";

function App() {
  return (
    <>
      <a class="skip-to-content" href="#main">
        Skip to content
      </a>
      {/* <Destination /> */}
      {/* <div className="home container bg-dark text-white"> */}
      <div>
        {/* <DesignSystem /> */}
        <MainNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        {/* <main id="main" className="grid-container grid-container--home ">
          <div>
            <h1 className="ff-sans-cond fs-500 text-accent uppercase">
              So, you want to travel to{" "}
              <span className="fs-900 ff-serif text-white block">Space</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <a
              href="#"
              className="large-button uppercase ff-serif fs-600 text-dark bg-white">
              Explore
            </a>
          </div>
        </main> */}
      </div>
    </>
  );
}

export default App;
