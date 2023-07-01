import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import robot from "./assets/robot.png";

const App = () => {
  return (
    <form action="action_page.php" method="post">
      <div className="imgcontainer">
        <img src={robot} alt="Avatar" className="avatar" />
      </div>

      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked name="remember" /> Remember me
        </label>
      </div>

      <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw"> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Forgot password?</a></span>
      </div>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
