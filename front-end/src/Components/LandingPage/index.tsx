import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../_actions/userAction";

function LandingPage() {
  const dispatch: any = useDispatch();
  const history = useHistory();

  const onClickHandler = () => {
    dispatch(logoutUser())
      .then((res: any) => {
        console.log(res);
        if (res.payload.sucess) {
          history.push("/login");
        } else {
          alert("logout failed");
        }
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div>
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
