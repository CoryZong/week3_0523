import React from "react";

const RandomComponent = React.memo(() => {
  return (
    <>
      <p>{Math.random().toFixed(2)}</p>
    </>
  );
});

export default RandomComponent;
