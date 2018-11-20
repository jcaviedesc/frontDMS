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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '90%'
  },
  input: {
    display: 'none',
  },
});


class Document extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    form: formShape,
  };

  handleSubmit(event: any) {
    //const { registerUser } = this.props;
    this.props.form.validateFields((error, value) => {
      if (!error) {
        this.props.form.setFieldsValue({ name: "", lastname: "", username: "", email: "" })
        console.tron.log("error", error, value);

      }
    });
  }

  render() {
    const { getFieldError, getFieldDecorator } = this.props.form;
    const { classes } = this.props;
    return (
      <div className="LoginConten">
        <div className='LoginConten_card_login'>
          <Card>
            <div className={['Container column']} >
              <div className='Title_container'>
                <div className='Title_container_tile'><span>Radicar Documento</span></div>
              </div>

              <FormItem name='titulo'>
                <div>
                  {getFieldDecorator('titulo', {
                    initialValue: '',
                    validateTrigger: 'onBlur',
                    rules: [{ message: 'Campo Requerido', required: true }]
                  })(
                    <input className={`Input ${getFieldError('titulo') ? 'Input-failed' : ''}`} />
                  )}
                  {
                    getFieldError('titulo') && <span className="Text-error">{getFieldError('titulo')}</span>
                  }
                </div>
              </FormItem>
              <FormItem name='Origen'>
                <div>
                  {getFieldDecorator('origen', {
                    initialValue: '',
                    rules: [{ required: true }],
                  })(
                    <input className={`Input ${getFieldError('origen') ? 'red' : ''}`} />
                  )}
                </div>
                {
                  getFieldError('origen') && <span className="Text-error">{getFieldError('origen')}</span>
                }
              </FormItem>
              <FormItem name='Destino'>
                <div>
                  {getFieldDecorator('destino', {
                    initialValue: '',
                    // have to write original onChange here if you need
                    rules: [{ required: true }],
                  })(
                    <input className={`Input ${getFieldError('destino') ? 'red' : ''}`} />
                  )}
                </div>
                {
                  getFieldError('destino') && <span className="Text-error">{getFieldError('destino')}</span>
                }
              </FormItem>
              <FormItem name='Fecha radicacion'>
                <div>
                  {getFieldDecorator('fecha', {
                    initialValue: '',
                    rules: [{ required: true }],
                  })(
                    <input type="date" className={`Input ${getFieldError('fecha') ? 'red' : ''}`} />
                  )}
                  {
                    getFieldError('fecha') && <span className="Text-error">{getFieldError('fecha')}</span>
                  }
                </div>
              </FormItem>
              <FormItem name="Asunto">
                <div>
                  <select>
                    <option>pqrs</option>
                  </select>
                </div>
              </FormItem>

              <FormItem name='comentarios' >
                {getFieldDecorator('comentarios', {
                  initialValue: '',
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: 'debe ingresar comentarios' }]
                })(
                  <textarea 
                    id="comments" 
                    rows="3" 
                    cols="20" 
                    className={`TextArea ${getFieldError('comentarios') ? 'red' : ''}`}
                  />
                )}
                {
                  getFieldError('comentarios') && <span className=" Text-error" style={{ color: 'red' }}>{getFieldError('comentarios')}</span>
                }
              </FormItem>

              <FormItem name='Adjuntos' >
                {getFieldDecorator('adjuntos', {
                  initialValue: '',
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: 'debe cargar un archivo' }]
                })(
                  <input type="file" />
                )}
                {
                  getFieldError('adjuntos') && <span className=" Text-error" style={{ color: 'red' }}>{getFieldError('adjuntos')}</span>
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
                  Login
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
})

const mapDispatchToProps = dispatch => ({
})

const connectedDocumentPage = connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(createForm()(Document))
);

export { connectedDocumentPage as DocumentPage };
