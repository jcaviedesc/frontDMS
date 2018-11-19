import React from 'react';

// componets
import { Card } from '../../components/card';

class Dashboard extends React.Component{
  
  render(){
    return(
      <div className="Dashboard">
        {/* <div> */}
            <Card>
                <span>Registrar usuario</span>
            </Card>
            <Card>
                <span>Radicar Documento</span>
            </Card>
        {/* </div> */}
      </div>
    );
  }
}

export { Dashboard as DashboardPage};