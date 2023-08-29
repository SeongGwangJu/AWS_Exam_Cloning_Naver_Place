import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import CustomViewType from "./CustomViewType/CustomViewType";
import CategoryViewType from "./CategoryViewType/CategoryViewType";
import Content from "./Content/Content";
import FeedList from "../../../constants/FeedList";

function Feed(props) {
	return (
		<>
			<CustomViewType />
			<CategoryViewType category={FeedList.category} />
			{FeedList.map((feed) => (
				<Content
					id={feed.id}
					category={feed.category}
					location={feed.location}
					profileImg={feed.profileImg}
					username={feed.username}
					reviewCount={feed.reviewCount}
					followerCount={feed.followerCount}
					imgBoxCount={feed.imgBoxCount}
					imgLink={feed.imgLink}
					imgLink2={feed.imgLink2}
					reviewTxt={feed.reviewTxt}
					selectedStickerIds={feed.selectedStickerIds}
					date={feed.date}
					placeName={feed.placeName}
				/>
			))}
		</>
	);
}

export default Feed;
