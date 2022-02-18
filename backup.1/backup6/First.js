import React, { Component } from 'react';

 class First extends Component {
     state={
         email:"",
         password:""

     }
     eventHandler=(event)=>{
        this.setState ({email:event.target.value})
        
     }
     functionHandler=(event)=>{
         this.setState({password:event.target.value})

     }

         
     
  render() {
    return <div>
        <pre>{JSON.stringify(this.state.email)}</pre>
        <pre>{JSON.stringify(this.state.password)}</pre>

        <label for="inputPassword5" className="form-label">email</label>
<input type="password" id="inputPassword5" onChange={this.eventHandler} className="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
</div>
<label for="inputPassword5" class="form-label">password</label>
<input type="password" id="inputPassword5" onChange={this.functionHandler} className="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
</div>
    </div>;
    
  }
}
export default First;