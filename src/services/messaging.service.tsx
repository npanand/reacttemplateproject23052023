import { BehaviorSubject, Subject } from 'rxjs';


const subscriber = new BehaviorSubject((sessionStorage.getItem("login_state") === "LOGGED_IN") ? "LOGGED_IN" : "");
const sidebarSubscriber = new BehaviorSubject<any>("");
const decodedTokenSubscriber = new BehaviorSubject<any>((sessionStorage.getItem("decoded_token") !== null) ? JSON.parse(sessionStorage.getItem("decoded_token") || "") : "");
const bookingHistorySubscriber = new BehaviorSubject<any>("");
const globalLoadingSubscriber = new Subject();


export {
    subscriber,
    sidebarSubscriber,
    decodedTokenSubscriber,
    globalLoadingSubscriber,
    bookingHistorySubscriber
}