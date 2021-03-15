import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import style from "../../App.module.scss";
import { loginUser } from "../../_actions/userAction";

function LoginPage() {
  const [UserId, setUserId] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  const dispatch: any = useDispatch();

  const onUserIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  };

  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      userId: UserId,
      password: Password,
    };

    dispatch(loginUser(body))
      .then((res: any) => {
        console.log(res);

        if (res.payload.loginSuccess) {
          history.push("/schedule");
        } else {
          alert(res.payload.message);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <form className={style.login_page} onSubmit={onSubmitHandler}>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          <div className={style.input_wrapper}>
            <label>User ID</label>
            <input type="text" value={UserId} onChange={onUserIdHandler} />
          </div>
          <div className={style.input_wrapper}>
            <label>Password</label>
            <input
              type="password"
              value={Password}
              onChange={onPasswordHandler}
            />
          </div>
          <div className={style.button_wrapper}>
            <button className={style.login_btn} type="submit">
              로그인
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default withRouter(LoginPage);
