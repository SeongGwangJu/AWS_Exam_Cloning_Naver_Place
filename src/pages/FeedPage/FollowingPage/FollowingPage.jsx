import React, { useEffect, useRef } from "react";
import MainContainer from "../../../components/MainContainer/MainContainer";
import CustomViewType from "../../../components/MainContainer/Feed/CustomViewType/CustomViewType";
import CategoryViewType from "../../../components/MainContainer/Feed/CategoryViewType/CategoryViewType";
import FeedList from "../../../constants/FeedList";
import { useRecoilState } from "recoil";
import { selectedCategoryState } from "../../../store/selectedCategory";
import Content from "../../../components/MainContainer/Feed/Content/Content";

function FollowingPage(props) {

	const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState);
    	//처음 실행하면 SelectedCategory가 "all로 변함"
	const isFirstLoad = useRef(true);
	useEffect(() => {
	if (isFirstLoad.current) {
		isFirstLoad.current = false;
		setSelectedCategory("all");
	}
	},[]);

	return (
		<>
			<MainContainer>
				<CustomViewType />
				<CategoryViewType />
				{FeedList.filter((feed) =>
					(selectedCategory === "all"
						? true
						: selectedCategory === feed.category) && (feed.userId==2)
				).map((feed) => (
					<Content
						id={feed.id}
						category={feed.category}
						location={feed.location}
						userId={feed.userId}
						imgLink={feed.imgLink}
						imgLink2={feed.imgLink2}
						imgLink3={feed.imgLink3}
						reviewTxt={feed.reviewTxt}
						selectedStickerIds={feed.selectedStickerIds}
						date={feed.date}
						placeName={feed.placeName}
					/>
				))}
			</MainContainer>
		</>
	);
}

export default FollowingPage;
