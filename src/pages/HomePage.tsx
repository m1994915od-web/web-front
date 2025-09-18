import React from "react";
import { Link } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import home from "../assets/images/home.jpg";
import "../styles/homePage.css";

const HomePage: React.FC = () => {
	const { addresses, loading } = useAddresses();

	if (loading) {
		return (
			<div className="homeContainer">
				<img src={home} alt="home" className="homeImage" />
			</div>
		);
	}

	return (
		<Link to={`/address/${encodeURIComponent(addresses[0].name)}`}>
			<div className="homeContainer">
				<img src={home} alt="home" className="homeImage" />
			</div>
		</Link>
	);
};

export default HomePage;
