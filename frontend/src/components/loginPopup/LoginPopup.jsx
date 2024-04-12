import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
	const [currentState, setCurrentState] = useState("Login");
	return (
		<div className="login-popup">
			<form action="" className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currentState}</h2>
					<img
						src={assets.cross_icon}
						onClick={() => setShowLogin(false)}
						alt=""
					/>
				</div>
				<div className="login-popup-inputs">
					{currentState === "Login" ? (
						<></>
					) : (
						<input required placeholder="Name" type="text" />
					)}
					<input required placeholder="Email" type="email" />
					<input required placeholder="Password" type="password" />
				</div>
				<button>
					{currentState === "Sign up" ? "Create account" : "Login"}
				</button>
				<div className="login-popup-condition">
					<input type="checkbox" required />
					<p>By continuing, i agree to the terms of use & privacy policy.</p>
				</div>
				{currentState === "Login" ? (
					<p>
						create a new account?{" "}
						<span onClick={() => setCurrentState("Sign up")}>click here</span>
					</p>
				) : (
					<p>
						Already have an account?{" "}
						<span onClick={() => setCurrentState("Login")}>Login</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default LoginPopup;
