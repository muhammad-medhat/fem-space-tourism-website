import React from "react";

export const InteractiveEkements = () => {
  return (
    <section className="flow" id="interactive-elements">
      <h2 className="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      {/* <!-- navigation --> */}
      <div>
        <nav>
          <ul
            className="primary-navigation  underline-indicators  flex"
            style={{ "--gap": "4rem" }}>
            <li className="active">
              <a className=" uppercase text-white" href="#">
                <span>01</span>
                Active
              </a>
            </li>
            <li>
              <a className="uppercase text-white" href="#">
                <span>02</span>
                Hovered
              </a>
            </li>
            <li>
              <a className="uppercase text-white" href="#">
                <span>03</span>
                Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex">
        <div style={{ marginTop: "5rem" }}>
          {/* <!-- explore button --> */}
          <a
            href="#"
            className="large-button uppercase ff-serif fs-600 text-dark bg-white">
            Explore
          </a>
        </div>

        <div style={{ marginBottom: "50vh" }}>
          {/* *************************** */}
          {/* <!-- Tabs --> */}
          <div className="tab-list underline-indicators flex">
            <button
              aria-selected="true"
              className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
              Moon
            </button>
            <button
              aria-selected="false"
              className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
              Mars
            </button>
            <button
              aria-selected="false"
              className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">
              Europa
            </button>
          </div>
          {/* <!-- Dots --> */}
          <div className="dot-indicators flex">
            <button aria-selected="true">
              <span className="sr-only">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
          </div>

          {/* <!-- Numbers --> */}
          <div className=" flex flex-column">
            <p className="medium-button  ff-serif fs-600 text-dark bg-white">
              1
            </p>
            <p className="medium-button  ff-serif fs-600 text-white bg-dark active">
              2
            </p>
            <p className="medium-button  ff-serif fs-600 text-white bg-dark">
              3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
