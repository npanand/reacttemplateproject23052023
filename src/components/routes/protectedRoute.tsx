import React from "react";
import { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import  Auth  from "../auth/validateAuth";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                Auth.getAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                )
        }
    />
);

// const AdminRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={
//             props =>
//                 Auth.getAuth()  ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/"
//                         }}
//                     />
//                 )
//         }
//     />
// );


export  { PrivateRoute}