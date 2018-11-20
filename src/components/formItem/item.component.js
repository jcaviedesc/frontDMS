import React from 'react';
import styles from './formItem.module.css';
import './formItem.css';

const orientation = (direction)=>{
  const type = direction === 'row' ? styles.Row : styles.Column
  return `${styles.Container_item} ${type}`
}
const FormItem = ({
  direction = 'row',
  children,
  name
}) => (
    <div className={orientation(direction)}>
      {name && (
        <div className={'Container_item_contarinertext'}>
          <span className="contarinertext_subTitle">{name}</span>
        </div>
      )}
      <div className={'Container_item_content_input'}>{children}</div>
    </div>
  )

export default FormItem;
