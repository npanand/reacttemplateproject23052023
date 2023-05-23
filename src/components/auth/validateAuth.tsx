import { subscriber } from "../../services/messaging.service";


const Auth = {


  isAuthenticated: false,

  authenticate() {
    this.isAuthenticated = true;
  },

  getAuth() {

    subscriber.subscribe((_LOG_FLAG) => {

      if (_LOG_FLAG === "LOGGED_IN" && sessionStorage.getItem("login_state") === "LOGGED_IN") {
        //console.log(sessionStorage.getItem("decoded_token"));
        this.authenticate();

      }

    });



    return this.isAuthenticated;
  }
};

export default Auth;