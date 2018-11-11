import React from 'react';
import './formItem.css';

const FormItem = ({
  direction = 'row',
  children,
  name
}) => (
    <div className={`Container-item ${direction ==='row'?'Row':'Column'}`}>
      {name&&<div className={'Text_content'}><span className="Text_content_subTitle">{name}</span></div>}
      <div className={'Input-content'}>{children}</div>
    </div>
  )

export default FormItem;
