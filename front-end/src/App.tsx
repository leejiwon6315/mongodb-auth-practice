import React from "react";
import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.login_page}>
      <div className={style.login_wrapper}>
        <div className={style.login_box}>
          <div className={style.input_wrapper}>
            <p>ID</p>
            <input type="text" />
          </div>
          <div className={style.input_wrapper}>
            <p>PW</p>
            <input type="password" />
          </div>
          <div className={style.button_wrapper}>
            <button className={style.login_btn}>로그인</button>
            <button className={style.login_btn}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
