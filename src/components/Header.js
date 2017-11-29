import React from 'react';


class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="header">
        <div className="page-header">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}
export default Header;
