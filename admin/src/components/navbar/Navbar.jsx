import "./Navbar.css";
import { assets } from "../../assets/assets";
import { User } from "lucide-react";
const Navbar = () => {
	return (
		<div className="navbar">
			<img src={assets.logo} className="logo" alt="logo" width={150} />
			<User color="red" size={30} />
		</div>
	);
};

export default Navbar;
