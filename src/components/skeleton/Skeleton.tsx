import React from "react";
import "./skeleton.css";

type SkeletonProps = {
	width: string | number;
	height: string | number;
	borderRadius?: string | number;
};

const Skeleton: React.FC<SkeletonProps> = ({ width, height }) => {
	return <div className="skeleton" style={{ width, height }} />;
};

export default Skeleton;
