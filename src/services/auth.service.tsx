import axios from 'axios';
import { globalLoadingSubscriber } from "./messaging.service"

const authUrl: string | undefined = process.env.REACT_APP_LOGIN_API;
const LoginSvc = {

      getJWTtoken: async (email, password) => {

            try {
                  globalLoadingSubscriber.next(true);
                  const response = await axios.post(authUrl + "/connect/token",

                        new URLSearchParams({
                              "client_id": "cswebapp",
                              "grant_type": "password",
                              "scope": "AdministratorClientId_api offline_access",
                              "username": email,
                              "password": password
                        }));

                  sessionStorage.setItem("authData", JSON.stringify(response.data));
                  globalLoadingSubscriber.next(false);
                  return response.data;

            } catch (ex) {
                  console.log("login exception :" + ex);
                  globalLoadingSubscriber.next(false);
            }

      }

}


export default LoginSvc;
