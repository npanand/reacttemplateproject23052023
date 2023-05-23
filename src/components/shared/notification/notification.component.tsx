import { BehaviorSubject } from 'rxjs';
import { toast, Zoom } from 'react-toastify';
import React from 'react';

const notifications = new BehaviorSubject<any>(null);
const Id = "notify-alert-1";

class NotificationService {
    
    configuration = {
        position: toast.POSITION.TOP_RIGHT,
        toastId: Id,
        transition: Zoom
    }

    dismissNotification = () => {
        toast.dismiss();
    }
    sendNotification = (message: any, type: any) => {

        let header: string;

        const NotificationTemplate = () => (
            <div className="notificationContainer">
                <div className="notificationHeader">
                    {<i className={`icon${header}`}></i> }                   
                </div>

                <div className="notificationBody">
                    <div className="notification-title">{header}</div>
                    <div className="body">{message.toString()}</div>
                </div>
            </div>
        )

        try {
            if (message) {
                switch (type) {
                    case AlertTypes.success:
                        header = "success";
                        toast.success(<NotificationTemplate />, this.configuration);
                        break;
                    case AlertTypes.info:
                        header = "info";
                        toast.info(<NotificationTemplate />, this.configuration);
                        break;
                    case AlertTypes.warn:
                        toast.warn(message, this.configuration);
                        break;
                    case AlertTypes.error:
                        header = "error";
                        toast.error(<NotificationTemplate />, this.configuration);
                        break;
                    default:
                        toast(<NotificationTemplate />, this.configuration);
                        break;
                }
            }
        } catch (ex) {
            notifications.next((ex) => toast.error(ex.message, this.configuration));
        }
        notifications.next(null);
    }
}

const Notify = new NotificationService();

export default Notify;

export const AlertTypes = Object.freeze({
    success: Symbol('success'),
    info: Symbol('info'),
    warn: Symbol('warn'),
    error: Symbol('error')
});
