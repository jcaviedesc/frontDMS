import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';
import '../../App.css';

// components
import FormItem from '../../components/formItem';

class LoginPage extends React.Component {

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
    const handleChange = this.handleChange;
    return (
      <div className="LoginConten">
        <div className="Card">
          <div className={['Container column']} >
            <FormItem
              name='Correo'
              direction='column'
            >
              <div>
                {getFieldDecorator('correo', {
                  initialValue: '',
                  validateTrigger: 'onBlur',
                  rules: [{ type: 'email', message: 'email no valido', required: true }]
                })(
                  <input
                    style={{ boxShadow: getFieldError('correo') ? 'red' : '' }}
                    onChange={(text) => { console.log(text.target.value) }}
                  />
                )}
              </div>
              {
                getFieldError('correo') && <span style={{ color: 'red' }}>{getFieldError('correo')}</span>
              }
            </FormItem>
            <FormItem
              name="Contraseña"
              direction='column'
            >
              <div>
                {getFieldDecorator('contraseña', {
                  initialValue: '',
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: 'La contraseña es requerida' }]
                })(
                  <input
                    type='password'
                    style={{ boxShadow: getFieldError('contraseña') ? 'red' : '' }}
                    onChange={(text) => { console.log(text.target.value) }}
                  />
                )}
              </div>
              {
                getFieldError('contraseña') && <span style={{ color: 'red' }}>{getFieldError('contraseña')}</span>
              }
            </FormItem>
            {/* <FormItem
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
        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default createForm()(LoginPage);
