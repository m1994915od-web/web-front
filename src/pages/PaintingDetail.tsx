import React from "react";
import { useParams } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import "../styles/paintingDetail.css";

const PaintingDetail: React.FC = () => {
	const { addresses } = useAddresses();
	const { address, page } = useParams<{ address: string; page: string }>();
	const location = addresses.find(
		(item) => item.name === decodeURIComponent(address || "")
	);
	const painting = location?.artworks.find(
		(p) => p.page === decodeURIComponent(page || "")
	);
	if (!painting) return <div>Painting not found</div>;

	return (
		<div className="paintingDetailContainer">
			<div className="paintingDetailInfo">
				{painting.title && (
					<h1 className="paintingDetailTitle">{painting.title}</h1>
				)}
				{painting.description && (
					<p className="paintingDetailDescription">{painting.description}</p>
				)}
				{painting.size && (
					<p className="paintingDetailSize">Size: {painting.size}</p>
				)}
			</div>

			{painting.images.length > 0 && (
				<div>
					{painting.images.map((img, index) => (
						<img
							key={index}
							src={img.url}
							alt={`${painting.title} - ${index + 2}`}
							className="paintingDetailImage"
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default PaintingDetail;
