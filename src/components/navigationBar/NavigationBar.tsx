import React from "react";
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
}> = ({ address, paintings }) => (
	<div className="navigationBarAddressContainer">
		<NavLink
			to={getAddressPath(address)}
			className={({ isActive }) =>
				`navigationBarAddressText ${isActive ? "active" : ""}`
			}
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
					>
						{painting.title}
					</NavLink>
				</li>
			</ul>
		))}
	</div>
);

const NavigationBar: React.FC = () => (
	<div className="navigationBarContainer">
		{data.map((item, index) => (
			<AddressItem
				key={index}
				address={item.address}
				paintings={item.paintings}
			/>
		))}
		<NavLink
			to="/statement"
			className={({ isActive }) =>
				`navigationBarNavText ${isActive ? "active" : ""}`
			}
		>
			statement
		</NavLink>
		<NavLink
			to="/cv"
			className={({ isActive }) =>
				`navigationBarNavText ${isActive ? "active" : ""}`
			}
		>
			cv
		</NavLink>
		<a
			href="https://www.instagram.com/marisa.odl"
			className="navigationBarNavText"
		>
			ig
		</a>
	</div>
);

export default NavigationBar;
