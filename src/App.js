import React from 'react';
import './App.css';
import{ 
BrowserRouter as Router,
Link,
Route
}
from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App =()=>(
  <Router>
    <div class="AppDiv">
    <header class="Header">
        <Link to='SignIn'><h3>SignIn</h3></Link>
        <Link to='SignUp'><h3>SignUp</h3></Link>
     </header>   

        <Route exact path='/' component={Home}/>
        <Route path='/SignIn' component={SignIn}/>
        <Route path='/SignUp' component={SignUp}/>

        
    </div>
  </Router>
  )
export default App; 
