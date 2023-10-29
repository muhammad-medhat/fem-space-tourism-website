import React, { useEffect, useState } from "react";
import * as dt from "../../data";

export const Technology = ({ name }) => {
  const { technology } = dt.default;
  console.log("dt.default", dt.default);
  console.log("technology", technology);

  useEffect(() => {}, []);
  return (
    <main id="main" class="grid-container grid-container--destination">
      technology
    </main>
  );
};
