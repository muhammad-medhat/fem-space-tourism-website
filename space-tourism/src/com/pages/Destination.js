import React, { useEffect, useState } from "react";
import * as dt from "../../data";

export const Destination = ({ name }) => {
  const { destinations } = dt.default;
  // console.log("dt.default", dt.default);
  // console.log("destinations", destinations);
  const [destName, setDestName] = useState("Moon");
  const [dest, setDest] = useState({});
  const selectDest = (name) => {
    setDest(destinations.find((d) => d.name === name));
  };
  const getInfo = (name) => (
    <article
      className="destination-info"
      style={{ display: name === dest.name ? "block" : "none" }}>
      <h2 className="fs-800 uppercase ff-serif">{dest.name}</h2>
      <p>{dest.description}</p>
      <div className="destination-meta flex">
        <div>
          <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
          <p class="fs-500 ff-serif uppercase">{dest.distance}</p>
        </div>
        <div>
          <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
          <p class="fs-500 ff-serif uppercase">{dest.travel}</p>
        </div>
      </div>
    </article>
  );
  console.log("dddddddddddddd", dest);
  useEffect(() => {
    document.body.classList = "destination";
    // debugger;
    selectDest(destName);
  }, []);
  return (
    <main id="main" class="grid-container grid-container--destination flow">
      <h1 class="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <img src={dest?.images?.png} alt={dest.name} />
      <div className="tab-list underline-indicators flex bg-transparent">
        {destinations.map((el) => {
          // debugger;
          return (
            <>
              <button
                aria-selected={dest == el.name}
                onClick={() => selectDest(el.name)}
                className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2">
                {el.name}
              </button>
            </>
          );
        })}
      </div>{" "}
      <>{dest ? getInfo(dest.name) : <p>Please select your destination</p>}</>
    </main>
  );
};
