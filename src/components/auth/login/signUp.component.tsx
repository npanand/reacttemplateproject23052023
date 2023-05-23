import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { subscriber, decodedTokenSubscriber } from "../../../services/messaging.service";
import LoginSvc from "../../../services/auth.service";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Notify, { AlertTypes } from "../../shared/notification/notification.component";
import jwt_decode from "jwt-decode";
import "./signin.scss";
//import "./login.scss";

import headerLogo from "../../../assets/images/logo.svg";
import fbLogo from "../../../assets/images/Facebook.png";
import gLogo from "../../../assets/images/google.png";
import appleLogo from "../../../assets/images/apple.png";
import FormikControl from "../../shared/formControls/FormikControl";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


//interface -- login username/pwd
interface Credentials {
    email: string,
    userName: string,
    password: string,
    contactNumber: string,
    confrimPassword: string,
}

const Signup = () => {
    const signupSchema = Yup.object().shape({
        userName: Yup.string().required('User Name is required'),
        email: Yup.string().email('Invalid Email').required('Email id is required'),
        contactNumber: Yup.string().typeError("That doesn't look like a phone number").min(10).max(10).matches(/^[0-9]+$/, "Must contain only digits").required('A phone number is required'),
        password: Yup.string().min(6).max(15).required("Password required").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        confirmPassword: Yup.string()
            .min(8)
            .when("password", {
                is: (val: any) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                ),
            })
            .required("Confirm password required"),
    });

    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);






    return (
        <>


            <Formik
                initialValues={{
                    email: '',
                    userName: '',
                    password: '',
                    contactNumber: '',
                    confrimPassword: ''

                }}
                validationSchema={signupSchema}
                onSubmit={(
                    values: Credentials,
                    { setSubmitting }: FormikHelpers<Credentials>
                ) => {
                    setTimeout(() => {


                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);

                        history.push("/sign-in");
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
                                                    <h1>Sign up to </h1>
                                                    <span>Lorem ipsum is simply</span>
                                                    <p>If you don't have an account register
                                                        <br />You can <Link className="loginExists" to={"/sign-in"}>Login here !</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 g-0 login-wrap-bg">
                                        <div className="login-wrapper">
                                            <div className="img-logo">
                                                <img src={headerLogo} className="img-fluid" width="200px" alt="Logo" />
                                            </div>
                                            <div className="loginbox">
                                                <div className="w-100">
                                                    <h2>Sign Up</h2>
                                                    <div className="form-group">
                                                        <FormikControl
                                                            control="input"
                                                            name="email"
                                                            // label="Email"
                                                            labelClass="col-form-label "
                                                            placeholder="Enter Email"
                                                            className="form-control"
                                                        />

                                                    </div>
                                                    <div className="form-group">
                                                        <FormikControl
                                                            control="input"
                                                            name="userName"
                                                            // label="User Name"
                                                            labelClass="col-form-label "
                                                            placeholder="Enter User Name"
                                                            className="form-control"
                                                        />

                                                    </div>
                                                    <div className="form-group">
                                                        <FormikControl
                                                            control="input"
                                                            name="contactNumber"
                                                            // label="Contact Number"
                                                            labelClass="col-form-label "
                                                            placeholder="Enter Contact Number"
                                                            className="form-control"
                                                        />

                                                    </div>
                                                    <div className="form-group">
                                                        <Field id="password" type={showPassword ? 'text' : 'password'} name="password" className="form-control" placeholder="Enter Password" />
                                                        <span className="pwd-eye" onClick={() => setShowPassword(!showPassword)}>
                                                            {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                                        </span>
                                                        {errors.password && touched.password ? (<div className="errors">{errors.password}</div>) : null}
                                                        {/* <FormikControl
                                                            control="input"
                                                            //type="password"
                                                            name="password"
                                                            // label="Password"
                                                            labelClass="col-form-label "
                                                            placeholder="Enter Password"
                                                            className="form-control"
                                                        /> */}

                                                    </div>
                                                    <div className="form-group mt-4">
                                                        <Field id="password" type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" className="form-control" placeholder="Re-Enter Password" />
                                                        <span className="pwd-eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                            {showConfirmPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                                        </span>
                                                        {errors.password && touched.password ? (<div className="errors">{errors.password}</div>) : null}
                                                        {/* <FormikControl
                                                            control="input"
                                                            //type="password"
                                                            name="confirmPassword"
                                                            // label="Confirm Password"
                                                            labelClass="col-form-label "
                                                            placeholder="Re-Enter Password"
                                                            className="form-control"
                                                        /> */}
                                                        <button type="submit" className="btn theme-btn btn-lg btn-block btn-login form-group d-grid gap-2 d-md-block mt-4 col-md-12 mt-4" >Register </button>

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

export default Signup;