import React from "react";

import { ErrorMessage, useField, useFormikContext } from "formik";
import DateTimePicker from 'react-datetime-picker';
import TextError from './TextError'


export const DatePickerField = ({ ...props }) => {
  const { setFieldValue, handleBlur, setFieldTouched, touched} = useFormikContext();
  
  const [field, errors , { setValue }] = useField(props);
  return (
    <>
    <label htmlFor={props.name} className="col-form-label text-uppercase">{props.label}</label>
    <div>

    <DateTimePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          minDate={(props.minDate) ? props.minDate: ''}
          onBlur={e => {
            setFieldTouched(field.name, true, true);
            handleBlur(e);
        }}   
        onChangeRaw={e => {
          setFieldTouched(field.name, true, true);
      }}
          onChange={val => {
              props.onChange && props.onChange(val);
              setFieldValue(field.name, new Date(val));
          } } />
    
            {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
          <ErrorMessage component={TextError} name={props.name} />
    </div>

    </>
  );
};

export default DatePickerField;