import React, { Component } from 'react';

class SignUp extends Component {
	handleSubmit = (e) => {
	this.props.history.push('/SignIn');
		}
  render() {
    return (
      <div id="topDiv">
      	<center>
      	<h2>SignUp</h2>
          <form onSubmit={this.handleSubmit} method='post' action="">
				<div>
					<input type="text" name="username" id="usernames" placeholder="Username" required />
				</div>
				<div>
					<input type="password" name="password" id="password" placeholder="password" required />
				</div>
				<div>
					<input type="email" name="email" id="email" placeholder="Email" required />
				</div>
				<input type="submit" name="" id="submitbtn" value="submit"/>
			</form>
		</center>	
      </div>
    );
  }
}

export default SignUp;