"use client";

import AnimatedCursor from "react-animated-cursor";
const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={22}
      outerAlpha={0.2}
      innerScale={1}
      outerScale={2.8}
      color="30, 204, 102"
    />
  );
};

export default Cursor;
