import React from 'react';
import { createForm, formShape } from 'rc-form';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dropdown } from 'semantic-ui-react'
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

const options = [
    { key: 1, text: 'One', value: 1 },
    { key: 2, text: 'Two', value: 2 },
    { key: 3, text: 'Three', value: 3 },
  ]

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {}

    handleChange = (e, { value }) => this.setState({ value })
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
        const { getFieldProps, getFieldError, getFieldDecorator } = this.props.form;
        const { classes } = this.props;
        const { value } = this.state
        return (
            <div className="Register_content">
                <div className='Register_content_card'>
                    <div className="Card">
                        <div className={['Container column']} >
                            <div className='Title_container'>
                                <div className='Title_container_tile'><span>Registrar</span></div>
                            </div>
                            <FormItem
                                name='Nombres'
                                direction='row'
                            >
                                <div>
                                    {getFieldDecorator('name', {
                                        initialValue: '',
                                        validateTrigger: 'onBlur',
                                        rules: [{ required: true }]
                                    })(
                                        <input
                                            className={`Input ${getFieldError('name') ? 'Input-failed' : ''}`}
                                        />
                                    )}
                                </div>
                                {
                                    getFieldError('name') && <span className="Text-error">{getFieldError('name')}</span>
                                }
                            </FormItem>
                            <FormItem
                                name="Apellidos"
                                direction='row'
                            >
                                <div>
                                    {getFieldDecorator('lastname', {
                                        initialValue: '',
                                        validateTrigger: 'onBlur',
                                        rules: [{ required: true, message: 'Campo requerido' }]
                                    })(
                                        <input
                                            type='text'
                                            className={`Input ${getFieldError('lastname') ? 'Input-failed' : ''}`}
                                        />
                                    )}
                                </div>
                                {
                                    getFieldError('lastname') && <span className="Text-error">{getFieldError('lastname')}</span>
                                }
                            </FormItem>
                            <FormItem
                                name="Nombre de usuario"
                                direction='row'
                            >
                                <div>
                                    {getFieldDecorator('username', {
                                        initialValue: '',
                                        validateTrigger: 'onBlur',
                                        rules: [{ required: true, message: 'Campo requerido' }]
                                    })(
                                        <input
                                            type='text'
                                            className={`Input ${getFieldError('username') ? 'Input-failed' : ''}`}
                                        />
                                    )}
                                </div>
                                {
                                    getFieldError('username') && <span className="Text-error">{getFieldError('username')}</span>
                                }
                            </FormItem>
                            <FormItem
                                name="Correo"
                                direction='row'
                            >
                                <div>
                                    {getFieldDecorator('email', {
                                        initialValue: '',
                                        validateTrigger: 'onBlur',
                                        rules: [{ required: true, type: 'email', message: 'Email no valido' }]
                                    })(
                                        <input
                                            type='text'
                                            className={`Input ${getFieldError('email') ? 'Input-failed' : ''}`}
                                        />
                                    )}
                                </div>
                                {
                                    getFieldError('email') && <span className="Text-error">{getFieldError('email')}</span>
                                }
                            </FormItem>

                            <FormItem
                                name="Area"
                            >
                                <Dropdown
                                    onChange={this.handleChange}
                                    options={options}
                                    placeholder='Choose an option'
                                    selection
                                    value={value}
                                />
                            </FormItem>

                            <FormItem
                                name="Perfil o Rol"
                            >
                                <select>
                                    <option>rol</option>
                                </select>
                            </FormItem>
                            <div style={{
                                margin: ' auto',
                                width: '40%'
                            }
                            }>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={this.handleSubmit}
                                >
                                    Registrar
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

const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(createForm()(RegisterPage))
);
export { connectedRegisterPage as RegisterPage };
