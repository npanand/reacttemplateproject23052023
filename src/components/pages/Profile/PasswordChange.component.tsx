import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, FormikHelpers, validateYupSchema } from "formik";
import * as Yup from 'yup';
import Notify, { AlertTypes } from "../../shared/notification/notification.component";
import ConfirmationDialog from "../../shared/confirmationDialog/confirmationDialog.component";

import profileBg from "../../../assets/images/pc.jpg";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

interface IpasswordPayload {

  newpassword?: string,
  oldpassword?: string
}

const validationSchema = Yup.object().shape({
  newpassword: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmpassword: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const validateConfirmPassword = (pass, value) => {

  let error = "";
  if (pass && value) {
    if (pass !== value) {
      error = "New Password and Confirm Password not matched";
    }
  }
  return error;
};
const PasswordChange = () => {
  let formikRef: any;
  // const [profileData, setProfileData] = useState({});
  // const [passwordChange, setpasswordChange] = React.useState(false);
  // const [currentaction, setAction] = React.useState({});
  // const [modalText, setmodalText] = React.useState("");


  const savePassword = (oldpass, newpass) => {
    console.log(oldpass);
    console.log(newpass);

  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="content-wrapper">
        <div className="inner-content form-content">



          {<Formik
            innerRef={input => {
              if (input) {
                formikRef = input;
              }
            }}
            initialValues={{ oldpassword: "", newpassword: "", confirmpassword: "" }}
            enableReinitialize
            // validationSchema={validationSchema}

            onSubmit={(
              values: any,
              { setSubmitting }: FormikHelpers<any>

            ) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 500);
            }}

          >
            {({
              values,
              errors,
              touched,
              dirty,
              setFieldValue,
              handleChange,
              handleBlur,
              handleSubmit,
              validateForm,
              isValid,
            }) => (
              <Form className="formSection mt-5">
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className='col-12 col-md-8 col-lg-6 pwd-change'>
                      <div className='tilte-section text-center'>
                        <h3 className='heading'>Change Profile Password</h3>
                      </div>
                      <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                        <label htmlFor="newpassword" className="col-form-label">Enter New Password</label>

                        {/* <Field type="password" className="form-control" name="newpassword" id="newpassword" placeholder="newpassword" />
                          {errors.newpassword && touched.newpassword ? (<div className="errors">{errors.newpassword}</div>) : null} */}
                        <Field id="password" type={showPassword ? 'text' : 'password'} name="password" className="form-control" placeholder="Enter Password" />
                        <span className="pwd-eye" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                        </span>
                        {errors.newpassword && touched.newpassword ? (<div className="errors">{errors.newpassword}</div>) : null}
                      </div>
                      <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                        <label htmlFor="conformpassword" className="col-form-label">Confirm New Password</label>

                        {/* <Field type="password" className="form-control" name="confirmpassword" id="confirmpassword" placeholder="confirmpassword" validate={value =>
                              validateConfirmPassword(values.newpassword, value)
                            } />
                            {errors.confirmpassword && touched.confirmpassword ? (<div className="errors">{errors.confirmpassword}</div>) : null} */}
                        <Field id="password" type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" className="form-control" placeholder="Re-Enter Password" />
                        <span className="pwd-eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                        </span>
                        {errors.confirmpassword && touched.confirmpassword ? (<div className="errors">{errors.confirmpassword}</div>) : null}
                      </div>
                      <div className="form-group mt-4 col-md-12 text-center">

                        <button id="save" disabled={(!isValid)} type="submit"
                          // onClick={(e: any) => { setpasswordChange(true); 
                          // setAction(values); setmodalText("Do you really want to change password?");  }}
                          className="themebtn-one">Save Password</button>

                      </div>
                    </div>
                  </div>
                </div>
              </Form>)}
          </Formik>
          }
        </div>
      </div>
    </>
  );
  //{() => { savePassword(values.oldpassword,values.newpassword) }}
}

export default PasswordChange;