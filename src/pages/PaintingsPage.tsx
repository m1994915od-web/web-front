import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import Skeleton from "../components/skeleton/Skeleton";
import type { Artwork } from "../types";
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
				<PaintingCard
					key={index}
					painting={painting}
					locationName={location.name}
				/>
			))}
		</div>
	);
};

interface PaintingCardProps {
	painting: Artwork;
	locationName: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({
	painting,
	locationName,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const linkTo = `/painting/${encodeURIComponent(
		locationName
	)}/${encodeURIComponent(painting.page)}`;

	return (
		<div className="paintingWrapper">
			{!isLoaded && <Skeleton width="170px" height="170px" />}

			<Link to={linkTo}>
				<img
					className={`paintingPageImage ${isLoaded ? "visible" : "hidden"}`}
					src={painting.images[0]?.url}
					alt={painting.title}
					onLoad={() => setIsLoaded(true)}
					onError={() => setIsLoaded(true)}
				/>
			</Link>
		</div>
	);
};

export default PaintingsPage;
