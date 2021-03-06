import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { RegisterData } from "../../utils/dataBundle";
import style from "../../App.module.scss";

interface IProps {}

const RegisterPage: React.FC<IProps> = () => {
  const [input, setInput] = useState({
    name: "",
    userId: "",
    password: "",
    confirmPassword: "",
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
    <form className={style.login_page} onSubmit={onSubmitHandler}>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          {RegisterData.map((elem) => (
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
              회원가입
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default withRouter(RegisterPage);
