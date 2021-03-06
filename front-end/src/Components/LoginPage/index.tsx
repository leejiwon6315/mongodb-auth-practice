import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { LoginData } from "../../utils/dataBundle";
import style from "../../App.module.scss";

interface IProps {}

const LoginPage: React.FC<IProps> = () => {
  const [input, setInput] = useState({
    userId: "",
    password: "",
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={style.login_page} onClick={onSubmitHandler}>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          {LoginData.map((elem) => (
            <div className={style.input_wrapper}>
              <label>{elem.label}</label>
              <input
                type={elem.type}
                value={elem.value}
                onChange={inputHandler}
              />
            </div>
          ))}
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
