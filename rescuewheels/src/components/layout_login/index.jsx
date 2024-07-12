import Header from "../header";
import Footer from "../footer";
import "./index.css";

function LayoutLogin(props) {
  return (
    <div className="layoutlogin-container">
      <div className="layoutlogin-body">{props.component}</div>
    </div>
  );
}

export default LayoutLogin;
