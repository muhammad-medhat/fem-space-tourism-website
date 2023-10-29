import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.body.classList = "home";
  }, []);
  return (
    <div className="container bg-dark-xxx text-white">
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
};
