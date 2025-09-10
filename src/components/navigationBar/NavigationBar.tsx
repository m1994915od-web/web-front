import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../data";
import "./navigationBar.css";

const getAddressPath = (address: string) =>
	`/address/${encodeURIComponent(address)}`;
const getPaintingPath = (address: string, title: string) =>
	`/painting/${encodeURIComponent(address)}/${encodeURIComponent(title)}`;

const AddressItem: React.FC<{
	address: string;
	paintings: Array<{ title: string }>;
	setIsOpen: (isOpen: boolean) => void;
}> = ({ address, paintings, setIsOpen }) => (
	<div className="navigationBarAddressContainer">
		<NavLink
			to={getAddressPath(address)}
			className={({ isActive }) =>
				`navigationBarNavText ${isActive ? "active" : ""}`
			}
			onClick={() => setIsOpen(false)}
		>
			{address}
		</NavLink>
		{paintings.map((painting, pIndex) => (
			<ul key={pIndex}>
				<li>
					<NavLink
						to={getPaintingPath(address, painting.title)}
						className={({ isActive }) =>
							`navigationBarWorkName ${isActive ? "active" : ""}`
						}
						onClick={() => setIsOpen(false)}
					>
						{painting.title}
					</NavLink>
				</li>
			</ul>
		))}
	</div>
);

const NavigationBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<>
			<button
				className="burgerButton"
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				☰
			</button>
			<div className={`navigationBarContainer ${isOpen ? "open" : ""}`}>
				{data.map((item, index) => (
					<AddressItem
						key={index}
						address={item.address}
						paintings={item.paintings}
						setIsOpen={setIsOpen}
					/>
				))}
				<NavLink
					to="/statement"
					className={({ isActive }) =>
						`navigationBarNavText ${isActive ? "active" : ""}`
					}
					onClick={() => setIsOpen(false)}
				>
					statement
				</NavLink>
				<NavLink
					to="/cv"
					className={({ isActive }) =>
						`navigationBarNavText ${isActive ? "active" : ""}`
					}
					onClick={() => setIsOpen(false)}
				>
					cv
				</NavLink>
				<a
					href="https://www.instagram.com/marisa.odl"
					className="navigationBarNavText"
					target="_blank"
					onClick={() => setIsOpen(false)}
				>
					ig
				</a>
			</div>
		</>
	);
};

export default NavigationBar;
