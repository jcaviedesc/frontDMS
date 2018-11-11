import React from 'react';
import './formItem.css';

const FormItem = ({
  direction = 'row',
  children,
  name
}) => (
    <div className={`Container-item ${direction ==='row'?'Row':'Column'}`}>
      {name&&<div className={'Text-content'}><span>{name}</span></div>}
      <div className={'Input-content'}>{children}</div>
    </div>
  )

export default FormItem;
