import Header from "../header";
import Footer from "../footer";
import "./index.css";
import Navbar from "../navbar";

function LayoutLogin(props) {
  return (
    <div className="layoutlogin-container">
      <div className="header">
        <Header name={props.name} />
        <Navbar />
      </div>
      <div className="layoutlogin-body">{props.component}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default LayoutLogin;
