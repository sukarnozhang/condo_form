//Register.js
import styles from "../css/Register.modules.css"

function Register() {
    return(
        <div className="main">

            <div>
                <h1> Register User </h1>
                <ul>
                    <li>Home</li>
                    <li>Register</li>
                </ul>
            </div>

            <div>
                <form>
                    <hr></hr>
                    <p>Please fill in this form to create an account for user!</p>
                    <div>
                        <input className="inputBox" style ={{width:200}} placeHolder="First Name" />
                        <input className="inputBox" style ={{marginLeft:5,width:200}} placeHolder="Last Name" />
                    </div>
                    <div >
                        <input className="inputBox" placeHolder="Email" />
                    </div>
                    <div>
                        <input className="inputBox" placeHolder="Mobile Number" />
                    </div>
                    <div>
                        <input className="inputBox" placeHolder="NRIC" />
                    </div>
                    <div>
                        <input className="inputBox" type="date" placeHolder="DOB" style ={{width:200}}/>
                        <input className="inputBox" style ={{marginLeft:5, width:200}} placeHolder="user" />
                    </div>
                    <div>
                        <input className="inputBox" placeHolder="Select Address" />
                    </div>
                    <div className="inputBox">
                        <input type="checkbox" />
                        <span>Is Owner?</span>
                    </div>
                    <br />
                    <div >
                        <button className="button">Register</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Register;