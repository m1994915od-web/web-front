import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddresses } from "../context/AddressContext";
import Skeleton from "../components/skeleton/Skeleton";
import "../styles/paintingDetail.css";

const PaintingDetail: React.FC = () => {
	const { addresses } = useAddresses();
	const [loadedImages, setLoadedImages] = useState<number>(0);
	const { address, page } = useParams<{ address: string; page: string }>();

	const location = addresses.find(
		(item) => item.name === decodeURIComponent(address || "")
	);
	const painting = location?.artworks.find(
		(p) => p.page === decodeURIComponent(page || "")
	);

	if (!painting) return <div>Painting not found</div>;

	const totalImages = painting.images.length;
	const allImagesLoaded = totalImages > 0 && loadedImages >= totalImages;

	const handleImageLoad = () => setLoadedImages((prev) => prev + 1);

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

			{!allImagesLoaded && (
				<div className="paintingDetailSkeletonWrapper">
					<Skeleton width="100%" height="400px" borderRadius="10px" />
				</div>
			)}

			<div
				className={`paintingDetailImagesWrapper ${
					allImagesLoaded ? "visible" : "hidden"
				}`}
			>
				{painting.images.map((img, index) => (
					<img
						key={index}
						src={img.url}
						alt={`${painting.title} - ${index + 1}`}
						className="paintingDetailImage"
						onLoad={handleImageLoad}
						onError={handleImageLoad}
					/>
				))}
			</div>
		</div>
	);
};

export default PaintingDetail;
