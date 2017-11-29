import React from 'react';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  }

  render(){
    return(
      <div className="list-group">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
export default List;
