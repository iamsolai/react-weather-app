import React, { useContext } from "react";
import { PropsContext } from "../App";

const CoordinatesComponent = () => {
  const { lat, log } = useContext(PropsContext);
  return (
    <>
      <div className="cord">
        <div>
          <span className="lat">Latitude </span>
          <span className="text">{lat}</span>
        </div>
        <div>
          <span className="log">Longitude </span>
          <span className="text">{log}</span>
        </div>
      </div>
    </>
  );
};

export default CoordinatesComponent;
