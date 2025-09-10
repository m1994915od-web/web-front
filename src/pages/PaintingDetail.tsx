import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "../styles/paintingDetail.css";

const PaintingDetail: React.FC = () => {
	const { address, title } = useParams<{ address: string; title: string }>();
	const location = data.find(
		(item) => item.address === decodeURIComponent(address || "")
	);
	const painting = location?.paintings.find(
		(p) => p.title === decodeURIComponent(title || "")
	);

	if (!painting) return <div>Painting not found</div>;

	return (
		<div className="paintingDetailContainer">
			<img
				src={painting.link}
				alt={painting.title}
				className="paintingDetailImage"
			/>
			<h1 className="paintingDetailTitle">{painting.title}</h1>
			<p className="paintingDetailDescription">{painting.description}</p>
			<p className="paintingDetailSize">Size: {painting.size}</p>
		</div>
	);
};

export default PaintingDetail;
