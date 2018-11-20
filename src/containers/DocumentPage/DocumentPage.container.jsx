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
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    form: formShape,
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { getFieldProps, getFieldError, getFieldDecorator } = this.props.form;
    const { classes } = this.props;
    return (
      <div className="LoginConten">
        <div className='LoginConten_card_login'>
          <div className="Card">
            <div className={['Container column']} >
              <div className='Title_container'>
                <div className='Title_container_tile'><span>Ingresar</span></div>
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
                    onChange(event) {
                      this.handleChange(event)
                      console.log(event.target.value)
                    },
                    rules: [{ required: true }],
                  })}
                    <input className={`Input ${getFieldError('origen') ? 'red' : '' }`}/>
                  {(getFieldError('origen')) && <span className="Text-error">{getFieldError('origen')}</span>}
                </div>
              </FormItem>
              <FormItem name='Destino'>
                <div>
                  {getFieldDecorator('destino', {
                    initialValue: '',
                    onChange(event) {
                      this.handleChange(event)
                      console.log(event.target.value)
                    }, // have to write original onChange here if you need
                    rules: [{ required: true }],
                  })}
                    <input className={`Input ${getFieldError('destino') ? 'red' : '' }`}/>
                  {(getFieldError('destino')) && <span className="Text-error">{getFieldError('destino')}</span>}
                </div>
              </FormItem>
              <FormItem name='Fecha radicacion'>
                <div>
                {getFieldDecorator('fecha', {
                    initialValue: '',
                    onChange(event) {
                      this.handleChange(event)
                      console.log(event.target.value)
                    },
                    rules: [{ required: true }],
                  })}
                    <input type="date" className={`Input ${getFieldError('fecha') ? 'red' : '' }`}/>
                  {getFieldError('fecha') && <span className="Text-error">{getFieldError('fecha')}</span>}
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
                  <input className={`Input ${getFieldError('comentarios') ? 'red' : '' }`}
                    onChange={(text) => { console.log(text.target.value) }}
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
                  rules: [{ required: true, message: 'debe ingresar comentarios' }]
                })(
                  <input type="file" className={`Input ${getFieldError('adjuntos') ? 'red' : '' }`}
                    onChange={(text) => { console.log(text.target.value) }}
                  />
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
})

const connectedDocumentPage = connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(createForm()(Document))
);

export { connectedDocumentPage as DocumentPage };
{/*
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doc_target_usrid", referencedColumnName = "usr_id")
    private User userTarget;


    @Column(name="doc_annexed")
    private String annexe;
  export { Document as DashboardPage};
    
        

        
        <div className={'formItem'}>
          <button onClick={this.handleSubmit}>submit</button>
        </div> */}