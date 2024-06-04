import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import LoginPopup from "./components/loginPopup/LoginPopup";
const App = () => {
	const marqueeStyle = {
		fontStyle: "italic",
		color: "tomato",
		fontWeight: "bold",
		letterSpacing: "1px",
	};
	const [showLogin, setShowLogin] = useState(false);
	return (
		<div>
			<marquee behavior="scroll" direction="left" style={marqueeStyle}>
				This site is currently under development and some functions may not be
				working properly.
			</marquee>

			{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
			<div className="app">
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/order" element={<PlaceOrder />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
