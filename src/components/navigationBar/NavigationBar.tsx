import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAddresses } from "../../context/AddressContext";
import type { Artwork } from "../../types";
import "./navigationBar.css";

const getAddressPath = (address: string) =>
	`/address/${encodeURIComponent(address)}`;
const getPaintingPath = (address: string, page: string) =>
	`/painting/${encodeURIComponent(address)}/${encodeURIComponent(page)}`;

const AddressItem: React.FC<{
	address: string;
	paintings: Artwork[];
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
						to={getPaintingPath(address, painting.page)}
						className={({ isActive }) =>
							`navigationBarWorkName ${isActive ? "active" : ""}`
						}
						onClick={() => setIsOpen(false)}
					>
						{painting.page}
					</NavLink>
				</li>
			</ul>
		))}
	</div>
);

const NavigationBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { addresses } = useAddresses();

	const toggleMenu = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("menu-open");
		} else {
			document.body.classList.remove("menu-open");
		}
	}, [isOpen]);

	return (
		<>
			<button
				className="burgerButton"
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				☰
			</button>

			{isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

			<div className={`navigationBarContainer ${isOpen ? "open" : ""}`}>
				{addresses.map((item, index) => (
					<AddressItem
						key={index}
						address={item.name}
						paintings={item.artworks}
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
					rel="noopener noreferrer"
					onClick={() => setIsOpen(false)}
				>
					ig
				</a>
			</div>
		</>
	);
};

export default NavigationBar;
