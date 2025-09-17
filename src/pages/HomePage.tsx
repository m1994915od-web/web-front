import React from "react";
import { Link } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import logo from "../assets/logo/logo.png";
import "../styles/homePage.css";

const HomePage: React.FC = () => {
	const { addresses, loading } = useAddresses();

	if (loading) {
		return (
			<div className="homeContainer">
				<img src={logo} alt="Logo" className="homeLogo" />
			</div>
		);
	}

	return (
		<Link to={`/address/${encodeURIComponent(addresses[0].name)}`}>
			<div className="homeContainer">
				<img src={logo} alt="Logo" className="homeLogo" />
			</div>
		</Link>
	);
};

export default HomePage;
