import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer-content">
				<div className="footer-content-left">
					<img src={assets.logo} alt="" />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, est.
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
						saepe molestias nemo dolores, quae iure id et nulla necessitatibus
						voluptates vel praesentium rem laudantium, neque aspernatur
						perspiciatis optio fuga assumenda!
					</p>
					<div className="footer-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
					</div>
				</div>
				<div className="footer-content-center">
					<h2>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>
				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>+1 98883 3333</li>
						<li>contact@tomato.com</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">© {new Date().getFullYear()} Shrey</p>
		</div>
	);
};
export default Footer;
