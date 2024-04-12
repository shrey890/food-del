import { useContext } from "react";
import "../placeOrder/PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
	const { getTotalCartAmount } = useContext(StoreContext);
	return (
		<div className="place-order">
			<div className="place-order-left">
				<p className="title">Delivery information</p>
				<div className="multi-fields">
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
				</div>
				<input type="email" placeholder="E-mail" />
				<input type="text" placeholder="Street" />
				<div className="multi-fields">
					<input type="text" placeholder="City" />
					<input type="text" placeholder="State" />
				</div>
				<div className="multi-fields">
					<input type="text" placeholder="Zip Code" />
					<input type="text" placeholder="Country" />
				</div>
				<input type="text" placeholder="Phone" />
			</div>
			<div className="place-order-right">
				<div className="cart-total">
					<h2>Cart Totals</h2>
					<div>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
						</div>
						<hr />
						<div className="cart-total-details">
							<b>Total</b>$
							{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
						</div>
					</div>
					<button>PROCEED TO PAYMENT</button>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
