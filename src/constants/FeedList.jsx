import breadPic1 from "../images/Bread1.jpg";
import breadPic2 from "../images/Bread2.jpg";
import cafePic1 from "../images/Cafe1.jpg";
import cafePic2 from "../images/Cafe2.jpg";
import ikeaPic1 from "../images/Ikea1.jpg";
import ikeaPic2 from "../images/Ikea2.jpg";
import naturePic1 from "../images/Nature1.jpg";
import naturePic2 from "../images/Nature2.jpg";
import ikeaPic3 from "../images/Ikea3.jpg";
import family from "../images/Family.jpg";
import chinese from "../images/China.jpg";
import korean from "../images/Korean.jpg";
import bakery from "../images/bakery.jpg";
import bakery2 from "../images/bakery2.jpg";
import bakery3 from "../images/bakery3.jpg";
export const FeedList = [

	{
		id: 1,
		userId: 1,
		date: "2023.08.16",
		placeName: "이케아 동부산점",
		location: "부산시 기장군 기장읍",
		category: "가구점",
		reviewTxt: "넓어서 아이랑 오기 좋고 가구의 퀄리티가 좋습니다.",
		selectedStickerIds: 3,
		imgLink: ikeaPic1,
		imgLink2: ikeaPic2,
		imgLink3: ikeaPic3,
	},
	{
		id: 2,
		userId: 2,
		date: "2023.08.30",
		placeName: "파리바게트 사직점",
		location: "부산시 동래구 사직동",
		category: "베이커리",
		reviewTxt: "냠냠 너무 맛있다 더줘",
		selectedStickerIds: 4,
		imgLink: breadPic1,
		imgLink2: breadPic2
	},
	{
		id: 3,
		userId: 2,
		date: "2022.06.12",
		placeName: "투썸플레이스 장전점",
		location: "부산시 금정구 장전동",
		category: "카페",
		reviewTxt: "삼촌이랑 와서 너무 행복했어요",
		selectedStickerIds: 1,
		imgLink: cafePic1,
		imgLink2: cafePic2
	},
	{
		id: 4,
		userId: 3,
		date: "2021.03.16",
		placeName: "울산대공원",
		location: "울산시 남구 옥동",
		category: "자연명소",
		reviewTxt:
			"우리 손녀가 열심히 뛰어다녔어요. 그래서 할머니인 저로서는 아이의 에너지를 감당하기 힘들었습니다. 그래도 밖에서 뛰어다니며 행복해하는 아이를 보니 덩달아 기분이 좋아졌습니다. 좋은 경험이였습니다.",
		selectedStickerIds: 7,
		imgLink: naturePic1,
		imgLink2: naturePic2
	},
	{
		id: 5,
		userId: 4,
		date: "2023.08.26",
		placeName: "신라호텔",
		location: "부산시 해운대구 우동",
		category: "가족식사",
		reviewTxt:
			"우리 손녀의 성대한 생일파티. 어찌 나보다 더 크게 생일파티를 하냐?",
		selectedStickerIds: 2,
		imgLink: family,
		imgLink2: naturePic2
	},
	{
		id: 6,
		userId: 3,
		date: "2023.08.11",
		placeName: "명장허짜장",
		location: "부산시 금정구 장전동",
		category: "중식",
		reviewTxt:
			"맛있어요",
		selectedStickerIds: 1,
		imgLink: chinese
	},
	{
		id: 7,
		userId: 3,
		date: "2023.04.13",
		placeName: "거대곰탕",
		location: "부산시 부산진구 부전동",
		category: "한식",
		reviewTxt:
			"맛있는데 좀 비쌉니다. 다시는 안갈거 같아요.",
		selectedStickerIds: 6,
		imgLink: korean
	},
	{
		id: 7,
		userId: 2,
		date: "2023.01.12",
		placeName: "이흥용베이커리 부산대점",
		location: "부산시 금정구 장전동",
		category: "베이커리",
		reviewTxt:
			"케이크도 이쁘고 정말 맛있습니다. 이 정도 맛인데 이정도 가격은 정말 합리적이네요. 다음에도 생일케이크가 필요하면 또 방문할 예정입니다.",
		selectedStickerIds: 4,
		imgLink: bakery,
		imgLink2: bakery2,
		imgLink3: bakery3
	},
];
export default FeedList;
