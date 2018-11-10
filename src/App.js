import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';
import logo from './logo.svg';
import './App.css';

// components
import FormItem from '../src/components/formItem';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    form: formShape,
  };

  componentDidMount() {
    // this.props.form.setFieldsValue({nombre:this.state.value})
  }
  handleSubmit(event: any) {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    let errors;
    const { getFieldProps, getFieldError, getFieldDecorator } = this.props.form;
    const inputval = this.state.value
    const handleChange = this.handleChange;
    return (
      <div className={['Container', 'column']} >
        <FormItem
         name='Titulo'
        >
          <div>
            {getFieldDecorator('nombres', {
              initialValue: '',
              validateTrigger: 'onBlur',
              rules: [{ required: true, message: 'mis polaas' }, { type: 'email', message: 'email not valid' }]
            })(
              <input
                style={{ boxShadow: getFieldError('nombres') ? 'red' : '' }}
                onChange={(text) => { console.log(text.target.value) }}
              />
            )}
            {
              getFieldError('nombres') && <span style={{ color: 'red' }}>{getFieldError('nombres')}</span>
            }
          </div>
        </FormItem>
        <FormItem
          name="Fecha Documento"
        >
          <div>
            <input type='date' />
          </div>
        </FormItem>
        <FormItem
          name='Destino'
        >
          <div>
            <input {...getFieldProps('destino', {
              initialValue: 'xxx',
              valuePropName: 'camilo',
              onChange(event) {
                handleChange(event)
                console.log(event.target.value)
              }, // have to write original onChange here if you need
              rules: [{ required: true }],
            })}
              style={{ borderColor: getFieldError('destino') ? 'red' : '' }}
            />
            {(errors = getFieldError('destino')) ? errors.join(',') : null}
          </div>
        </FormItem>
        <FormItem
          name="Asunto"
        >
          <div>
            <select>
              <option>pqrs</option>
            </select>
          </div>
        </FormItem>
        <FormItem
          name='apellidos'
        >
          <div>
            <input {...getFieldProps('apellido', {
              initialValue: 'xxx',
              valuePropName: 'camilo',
              onChange(event) {
                handleChange(event)
                console.log(event.target.value)
              }, // have to write original onChange here if you need
              rules: [{ required: true }],
            })}
              style={{ borderColor: getFieldError('apellido') ? 'red' : '' }}
            />
            {(errors = getFieldError('apellido')) ? errors.join(',') : null}
          </div>
        </FormItem>

        <FormItem
          name='comentarios'
        >
          {getFieldDecorator('comentarios', {
            initialValue: '',
            validateTrigger: 'onBlur',
            rules: [{ required: true, message: 'debe ingresar comentarios' }]
          })(
            <input
              style={{ boxShadow: getFieldError('comentarios') ? 'red' : '' }}
              onChange={(text) => { console.log(text.target.value) }}
            />
          )}
          {
            getFieldError('comentarios') && <span style={{ color: 'red' }}>{getFieldError('comentarios')}</span>
          }
        </FormItem>
        <div className={'formItem'}>
          <button onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  }
}

export default createForm()(App);

