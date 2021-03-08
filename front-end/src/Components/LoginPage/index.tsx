import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import style from "../../App.module.scss";

interface IProps {}

const LoginPage: React.FC<IProps> = () => {
  const [UserId, setUserId] = useState("");
  const [Password, setPassword] = useState("");

  const onUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  };

  const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={style.login_page} onClick={onSubmitHandler}>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          <div className={style.input_wrapper}>
            <label>User ID</label>
            <input type="text" value="userId" onChange={onUserId} />
          </div>
          <div className={style.input_wrapper}>
            <label>Password</label>
            <input type="password" value="password" onChange={onPassword} />
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
};

export default withRouter(LoginPage);
