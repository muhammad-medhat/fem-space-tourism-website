import React, { useEffect, useState } from "react";
import * as dt from "../../data";

export const Crew = ({ name }) => {
  const { crew } = dt.default;
  console.log("dt.default", dt.default);
  console.log("crew", crew);

  useEffect(() => {}, []);
  return <main id="main" class="grid-container grid-container--crew"></main>;
};
