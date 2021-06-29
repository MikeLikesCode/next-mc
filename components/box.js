import React from "react";

const Box = () => {
  return (
    <mesh>
    <boxBufferGeometry attach="geometry"/>
    <meshLambertMaterial attach="material" color="pink"/>
  </mesh>
  );
};

export default Box;