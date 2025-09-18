import React from "react";
import "../styles/cvPage.css";

const CvPage: React.FC = () => {
	return (
		<div className="cvPageContainer">
			<p className={`cvPageText marginBottomS`}>b.1994, El Paso, TX</p>

			<p className={`cvPageText marginBottomM`}>M.1994.915.OD@gmail.com</p>

			<p className={`cvPageText marginBottomS`}>education:</p>

			<p className="cvPageText">2025 MFA- UCLA, Los Angeles, CA</p>
			<p className={`cvPageText marginBottomM`}>
				2019 BFA- RISD, Providence, RI
			</p>

			<p className={`cvPageText marginBottomS`}>exhibitions:</p>

			<p className="cvPageText">2025 New Wight Gallery, Los Angeles, CA</p>
			<p className="cvPageText">2022 El Paso Museum of Art, El Paso, TX</p>
			<p className="cvPageText">2022 Wresh Findow, Blackbox, El Paso, TX</p>
			<p className={`cvPageText marginBottomM`}>
				2019 Woods-Gerry Gallery, Providence, RI
			</p>

			<p className={`cvPageText marginBottomS`}>awards:</p>

			<p className="cvPageText">Helen Frankenthaler Scholarship, 2024-25</p>
			<p className="cvPageText">
				Elaine Brown Klein Fine Arts Scholarship, 2024-25
			</p>
			<p className="cvPageText">UCLA University Fellowship, 2023-24</p>
			<p className="cvPageText">UCLA Department of Art Award, 2023-24</p>
			<p className="cvPageText">UCLA Faculty and Alumni Award, 2023-24</p>
			<p className="cvPageText">
				Edward J. and Alice Mae Smith Scholarship, 2023-24
			</p>
			<p className={`cvPageText marginBottomM`}>
				El Paso Museum of Art Fellowship, 2022
			</p>

			<p className={`cvPageText marginBottomS`}>articles and publications:</p>

			<p className="cvPageText">
				M.O’D-L. “recreation”. UCLA Library, Los Angeles, 2025
			</p>
			<p className="cvPageText">
				Claudia Ross. “The Dizzying Range of UCLA’s MFA Show”. Hyperallergic,
				04/10/2025
			</p>
		</div>
	);
};

export default CvPage;
