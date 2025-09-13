import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import "../styles/paintingPage.css";

const PaintingsPage: React.FC = () => {
	const { address } = useParams<{ address: string }>();
	const { addresses } = useAddresses();

	const location = addresses.find(
		(item) => item.name === decodeURIComponent(address || "")
	);

	if (!location) return <div>Address not found</div>;

	return (
		<div className="paintingPageContainer">
			{location.artworks.map((painting, index) => (
				<div key={index}>
					<Link
						to={`/painting/${encodeURIComponent(
							location.name
						)}/${encodeURIComponent(painting.title)}`}
					>
						<img
							className="paintingPageImage"
							src={painting.images[0]?.url}
							alt={painting.title}
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default PaintingsPage;
