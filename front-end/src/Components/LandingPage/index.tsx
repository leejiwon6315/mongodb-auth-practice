import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";

function LandingPage() {
  const history = useHistory();

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        history.push("/login");
      } else {
        alert("failed");
      }
    });
  };

  return (
    <div>
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
