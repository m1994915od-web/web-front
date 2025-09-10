import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import "../styles/homePage.css";

const HomePage: React.FC = () => {
	return (
		<Link to={`/address/${encodeURIComponent(data[0].address)}`}>
			<div className="homeContainer">
				<p className="homeLogo">M.O’D-L</p>
			</div>
		</Link>
	);
};

export default HomePage;
