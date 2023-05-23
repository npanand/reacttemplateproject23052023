import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { subscriber, decodedTokenSubscriber } from "../../../services/messaging.service";
import LoginSvc from "../../../services/auth.service";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Notify, { AlertTypes } from "../../shared/notification/notification.component";
import jwt_decode from "jwt-decode";
import "./signin.scss";
import fbLogo from "../../../assets/images/Facebook.png";
import gLogo from "../../../assets/images/google.png";
import appleLogo from "../../../assets/images/apple.png";
import FormikControl from "../../shared/formControls/FormikControl";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/all";

//interface -- login username/pwd
interface Credentials {
    email: string;
    password: string;
    captcha?: string;
}

const Login = () => {

    const history = useHistory();



    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),



    });
    const redirectAfterLogin = (_token) => {

        subscriber.next("LOGGED_IN");
        decodedTokenSubscriber.next(jwt_decode(_token.access_token));
        sessionStorage.setItem("login_state", "LOGGED_IN");
        sessionStorage.setItem("access_token", _token.access_token);
        history.push({
            pathname: '/MainLayout/Page1',
        });
    }

    const processAuthentication = (email, password) => {

        if (sessionStorage.getItem("authData") === null) {
            LoginSvc.getJWTtoken(email, password).then(_token => {
                if (_token !== '' && _token !== undefined) {
                    let decodedToken: object = jwt_decode(_token.access_token);
                    sessionStorage.setItem("uid", decodedToken["sub"]);
                    setTimeout(() => {
                        redirectAfterLogin(_token);
                    })

                } else {
                    Notify.sendNotification(
                        "Invalid Username or Password, please try again!",
                        AlertTypes.error
                    );
                }
            }).catch(err => {
                console.log(err);
            });
        } else {
            redirectAfterLogin(sessionStorage.getItem("authData"))
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>


            <Formik
                initialValues={{
                    password: '',
                    email: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(
                    values: Credentials,
                    { setSubmitting }: FormikHelpers<Credentials>
                ) => {
                    setTimeout(() => {


                        processAuthentication(values.email, values.password)
                        setSubmitting(false);

                    }, 500);
                }}
            >
                {({

                    errors,
                    touched,
                    isValid,
                    setFieldValue,
                }) => (
                    <Form>
                        <section className="signup">
                            <div className="container-fluid px-4">
                                <div className="row align-items-center justify-content-center g-3 my-2">
                                    <div className="col-sm-12 col-md-6 col-lg-6 login-bg m-0">
                                        <div className="welcome-login">
                                            <div className="login-banner">

                                                <div className="login-text text-left">
                                                    <h1>Sign in to </h1>
                                                    <span>Lorem ipsum is simply</span>
                                                    <p>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry.</p>
                                                   {/* <p>If you don't have an account register
                                                         <br />You can <Link className="loginExists" to={"/signup"}>Registration Here!</Link></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 g-0 login-wrap-bg">
                                        <div className="login-wrapper">
                                          
                                            <div className="loginbox">
                                                <div className="w-100">
                                                    <h2>Sign in</h2>
                                                    <div className="form-group">
                                                        <FormikControl
                                                            control="input"
                                                            // type="email"
                                                            name="email"
                                                            // label="Password"
                                                            labelClass="col-form-label "
                                                            placeholder="Enter Email"
                                                            className="form-control"
                                                        />



                                                        {/* <Field id="email" type="email" name="email" className="form-control" placeholder="Enter email"/>

                                                        {errors.email && touched.email ? (<div className="errors">{errors.email}</div>) : null} */}

                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <Field id="password" type={showPassword ? 'text' : 'password'} name="password" className="form-control" placeholder="Enter Password" />
                                                        <span className="pwd-eye" onClick={() => setShowPassword(!showPassword)}>
                                                            {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                                        </span>
                                                        {errors.password && touched.password ? (<div className="errors">{errors.password}</div>) : null}
                                                        {/* <FormikControl
                                                            control="input"
                                                            // type="password"
                                                            name="password"
                                                            // label="Password"
                                                            labelClass="col-form-label "
                                                            placeholder="Enter Password"
                                                            className="form-control"
                                                        /> */}

                                                        <a className="forgot">Forgot Password?</a>

                                                        <button type="submit" className="btn theme-btn btn-lg btn-block btn-login form-group d-grid gap-2 d-md-block mt-4 col-md-12 mt-4" >Login </button>

                                                    </div>
                                                    <div className="others">
                                                        <p>Or Continue With</p>
                                                        <ul>
                                                            <li><a><img src={fbLogo} /></a></li>
                                                            <li><a><img src={gLogo} /></a></li>
                                                            <li><a><img src={appleLogo} /></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Form>)}
            </Formik>
        </>

    );

}

export default Login;