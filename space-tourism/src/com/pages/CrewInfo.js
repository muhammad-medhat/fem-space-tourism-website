import React from "react";

export const CrewInfo = ({ role }) => {
  return (
    <article className="crew-details">
      <header className="flow--space-small">
        <h2 className="fs-600 ff-serif uppercase">{role.role}</h2>
        <p className="fs-700 uppercase ff-serif">{role.name}</p>
      </header>

      <p>{role.bio}</p>
    </article>
  );
};
