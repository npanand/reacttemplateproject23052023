import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function CheckboxGroup (props) {
  const { label, name, options, labelClass,iconClass, ...rest } = props
  return (
    <><label className={labelClass} htmlFor={name}>{label}</label><div className="d-flex justify-content-left">

          <Field name={name}>
              {({ field }) => {
                  return options.map(option => {
                      // debugger
                      return (
                          <React.Fragment key={option.key}>
                              <div className="d-flex">

                                  <input
                                      type='checkbox'
                                      id={option.value}
                                      name={name}
                                      {...field}
                                      {...rest}
                                      value={option.value}
                                      className={""} />
                                  <span className={label} htmlFor={option.value} style={{ "lineHeight": "18px", "marginLeft": "5px" }}>{option.key} <span className={iconClass}></span> </span>
                              </div>

                          </React.Fragment>
                      )
                  })
              } }
          </Field>
          <ErrorMessage component={TextError} name={name} />
      </div></>
  )
}

export default CheckboxGroup
