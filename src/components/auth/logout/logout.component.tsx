import React, { useEffect } from "react";
import { ImSpinner6 } from "react-icons/im";
import "./logout.scss";
import logoutLogo from "../../../assets/images/logout.png"


const Logout = (props) => {

  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("login_state", "LOGGED_OUT");
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("decoded_token");
      sessionStorage.removeItem("authData");
      props.history.push({
        pathname: '/',
      });
      window.location.reload();
    }, 2000)
  }, []);



  return (
  
      <div>
        <div className="row mt-0 d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 text-center logoutContainer">
            <img src={logoutLogo} width="80px" />
            <h2>Please Wait Logging you out...</h2>
            <p>Thanks for Using project header</p>
            {<ImSpinner6 className="logoutSpinner mt-4 mb-4" />}
          </div>
        </div>
      </div>
    


  );

}

export default Logout;