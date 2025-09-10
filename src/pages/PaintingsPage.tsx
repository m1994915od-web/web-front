import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";
import "../styles/paintingPage.css";

const PaintingsPage: React.FC = () => {
	const { address } = useParams<{ address: string }>();
	const location = data.find(
		(item) => item.address === decodeURIComponent(address || "")
	);

	if (!location) return <div>Address not found</div>;

	return (
		<div className="paintingPageContainer">
			{location.paintings.map((painting, index) => (
				<div key={index}>
					<Link
						to={`/painting/${encodeURIComponent(
							location.address
						)}/${encodeURIComponent(painting.title)}`}
					>
						<img
							className="paintingPageImage"
							src={painting.link}
							alt={painting.title}
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default PaintingsPage;
