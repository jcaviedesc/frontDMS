import React from 'react';
import Button from '@material-ui/core/Button';
import { createForm, formShape } from 'rc-form';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
//import DatePicker from 'react-date-picker';

// componets
import { Card } from '../../components/card';
import FormItem from '../../components/formItem';

// actions 
import appActions from '../../reducers/app.reducer';
import userActions from '../../reducers/user.reducer';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '90%'
  },
  input: {
    display: 'none',
  },
});

function getFileValueProps(value) {
  if (value && value.target) {
    return {
      value: value.target.value,
    };
  }
  return {
    value,
  };
}

function getValueFromFileEvent({ target }) {
  return {
    target,
  };
}

class Document extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    form: formShape,
  };

  componentDidMount() {
    const { getAffairs, getAllUsers } = this.props;
    getAffairs()
    getAllUsers()
  }

  handleSubmit(event: any) {
    event.preventDefault();
    console.tron.log("arrancamos submit")
    const { createRadication } = this.props;
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.props.form.setFieldsValue({ title: "", origin: "", dateDoc: "", comments: "", annexe: "" })
        const file = new FormData();
        file.append('file', values.annexe.target.files[0]);
        delete values.annexe
        createRadication(values, file)
        //console.tron.log("error", error, value);

      }
    });
  }

  render() {
    const { getFieldError, getFieldDecorator, getFieldProps } = this.props.form;
    const { classes, affairs, usersTarget } = this.props;
    return (
      <div className="LoginConten">
        <div className='LoginConten_card_login'>
          <Card>
            <div className={['Container column']} >
              <div className='Title_container'>
                <div className='Title_container_tile'><span>Radicar Documento</span></div>
              </div>

              <FormItem name='Titulo'>
                <div>
                  {getFieldDecorator('title', {
                    initialValue: '',
                    validateTrigger: 'onBlur',
                    rules: [{ message: 'Campo Requerido', required: true }]
                  })(
                    <input className={`Input ${getFieldError('title') ? 'Input-failed' : ''}`} />
                  )}
                </div>
                {
                  getFieldError('title') && <span className="Text-error">{getFieldError('title')}</span>
                }
              </FormItem>
              <FormItem name='Origen'>
                <div>
                  {getFieldDecorator('origin', {
                    initialValue: '',
                    rules: [{ required: true }],
                  })(
                    <input className={`Input ${getFieldError('origin') ? 'red' : ''}`} />
                  )}
                </div>
                {
                  getFieldError('origin') && <span className="Text-error">{getFieldError('origin')}</span>
                }
              </FormItem>
              <FormItem name='Destino'>
                <div>
                  {getFieldDecorator('userTarget', {
                    initialValue: '',
                    // have to write original onChange here if you need
                    rules: [{ required: true }],
                  })(
                    <select>
                      {usersTarget && usersTarget.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>
                  )}
                </div>
                {
                  getFieldError('userTarget') && <span className="Text-error">{getFieldError('userTarget')}</span>
                }
              </FormItem>
              <FormItem name='Fecha Documento'>
                <div>
                  {getFieldDecorator('dateDoc', {
                    initialValue: '',
                    rules: [{ required: true }],
                  })(
                    <input type="date" className={`Input ${getFieldError('dateDoc') ? 'red' : ''}`} />
                  )}
                </div>
                {
                  getFieldError('dateDoc') && <span className="Text-error">{getFieldError('dateDoc')}</span>
                }
              </FormItem>
              <FormItem name="Asunto">
                <div>
                  {getFieldDecorator('affair', {
                    initialValue: '',
                    // have to write original onChange here if you need
                    rules: [{ required: true }],
                  })(
                    <select>
                      {affairs && affairs.map((affair) => <option key={affair.id} value={affair.id}>{affair.name}</option>)}
                    </select>
                  )}
                </div>
                {
                  getFieldError('affair') && <span className="Text-error">{getFieldError('affair')}</span>
                }
              </FormItem>

              <FormItem name='comentarios' >
                <div>
                  {getFieldDecorator('comments', {
                    initialValue: '',
                    validateTrigger: 'onBlur',
                    rules: [{ required: true, message: 'debe ingresar comments' }]
                  })(
                    <textarea
                      id="comments"
                      rows="3"
                      cols="20"
                      className={`TextArea ${getFieldError('comments') ? 'red' : ''}`}
                    />
                  )}
                </div>
                {
                  getFieldError('comments') && <span className=" Text-error" style={{ color: 'red' }}>{getFieldError('comments')}</span>
                }
              </FormItem>

              <FormItem name='Adjuntos' >
                <div>
                  {getFieldDecorator("annexe", {
                    initialValue: '',
                    validateTrigger: 'onBlur',
                    rules: [{ required: true, message: 'debe cargar un archivo' }],
                    getValueProps: getFileValueProps,
                    getValueFromEvent: getValueFromFileEvent,
                  })(
                    <input id="annexe" type="file" />
                  )}
                  {/* <input id="annexe" type="file" {...getFieldProps('annexe', {
                   
                    
                  })}
                  /> */}
                </div>
                {
                  getFieldError('annexe') && <span className=" Text-error" style={{ color: 'red' }}>{getFieldError('annexe')}</span>
                }
              </FormItem>

              <div style={{
                margin: ' auto',
                width: '90%'
              }
              }>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleSubmit}>
                  Registrar
                  </Button>
              </div>
            </div>
          </Card>
        </div>

      </div>
    );
  }
}
/* Container */
const mapStateToProps = state => ({
  affairs: state.app.get('affairs'),
  usersTarget: state.user.get('allUsers')
})

const mapDispatchToProps = dispatch => ({
  getAffairs: () => dispatch(appActions.getAllAffairs()),
  getAllUsers: () => dispatch(userActions.getAllUsers()),
  createRadication: (info,document) => dispatch(appActions.createRadication(info,document))
})

const connectedDocumentPage = connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(createForm()(Document))
);

export { connectedDocumentPage as DocumentPage };
