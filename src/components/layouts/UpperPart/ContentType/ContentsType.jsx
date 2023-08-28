import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from "react-router-dom";

function ContentsType(props) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isSelected, setIsSelected] = useState(false);

	const ContentsTypeList = [
		{
			id: 1,
			name: "피드",
			path: "/feed",
		},
		{
			id: 2,
			name: "타임라인",
			path: "/timeline",
		},
		{
			id: 3,
			name: "리뷰",
			path: "/review",
		},
		{
			id: 4,
			name: "예약주문",
			path: "/booked",
		},
		{
			id: 5,
			name: "저장",
			path: "/saved",
		},
	];

	const handleContentsTypeClick = (path) => {
		navigate(path);
		setIsSelected(true);
	};

	return (
		<div css={S.SLayout}>
			<ul css={S.ContentTypeBox}>
				{ContentsTypeList.map((ContentsType) => (
					<button
						css={S.SContentTypelist(
							location.pathname.includes(ContentsType.path)
						)}
						key={ContentsType.id}
						onClick={() => {
							handleContentsTypeClick(ContentsType.path);
						}}
					>
						{ContentsType.name}
					</button>
				))}
			</ul>
		</div>
	);
}

export default ContentsType;
