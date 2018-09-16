import React from 'react';

/*This component is for individual tasks that will be displayed in the task list*/

class IndividualTask extends React.Component{

  render(){
    return(
      <p>{this.props.details.name}</p>
    )
  }
}

export default IndividualTask;