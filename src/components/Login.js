//Login.js

import styles from "../css/Login.modules.css";

function Login() {
  return (
    <div className="login">
        <div>
            Login
        </div>
        <form>
            <div>
                <input placeholder="Email Address"/>
            </div>
            <div>
                <input placeHolder="Password" />
            </div>
            <div>
                <a>Forget Password</a>
                <button>Submit</button>
            </div>
        </form>
    </div>
  );
}

export default Login;