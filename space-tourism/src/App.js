import "./css/App.css";
import { DesignSystem } from "./com/DesignSystem";
import { MainNav } from "./com/MainNav";
import "./css/pages.css";

function App() {
  return (
    <div className="home container bg-dark text-white">
      {/* <!-- -----------------------------------------
          CHALLENGES
          Use the utility classess we created to: 
            1. Hold the content in the middle of the page
            2. Wrap the content in either a flex or grid 
            3. Try changing the gap variable without modifying the original utlitiy class
            4. Use the .sr-only class on a div and see what happens
          ------------------------------------------ -->
         */}
      {/* <h1 className="capitalize">react app</h1> */}
      {/* <DesignSystem /> */}
      <MainNav />
      <div className="grid-container grid-container--home ">
        <div>
          <h1 className="ff-sans-cond fs-500 text-accent uppercase">
            So, you want to travel to{" "}
            <span className="fs-900 ff-serif text-white block">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="#"
            className="large-button uppercase ff-serif fs-600 text-dark bg-white">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
