import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { registerLicense } from '@syncfusion/ej2-base'; 
// Registering Syncfusion license key

registerLicense('Mgo+DSMBaFt+QHFqUUdrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQllhTn5WckxiW3ZdeXA=;Mgo+DSMBPh8sVXJ1S0d+WFBPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpRcUVmXXZfcn1QQGQ=;ORg4AjUWIQA/Gnt2VFhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdEJjXHtXcXZcQWBY;MTg1NzAwMkAzMjMxMmUzMTJlMzQzMVRIb2R3RDVTWnQzS3VUS1RxMEZUS1ZFZ0svSTB0bysvMk9HcjljcDdqSGM9;MTg1NzAwM0AzMjMxMmUzMTJlMzQzMU0zVlZHcTZBYnpQYnBZVWwzRkMralNXck1WZlNVTjFnakZDT2V4N3cxUDg9;NRAiBiAaIQQuGjN/V0d+XU9Ad1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckdkWXpaeXVWRmVaUA==;MTg1NzAwNUAzMjMxMmUzMTJlMzQzMUt0NkFSdW5lbGJoaVRmNFVES0p1Vk53WEhXZkNQcjlDaGVKN25yRWh2S2c9;MTg1NzAwNkAzMjMxMmUzMTJlMzQzMWI4VWtFUnNZa0d2czEvWjYyb2pNUnRoQlFDajhvNjFCckpnamVFRGE2YVE9;Mgo+DSMBMAY9C3t2VFhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdEJjXHtXcXdURWVd;MTg1NzAwOEAzMjMxMmUzMTJlMzQzMU8xeGxlVjZoZnlNM3hrNENONThTaHdNQzdNYkZDSG8yanlScWdFRUxHMTQ9;MTg1NzAwOUAzMjMxMmUzMTJlMzQzMUV6MU1JbldpVjNrRUYwd0FsUmt4TnNrQnd1UUNQTVJ5elFTZ3lKMjh3Y0U9;MTg1NzAxMEAzMjMxMmUzMTJlMzQzMUt0NkFSdW5lbGJoaVRmNFVES0p1Vk53WEhXZkNQcjlDaGVKN25yRWh2S2c9');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
