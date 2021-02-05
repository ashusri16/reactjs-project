import './LoginPageContainer.css'

import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const LoginPageContainer = () => {
  const history = useHistory();

  const [LoginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email: LoginID, password })
      .then((response) => {
        const {
          data: { token },
          status,
        } = response;
        if (status === 200) {
          console.log(token);
          history.push("/users");
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className = 'LoginPageOuterBox'>
      <form onSubmit={handleSubmit}>
        <div>
          <p style={{color:'white'}}>Email</p>
          <input
            className = 'FormField'
            type="text"
            value={LoginID}
            onChange={(e) => setLoginID(e.target.value)}
          />
        </div>
        <div>
          <p style={{color:'white'}}>Password</p>
          <input
            className = 'FormField'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className = 'Button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPageContainer;