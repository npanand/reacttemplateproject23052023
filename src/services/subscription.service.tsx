import axios from 'axios';
import { globalLoadingSubscriber } from "./messaging.service";
//const SubscriptionUrl: string | undefined = process.env.REACT_APP_DeviceStatus_API;
const SubscriptionUrl="https://autosecsystemsubscription.azurewebsites.net";
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;',
        'Access-Control-Allow-Origin': '*',
       // 'Authorization': "Bearer " + sessionStorage.getItem('access_token')
    }
}

class SubscriptionSVC{
  
        constructor() {
            if (typeof window !== "undefined") {
                console.log("API endpoint :::");
                let decodedToken = sessionStorage.getItem('decoded_token');
                if (decodedToken) {
                    console.log(decodedToken);
                }
    
            }
        }

        GetSubscriptionData = async () => {
            try {
    
              
               
        
                if (typeof window !== "undefined") {
                    globalLoadingSubscriber.next(true);
                    return axios.get(SubscriptionUrl+"/api/Subscription/0")
                        .then((res) => {
                            console.log("RESPONSE RECEIVED: ", res);
                            globalLoadingSubscriber.next(false);
                            return res;
    
                        })
                        .catch((err) => {
                            console.log("AXIOS ERROR: ", err);
                            globalLoadingSubscriber.next(false);
                            return err;
    
                        })
                }
    
            } catch (ex) {
                console.log("login exception :" + ex);
            }
        }
        
       
    }
    export default new SubscriptionSVC();