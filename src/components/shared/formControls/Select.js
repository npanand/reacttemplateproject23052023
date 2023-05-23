import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select (props) {
  const { label, name, options,labelClass, mainClass, ...rest } = props
  return (
    <div className={mainClass ? mainClass : ' p-0'}>
      <label className={labelClass} htmlFor={name}>{label}</label>
      <Field as='select' className= {"select-control form-control"} id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select
