import React from 'react';
import {Bootstrap, Panel, PanelGroup} from 'react-bootstrap';


class PropertyProfile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="list-group">
        <PanelGroup >
          <Panel collapsible header="Occupunts">John Smith <br/>John Snt <br/> teddy</Panel>
          <Panel collapsible header="Address">21 a street <br/> Cathays <br/> Cardiff <br/> cf24 1</Panel>
          <Panel collapsible header="Map">MAP</Panel>
        </PanelGroup>
      </div>
    )
  }
}
export default PropertyProfile;
