import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authUser } from "../_actions/userAction";

function Auth(Component: any, option: null | false | true, adminRoute?: null) {
  const AuthCheck = () => {
    const dispatch: any = useDispatch();
    const history = useHistory();

    useEffect(() => {
      dispatch(authUser()).then((res: any) => {
        console.log(res);

        // if (!res.payload.isAuth) {
        if (option) {
          history.push("/login");
        }
        // } else {
        // if (adminRoute && res.payload.isAdmin) {
        // } else {
        //   if (!option) {
        //     history.push("/");
        //   }
        // }
        // }
      });
    }, []);
    return <Component />;
  };

  return AuthCheck;
}

export default Auth;
