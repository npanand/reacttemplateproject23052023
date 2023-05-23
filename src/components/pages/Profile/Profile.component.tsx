import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from 'yup';
import Notify, { AlertTypes } from "../../shared/notification/notification.component";
import FormikControl from '../../shared/formControls/FormikControl';
import proImg from "../../../assets/images/sub.png";


interface IuserPayload {
  firstName: string,
  lastName: string,
  email: string,
  password?: string,
  phoneNumber: number,
}


const SignupSchema = Yup.object().shape({

  userInfo: Yup.string()
    .required('Required'),

  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),

  phoneNumber: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),

  companyId: Yup.string().required('A Companyid is required'),

});
const MyProfile = () => {


  var initValues: IuserPayload = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: 0,
  };

  var saveDataFormat: IuserPayload = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: 0,
  }
  const [profileData, setProfileData] = useState({});
  const [formState, setformState] = useState<any>(initValues);
  //const [companyName,setCompanyName]= useState<string>("");
  



  const copyfromObj = (sourceObj, destinationObj) => {
    return Object.keys(sourceObj)
      .reduce((init, key) => Object.assign(init, { [key]: destinationObj[key] }), {})
  }


   const saveProfileState = (values: IuserPayload) => {
    console.log(values);

  //   var putProfileData = copyfromObj(saveDataFormat, values);

   
  //   ProfileSvc.putUser(putProfileData).then(_response => {
  //     if (_response.status === 200) {
  //       Notify.sendNotification(
  //         "User Profile Information Updated Successfully!",
  //         AlertTypes.success
  //       );
  //     }
  //   }).catch(err => {

  //     Notify.sendNotification(
  //       "User Profile Update Failed!",
  //       AlertTypes.error
  //     );
  //     console.log(err);

  //   }).finally(() => {

  //     Notify.sendNotification(
  //       "User Profile Update Failed!",
  //       AlertTypes.error
  //     );
  //   }
  //   );
   }



  return (
    <>
      <div className="content-wrapper container-fluid">
        <div className="inner-content form-content">

        

          {profileData && <Formik

            initialValues={formState}
            enableReinitialize
            validationSchema={SignupSchema}

            onSubmit={(
              values: any,
              { setSubmitting }: FormikHelpers<any>

            ) => {
              setTimeout(() => {
                setSubmitting(false);
                saveProfileState(values);
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
                    <div className='col-12 col-md-8 col-lg-6 pwd-change profile-page'>
                   
                      <div className='col-lg-12 text-center'>
                      <div className='tilte-section text-center'>
                        <h3 className='heading'>My Profile</h3>
                      </div>
                           <div className='subscriber'>
                            <img className="subimg" src={proImg} />
                            </div>
                            <div className='sub-name'>Safeguard360</div>
                            <div className='sub-id'>98776543210</div>
                            <div className="form-group mt-4 col-md-12 text-center">

                        <button type="submit"
                         className="themebtn-one">Edit
                         </button>

                      </div>
                      </div>
                      </div>
                  </div>
                </div>

              </Form>)}
          </Formik>}
        </div>
      </div>
    </>
  );

}

export default MyProfile;