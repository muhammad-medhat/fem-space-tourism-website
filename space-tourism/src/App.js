import "./css/App.css";
import { DesignSystem } from "./com/DesignSystem";

function App() {
  return (
    <div className="container bg-dark text-white">
      {/* <!-- -----------------------------------------
          CHALLENGES
          Use the utility classess we created to: 
            1. Hold the content in the middle of the page
            2. Wrap the content in either a flex or grid 
            3. Try changing the gap variable without modifying the original utlitiy class
            4. Use the .sr-only class on a div and see what happens
          ------------------------------------------ -->
         */}
      <h1 className="capitalize">react app</h1>
      <DesignSystem />
    </div>
  );
}

export default App;
