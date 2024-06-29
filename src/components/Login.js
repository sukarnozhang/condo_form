//Login.js
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from "../css/Login.modules.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    if (email == "sukarno") {
      navigate('/home');
    }
    else {
      console.log('wrong email')
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <div className="login">
      <div style={{ fontSize: 48, width: '100%' }}>Login</div>
      <form>
        <div style={{ marginTop: 10 }}>
          <input
            placeholder="Email Address" 
            style={{ fontSize: 18 }}
            onChange={handleEmailChange}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <input placeholder="Password" style={{ fontSize: 18 }} />
        </div>
        <div style={{ fontSize:16, marginTop: 20 }}>
          <a style = {{ marginRight:10 }}>Forget Password</a>
          <button 
            style={{ backgroundColor: '#6D41FC', color: 'white' }} 
            onClick={ () => {
              handleSubmit();
            }}> 
            Submit 
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
