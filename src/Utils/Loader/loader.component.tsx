import React from "react";
import spinner from "./spinner.module.scss";

const Spinner = (props: any) => {
  const spinnerState = {
    isLoading: props.isLoading === undefined ? true : props.isLoading,
    type: props.type,
  };

  const globalSpinner = (
    <div
      className={
        spinner.overlay +
        " " +
        (spinnerState.isLoading
          ? +" " + spinner.showOverlay
          : " " + spinner.hideOverlay)
      }
    >
     
      <div className={spinner.ldsEllipsis}>Loading...<div></div><div></div><div></div><div></div></div>
    </div>
  );

  const inlineSpinner = (
    <div>
      <div className={spinner.inlineLoading}></div>
    </div>
  );

  if (spinnerState.type == "inline") {
    return inlineSpinner;
  } else {
    return globalSpinner;
  }
};

export default Spinner;
