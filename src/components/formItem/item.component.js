import React from 'react';
import './formItem.css';

const FormItem = ({
  direction = 'row',
  children,
  name
}) => (
    <div className={`Container_item ${direction === 'row' ? 'Row' : 'Column'}`}>
      {name && (
        <div className={'Container_item_contarinertext'}>
          <span className="contarinertext_subTitle">{name}</span>
        </div>
      )}
      <div className={'Container_item_content_input'}>{children}</div>
    </div>
  )

export default FormItem;
