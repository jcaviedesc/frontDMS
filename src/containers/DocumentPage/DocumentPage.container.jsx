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

              <FormItem name='titulo'
                direction='column'>
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


              
              <div style={{
                margin: ' auto',
                width: '90%'
              }
              }>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleSubmit}
                >
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
{/* @Column(name="doc_date")
    @Temporal(TemporalType.DATE)
    private Date dateDoc;

    @Column(name="doc_date_settled", columnDefinition=DEFAULT_NOW)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateInsertAt;

    @Column(name="doc_origin")
    private String origin;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doc_target_usrid", referencedColumnName = "usr_id")
    private User userTarget;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="doc__affair_id")
    private Affair affair;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="doc_user_receives_id")
    private User userRecieve;

    @Column(name="doc_number_settled")
    private int docNumber;

    @Column(name="doc_comments")
    private String comments;

    @Column(name="doc_annexed")
    private String annexe;
  export { Document as DashboardPage};
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
        </div> */}