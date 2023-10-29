import React from "react";

export const Colors = () => {
  return (
    <section id="colors" style={{ margin: "4rem 0" }}>
      <h2 className="numbered-title">
        <span className="text-accent">01</span> colors
      </h2>
      <div className="flex">
        <div className="box" style={{ flexGrow: 1 }}>
          <div className="bg-dark text-white ff-serif fs-500">#0B0D17</div>
          <p>
            <span className="text-accent">RGB</span> 11, 13, 23
          </p>
          <p>
            <span className="text-accent">HSL</span> 230°, 35%, 7%
          </p>
        </div>
        <div className="box" style={{ flexGrow: 1 }}>
          <div className="bg-accent text-dark ff-serif fs-500">#D0D6F9</div>
          <p>
            <span className="text-accent">RGB</span> 208, 214, 249
          </p>
          <p>
            <span className="text-accent">HSL</span> 231°, 77%, 90%
          </p>
        </div>
        <div className="box" style={{ flexGrow: 1 }}>
          <div className="bg-white text-dark ff-serif fs-500">#FFFFFF</div>
          <p>
            <span className="text-accent">RGB</span> 255, 255, 255
          </p>
          <p>
            <span className="text-accent">HSL</span> 0°, 0%, 100%
          </p>
        </div>
      </div>
    </section>
  );
};
