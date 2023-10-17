import React from "react";

export const Typography = () => {
  return (
    <section id="typography">
      <h2 className="numbered-title">
        <span>02 </span>Typography
      </h2>
      <div className="flex">
        <div
          className="flow"
          style={{
            flexBasis: "100%",
            "--flow-space": "2rem",
          }}>
          <div>
            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
            <p className="uppercase ff-serif fs-900">Earth</p>
          </div>
          <div>
            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
            <p className="uppercase ff-serif fs-800">Venus</p>
          </div>
          <div>
            <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
            <p className="uppercase ff-serif fs-700">Jupiter & Saturn</p>
          </div>
          <div>
            <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
            <p className="uppercase ff-serif fs-600">
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p className="text-accent">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p className="uppercase text-accent ff-sans-cond letter-spacing-1 fs-500">
              So, you want to travel to space
            </p>
          </div>
        </div>

        <div
          className="flow"
          style={{
            flexBasis: " 100%",
            "--flow-space": "2rem",
          }}>
          <div>
            <p className="text-accent">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p className="uppercase text-accent ff-serif  fs-400">384,400 km</p>
          </div>
          <div>
            <p className="text-accent">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">
              Avg. Distance
            </p>
          </div>
          <div>
            <p className="text-accent">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">
              Europa
            </p>
          </div>
          <div>
            <p className="text-accent">Body Text</p>
            <p className="ff-sans-cond">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
