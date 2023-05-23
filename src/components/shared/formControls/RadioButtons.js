import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons(props) {
  const { label, name, options, labelClass, ...rest } = props
  return (
    <div className="p-0">
      <label className={labelClass}>{label}</label>
      <div className="d-flex mobile  justify-content-sm-start justify-content-between ">
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              
              <div className="col-xs-6">
                
                <React.Fragment key={option.key} >

                  <input
                    type='radio'
                    name={name}
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                    className='mr-2 mt-2'
                  />
                  <label className="radioOptionsLabel">{option.key}</label>
                </React.Fragment>
              </div>
            


            )
          })
        }}
      </Field>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons
