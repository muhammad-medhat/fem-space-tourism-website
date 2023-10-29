import React, { useEffect, useState } from "react";
import * as dt from "../../data";
import "./crew.css";
import { CrewInfo } from "./CrewInfo";

export const Crew = ({ name }) => {
  const { crew } = dt.default;
  console.log("dt.default", dt.default);
  console.log("crew", crew);
  const [roleName, setRoleName] = useState("Commander");
  const [role, setRole] = useState({});
  const selectRole = (role) => {
    setRole(crew.find((d) => d.role === role));
  };

  console.log("role ======== ", role);
  useEffect(() => {
    document.body.classList = "crew";
    // debugger;
    selectRole(roleName);
  }, []);
  return (
    <main id="main" class="grid-container grid-container--crew flow">
      <h1 class="numbered-title">
        <span aria-hidden="true">02</span> meet our crew
      </h1>
      <div className="dot-indicators flex ">
        {crew.map((el) => {
          // debugger;
          return (
            <>
              <button
                aria-selected={role.role === el.role}
                onClick={() => selectRole(el.role)}
                className="">
                <span className="sr-only">{el.role}</span>
              </button>
            </>
          );
        })}
      </div>
      <CrewInfo role={role} />
      <img src={role?.images?.png} alt={role.name} />
    </main>
  );
};
