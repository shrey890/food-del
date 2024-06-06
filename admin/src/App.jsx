import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import List from "./components/pages/List/List";
import Add from "./components/pages/Add/Add";
import Orders from "./components/pages/Orders/Orders";

const App = () => {
	return (
		<div>
			<Navbar />
			<hr />
			<div className="app-content">
				<Sidebar />
				<Routes>
					<Route path="/list" element={<List />} />
					<Route path="/add" element={<Add />} />
					<Route path="/orders" element={<Orders />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
