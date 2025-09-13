import React from "react";
import { Link } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import "../styles/homePage.css";

const HomePage: React.FC = () => {
	const { addresses, loading } = useAddresses();

	if (loading) {
		return <div className="homeContainer">Loading...</div>;
	}

	return (
		<Link to={`/address/${encodeURIComponent(addresses[0].name)}`}>
			<div className="homeContainer">
				<p className="homeLogo">M.O’D-L</p>
			</div>
		</Link>
	);
};

export default HomePage;
