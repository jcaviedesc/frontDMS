import React from 'react';
import { connect } from 'react-redux'

// componets
import { Card } from '../../components/card';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handlePushRouter = this.handlePushRouter.bind(this)
  }

  handlePushRouter = (target) => {
    console.log("dashboiard - handlePushRouter",target)
    const { history } = this.props;
    history.push(target)
  };

  render() {
    return (
      <div className="Dashboard">
        {/* <div> */}

        <Card>
          <button id="register" className="Card-button" onClick={()=>this.handlePushRouter("/register")}>
            <div className="Container column">
              <div className="Container-img">
                <img alt="usr" src="http://kinecorder.com/wp-content/uploads/2017/06/avatar_male.png" />
              </div>

              <div className="Container column Container-Text">
                <span>Registrar usuario</span>
              </div>
            </div>
          </button>
        </Card>

        <Card>
          <button className="Card-button" onClick={()=>this.handlePushRouter("/document")}>
            <div className="Container column">
              <div className="Container-img">
                <img alt="doc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQu-YxE2MHz_C0frRbPvNl8ZuNy8mH1-JWTDyDIuCbbtQRley" />
              </div>

              <div className="Container column Container-Text">
                <span>Radicar Documento</span>
              </div>
            </div>
          </button>
        </Card>
        {/* </div> */}
      </div>
    );
  }
}

/* Container */
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  //login: (email, password) => dispatch(appActions.login(email, password))
})

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export { DashboardContainer as DashboardPage };