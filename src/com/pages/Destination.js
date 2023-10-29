import React, { useEffect, useState } from "react";
import * as dt from "../../data";
import { DestinationInfo } from "./DestinationInfo";

export const Destination = ({ name }) => {
  const { destinations } = dt.default;

  const [destName, setDestName] = useState("Moon");
  const [dest, setDest] = useState({});
  const selectDest = (name) => {
    setDest(destinations.find((d) => d.name === name));
  };

  console.log("dest", dest);
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
      {/* <picture>
      <source srcSet={dest?.images?.png} type="image/png">
      <source srcSet={dest?.images?.webp} type="image/webp">
      <img src={dest?.images?.png} alt={dest.name} />
    </picture> */}
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
      {dest ? (
        <DestinationInfo dest={dest} name={dest.name} />
      ) : (
        <p>Please select your destination</p>
      )}
    </main>
  );
};
