import React from 'react';
import { createForm, formShape } from 'rc-form';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dropdown } from 'semantic-ui-react'

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

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    valueArea: ' '
  }

  static propTypes = {
    form: formShape,
  };

  handleChange = (e, { value }) => {
    console.tron.log(e.target, 'event')
    this.setState({ value })
  }



  componentDidMount() {
    const { getAreas } = this.props;
    getAreas()
    // this.props.form.setFieldsValue({nombre:this.state.value})
  }
  handleSubmit(event: any) {
    // const { login } = this.props;
    this.props.form.validateFields((error, value) => {
      if (!error) {
        console.tron.log("error", error, value);
      }
    });
  }

  render() {
    const { getFieldProps, getFieldError, getFieldDecorator } = this.props.form;
    const { classes, areas, roles } = this.props;
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
                <div>
                  {getFieldDecorator('area', {
                    initialValue: '',
                    validateTrigger: 'onBlur',
                    rules: [{ required: true }]
                  })(
                    <select>
                      {areas&&areas.map((item)=> <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                  )}
                </div>
                {/* // <Dropdown
                //   id={'zone'}
                //   onChange={this.handleChange}
                //   options={areas}
                //   placeholder='Choose an option'
                //   selection
                //   value={valueArea}
                // /> */}
              </FormItem>

              <FormItem
                name="Perfil o Rol"
              >
               <div>
                  {getFieldDecorator('area', {
                    initialValue: '',
                    validateTrigger: 'onBlur',
                    rules: [{ required: true }]
                  })(
                    <select>
                      {roles&&roles.map((item)=> <option key={item.id} value={item.id}>{item.value}</option>)}
                    </select>
                  )}
                </div>
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
            </div>
          </div>
        </div>

      </div>
    );
  }
}
/* Container */
const mapStateToProps = state => ({
  areas: state.app.get('areas')
})

const mapDispatchToProps = dispatch => ({
  getAreas: () => dispatch(appActions.getAreas())
})

const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(createForm()(RegisterPage))
);
export { connectedRegisterPage as RegisterPage };
