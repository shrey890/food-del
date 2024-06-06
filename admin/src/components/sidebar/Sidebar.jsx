import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { List, Plus, ShoppingCart } from "lucide-react";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-options">
				<NavLink to="/add" className="sidebar-option">
					<Plus color="red" />
					<p>Add Items </p>
				</NavLink>
				<NavLink to="/list" className="sidebar-option">
					<List color="#ff0000" />
					<p>List Items </p>
				</NavLink>
				<NavLink to="/orders" className="sidebar-option">
					<ShoppingCart color="#ff0000" />
					<p>Order</p>
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
