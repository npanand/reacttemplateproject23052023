import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { label, name, options, type = "text", labelClass, ...rest } = props
  return (
    <div>
      <label className={labelClass} htmlFor={name}>{label}</label>
      <React.Fragment>{(type === "text" || type ==="number") && <Field type={type} className="form-control" id={name} name={name} {...rest} placeholder= {(props.placeholder) ? props.placeholder: name} />}</React.Fragment>
      <React.Fragment>{type ==="password" && <Field as="password" type="password" className="form-control" id={name} name={name} {...rest} placeholder= {(props.placeholder) ? props.placeholder: name} />}</React.Fragment>
      <React.Fragment>{type === "textArea" && <Field as="textArea" component="textarea" rows="4" className="form-control" id={name} name={name} {...rest}  children={props.children} placeholder= {(props.placeholder) ? props.placeholder: name} />}</React.Fragment>
      <ErrorMessage component={TextError} name={name} />
   </div>
  )
}

export default Input
