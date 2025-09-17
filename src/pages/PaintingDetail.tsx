import React from "react";
import { useParams } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import "../styles/paintingDetail.css";

const PaintingDetail: React.FC = () => {
	const { addresses } = useAddresses();
	const { address, title } = useParams<{ address: string; title: string }>();
	const location = addresses.find(
		(item) => item.name === decodeURIComponent(address || "")
	);
	const painting = location?.artworks.find(
		(p) => p.title === decodeURIComponent(title || "")
	);
	if (!painting) return <div>Painting not found</div>;
	return (
		<div className="paintingDetailContainer">
			<div className="paintingInfo">
				<h1 className="paintingDetailTitle">{painting.title}</h1>
				<p className="paintingDetailDescription">{painting.description}</p>
				{painting.size && (
					<p className="paintingDetailSize">Size: {painting.size}</p>
				)}
			</div>
			<img
				src={painting.images[0]?.url}
				alt={painting.title}
				className="paintingDetailImage"
			/>
			<div>
				{painting.images.slice(1).map((img, index) => (
					<img
						key={index}
						src={img.url}
						alt={`${painting.title} - ${index + 2}`}
						className="paintingDetailImage"
					/>
				))}
			</div>
		</div>
	);
};

export default PaintingDetail;
