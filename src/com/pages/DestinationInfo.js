import React from "react";

export const DestinationInfo = ({ dest, name }) => {
  return (
    <article
      className="destination-info flow"
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
};
