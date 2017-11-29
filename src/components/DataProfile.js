import React from 'react';
import {Bootstrap, Panel, PanelGroup} from 'react-bootstrap';
import img from '../img/n10e-daily.png';


class DataProfile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="list-group">
        <PanelGroup  >
          <Panel header="Temperature"><img src={img} /></Panel>
          <Panel header="Humidity"><img src={img} /></Panel>
          <Panel header="Light"><img src={img} /></Panel>
        </PanelGroup>
      </div>
    )
  }
}
export default DataProfile;
