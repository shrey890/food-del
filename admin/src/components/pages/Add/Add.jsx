import { useState } from "react";
import { assets } from "../../../assets/assets";
import "./Add.css";
const Add = () => {
	const [image, setImage] = useState(false);
	const [data, setData] = useState({
		name: "",
		description: "",
		price: "",
		category: "",
	});
	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", data.name);
		formData.append("description", data.description);
		formData.append("price", Number(data.price));
		formData.append("category", Number(data.category));
		formData.append("image", image);
	};
	return (
		<div className="add">
			<form className="flex-col" onSubmit={onSubmitHandler}>
				<div className="add-img-upload flex-col">
					<p className="">Upload Image</p>
					<label htmlFor="image">
						<img
							src={image ? URL.createObjectURL(image) : assets.upload_area}
							alt="upload"
						/>
					</label>
					<input
						onChange={(e) => setImage(e.target.files[0])}
						type="file"
						id="image"
						hidden
						required
					/>
				</div>
				<div className="add-product-name flex-col">
					<p className="">Product name</p>
					<input
						onChange={onChangeHandler}
						value={data.name}
						type="text"
						name="name"
						placeholder="Type here"
					/>
				</div>
				<div className="add-product-description flex-col">
					<p>Product description</p>
					<textarea
						name="description"
						onChange={onChangeHandler}
						value={data.description}
						rows="6"
						placeholder="Write content here"
						id=""
					/>
				</div>
				<div className="add-category-price">
					<div className="add-category flex-col">
						<p>Product category</p>

						<select
							onChange={onChangeHandler}
							value={data.category}
							className=""
							name="category"
						>
							<option value="Salad">Salad</option>
							<option value="Rolls">Rolls</option>
							<option value="Deserts">Deserts</option>
							<option value="Sandwich">Sandwich</option>
							<option value="Cake">Cake</option>
							<option value="Paste">Paste</option>
							<option value="Noodles">Noodles</option>
							<option value="Pure Veg">Pure Veg</option>
						</select>
					</div>
					<div className="add-price flex-col">
						<p className="">Product Price</p>
						<input
							onChange={onChangeHandler}
							value={data.price}
							type="number"
							name="price"
							placeholder="₹299"
						/>
					</div>
				</div>
				<button type="submit" className="add-btn">
					ADD
				</button>
			</form>
		</div>
	);
};

export default Add;
