import React from "react";
import { withRouter } from "react-router-dom";

interface IProps {}

const LandingPage: React.FC<IProps> = () => {
  const onClickHandler = () => {};

  return (
    <div>
      <h2>시작페이지</h2>
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
};

export default withRouter(LandingPage);
