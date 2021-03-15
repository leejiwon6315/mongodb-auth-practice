import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/userAction";
import style from "../../App.module.scss";

function RegisterPage() {
  const [UserId, setUserId] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const dispatch: any = useDispatch();
  const history = useHistory();

  const onUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  };

  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (Password === ConfirmPassword) {
      let body = {
        userId: UserId,
        name: Name,
        password: Password,
      };

      dispatch(registerUser(body))
        .then((res: any) => {
          alert("done");
          history.push("/login");
        })
        .catch((err: any) => console.log(err));
    } else alert("nope");
  };

  return (
    <form className={style.login_page} onSubmit={onSubmitHandler}>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          <div className={style.input_wrapper}>
            <label>Name</label>
            <input type="text" value={Name} onChange={onName} />
          </div>
          <div className={style.input_wrapper}>
            <label>User ID</label>
            <input type="text" value={UserId} onChange={onUserId} />
          </div>
          <div className={style.input_wrapper}>
            <label>Password</label>
            <input type="password" value={Password} onChange={onPassword} />
          </div>
          <div className={style.input_wrapper}>
            <label>Confirm Password</label>
            <input
              type="password"
              value={ConfirmPassword}
              onChange={onConfirmPassword}
            />
          </div>

          <div className={style.button_wrapper}>
            <button className={style.login_btn} type="submit">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default withRouter(RegisterPage);
