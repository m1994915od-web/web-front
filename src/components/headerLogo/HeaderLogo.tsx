import React from "react";
import logo from "../../assets/logo/logo.png";
import "./headerLogo.css";

const HeaderLogo: React.FC = () => {
	return (
		<div className="headerLogoContainer">
			<div className="headerLogoBox">
				<img src={logo} alt="Logo" className="headerLogoImage" />
			</div>
		</div>
	);
};

export default HeaderLogo;
