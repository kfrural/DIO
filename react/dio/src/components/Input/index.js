import React from 'react'
import { Controller } from "react-hook-form";

import './input.css'

const Input = ({leftIcon, name, control, ...rest}) => {


    return (
      <div className="InputContainer">
          {leftIcon ? (<div className="IconContainer">{leftIcon}</div>) : null}
          <Controller
          name={name}
          control={control}
          render={({ field }) =>  <div className="InputText" {...field} {...rest} />}
        />
         
      </div>
    )
  }
  
  export { Input }; 