"use client";

import AnimatedCursor from "react-animated-cursor";
const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={13}
      outerSize={50}
      outerAlpha={0.19}
      outerScale={1.5}
      innerScale={1}
      color="30, 204, 102"
    />
  );
};

export default Cursor;
