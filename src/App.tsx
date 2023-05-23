import React, { useEffect, useState, Suspense, createContext, lazy, useContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, BrowserRouter } from "react-router-dom";
import { subscriber, sidebarSubscriber, decodedTokenSubscriber, globalLoadingSubscriber } from "./services/messaging.service";
import Spinner from "./Utils/Loader/loader.component";
import { RBACContext, rbacRules } from "./Utils/rbacProvider";

const Signup = lazy(() => import("./components/auth/login/signUp.component"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const LoginLayout = lazy(() => import("./layouts/loginLayout"));
const Footer = lazy(()=>import("./components/shared/footer.component"));


function App(props) {

 
  const [isloggedIn, setisloggedIn] = useState(false);

  const [isPageLoaded, setisPageLoaded] = useState(false);

  const [showGlobalLoader, setisGlobalLoader] = useState(false);

  const [rules, setRules] = useState([{ FeatureId: 0, FeatureName: "" }]);


  useEffect(() => {

    globalLoadingSubscriber.subscribe((_loadState) => {
      console.log(_loadState);
      if (_loadState === true) setisGlobalLoader(true); else setisGlobalLoader(false);
    });
  
    subscriber.subscribe((_LOG_FLAG) => {
      if (_LOG_FLAG === "LOGGED_IN") {
        setisloggedIn(true);
        
      }



    });
   
    decodedTokenSubscriber.subscribe((token) => {

      if (token) {

        rbacRules.Roles.filter(role => role.RoleId === parseInt(token.UserRoleId)).map(role => {
          setRules(role.Features);
        });

      }
      //setRules();
      setisPageLoaded(true);
    });
  }, []);

 

  if (isPageLoaded) {
    return (
      <BrowserRouter>

        {/* global loader initialized here */}

        <Spinner isLoading={showGlobalLoader} type="global" />
        <Suspense fallback={<div className="divLoader">
          <Spinner isLoading={true} type="global" />
        </div>}>
          <RBACContext.Provider value={{ rules, setRules }}>
           
            <div className={(isloggedIn) ? "App " : "App"} >

              <>
                <ToastContainer autoClose={3500} pauseOnFocusLoss={false} newestOnTop={true} className="toast-container" />
              </>
              <Switch>
                <Route path="/sign-in" render={(props) => <LoginLayout isloggedIn={isloggedIn}  {...props} />} />
                <Route path="/MainLayout" render={(props) => <MainLayout isloggedIn={isloggedIn}  {...props} />} />
                {/*<Route path="/signup"    render={(props)=><Signup/> }/>*/}
                <Redirect from="/" to="/sign-in" />


              </Switch>


            </div>
          </RBACContext.Provider>
          <Footer/>
        </Suspense>
        
      </BrowserRouter>
    );
  } else {
    return (<div className="loaderSpin">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>);
  }
}


export default App;