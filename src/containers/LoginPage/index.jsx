import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../../App.css';

// components
import FormItem from '../../components/formItem';
//actions
import appActions from '../../reducers/app.reducer';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '90%'
  },
  input: {
    display: 'none',
  },
});

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
    const { login } = this.props;
    this.props.form.validateFields((error, value) => {
      console.tron.log("errot", error, value);
      if (!error) {
        login(value.correo, value.contraseña)
      }
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    let errors;
    const { getFieldProps, getFieldError, getFieldDecorator } = this.props.form;
    const { classes } = this.props;
    const handleChange = this.handleChange;
    return (
      <div className="LoginConten">
        <div className="Card">
          <div className={['Container column']} >
            <div className='Title_container'>
              <div className='Title_container_tile'><span>Ingresar</span></div>
            </div>
            <FormItem
              name='Correo'
              direction='column'
            >
              <div>
                {getFieldDecorator('correo', {
                  initialValue: '',
                  validateTrigger: 'onBlur',
                  rules: [{ type: 'email', message: 'Correo no valido', required: true }]
                })(
                  <input
                    className={`Input ${getFieldError('correo') ? 'Input-failed' : ''}`}
                  />
                )}
              </div>
              {
                getFieldError('correo') && <span className="Text-error">{getFieldError('correo')}</span>
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
                    className={`Input ${getFieldError('contraseña') ? 'Input-failed' : ''}`}
                  />
                )}
              </div>
              {
                getFieldError('contraseña') && <span className="Text-error">{getFieldError('contraseña')}</span>
              }
            </FormItem>
            <div style={{
              margin:' auto',
              width: '90%'}
            }>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                action={(action) => console.log(action)}
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </div>

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
/* Container */
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(appActions.login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(createForm()(LoginPage))
);
