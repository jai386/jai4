import React, { Component } from 'react';

class SignIn extends Component {
	handleSubmit = (e) => {
	this.props.history.push('/Home');
		}
  render() {
    return (
    	<div id="topDiv">
      	<center>
      	<h2>SignIn</h2>
          <form action="" onSubmit={this.handleSubmit}>
				<div>
					<input type="text" name="username" id="usernames" required />
				</div>
				<div>
					<input type="password" name="password" id="password" required />
				</div>
				<input type="submit" name="" id="submitbtn" value="submit"/>
			</form>
		</center>	
      </div>
    );
  }
}
export default SignIn;