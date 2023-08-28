import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { GrPrevious, GrNext} from "react-icons/gr";

function CategoryCategory(props) {


    // for 카테고리 버튼의 Active Style 변경
    // let selectedId = 0;
    const [ selectedId, setSelectedId ] = useState(0);
    // const [ isSelected, setIsSelected ] = useState(false);

    // for 스크롤 버튼의 Visible값 변경
    const [ isPreviousButtonsVisible, setIsPreviousButtonsVisible ] = useState(false);
    const [ isNextButtonsVisible, setIsNextButtonsVisible ] = useState(true);
    const [ scrollValue, setScrollValue ] = useState(0);
    //버튼의 리스트 관리
    const CategoryBtnList = [
        {   id: 1,
            name: "한식",
        },
        {   id: 2,
            name: "카페",
        },
        {   id: 3,
            name: "양식",
        },
        {   id: 4,
            name: "중식",
        },
        {   id: 5,
            name: "분식",
        },
        {   id: 6,
            name: "치킨",
        },
        {    id: 7,
            name: "가족식사",
        },
        {    id: 8,
            name: "놀이공원",
        },
        {    id: 9,
            name: "놀이터",
        },
        {    id: 10,
            name: "어린이집",
        },
        {    id: 11,
            name: "문화재",
        },
        {    id: 12,
            name: "자연명소",
        },
        {    id: 13,
            name: "일식",
        },
        {    id: 14,
            name: "뷔페",
        },
        {    id: 15,
            name: "물놀이",
        },
        {    id: 16,
            name: "숙박",
        },
        {    id: 17,
            name: "피크닉",
        },
        {    id: 18,
            name: "등산",
        },
        {    id: 19,
            name: "레저",
        },
        {    id: 20,
            name: "액티비티",
        },
        {    id: 21,
            name: "트레킹",
        },
        {    id: 22,
            name: "체험관광",
        },
    ]

    //버튼의 위치를 어림잡아주는 함수
    const calculateScrollValueByBtnId = (id) => {
        let buttonNameLengthSum = 0;

        for (let i = 0; i < id; i++) {
            buttonNameLengthSum += CategoryBtnList[i].name.length;
        }

        //한글자마다 14px이 늘고
        //버튼의 개수당 33.33px씩 늘어남
        let buttonLocation = 14 + (buttonNameLengthSum * 14) + (id * 33.33);
        return buttonLocation;
    }

    //next버튼의 visible 상태 update + 스크롤이 너무 많이 가지 않도록
    //마지막 버튼의 위치를 구함
    const LastBtnLocation = calculateScrollValueByBtnId(CategoryBtnList.slice(-1)[0].id);

    //커서를 올리면 현재 스크롤된 정도에 따라 버튼 Visible상태를 변하게 함.
    const handleMouseEnter = () => {
        if(scrollValue > 370) {
            setIsPreviousButtonsVisible(true);
        } else {
            setIsPreviousButtonsVisible(false );
        }

        if((LastBtnLocation - scrollValue) < 360) {
            setIsNextButtonsVisible(false);
        } else {
            setIsNextButtonsVisible(true);
        }
    };

    //커서가 떠나면 버튼이 사라진다
    const handleMouseLeave = () => {
        setIsPreviousButtonsVisible(false);
        setIsNextButtonsVisible(false);
    };
    //카테고리 버튼을 클릭시
    //스타일 + 스크롤 + '<>'버튼 visible 변경
    const handleCategoryBtnClick = (id, name) => {
        //id를 변경해 선택된 버튼만 스타일 변경해줌
        setSelectedId(id);

        // 누른 버튼의 위치에따라 스크롤과 버튼상태 변경함
        if(calculateScrollValueByBtnId(id) < 370) { //첫버튼이 보일 때
            setScrollValue(-(calculateScrollValueByBtnId(id)-370))
            setIsPreviousButtonsVisible(false);

        //처음 상태보다 스크롤이 조금이라도 증가했고
        //마지막 버튼이 모두 보이지 않을 때
        } else if((calculateScrollValueByBtnId(id)) >370 &&
        (LastBtnLocation - calculateScrollValueByBtnId(id)) > 370 ) {
            setScrollValue(calculateScrollValueByBtnId(id));
            setIsPreviousButtonsVisible(true);
            setIsNextButtonsVisible(true);

        //마지막 버튼이 모두 보이면 더이상 스크롤을 옮기지 않음
        } else {
            setScrollValue(LastBtnLocation-330)
            setIsNextButtonsVisible(false);
        }
    };

    //왼쪽버튼 클릭시 왼쪽으로 720px만큼 이동함
    const handlePreviousBtnClick = () => {

        // 720px만큼 이동하는 조건 : 적당히 오른쪽일때
        if(scrollValue > 1090) {
            setScrollValue(scrollValue - 720);

        // 많이 옮길 필요가 없으면 적당히 옮기고 버튼 사라짐
        }else {
            setScrollValue(370);
            setIsPreviousButtonsVisible(false);
        }
    }

    const handleNextBtnClick = () => {
        //720px만큼 이동했을 때 마지막 버튼이 보일정도면
        //최대치로 이동하고 다음 버튼이 사라진다
        if(scrollValue > (LastBtnLocation-1090)) {
            setScrollValue(LastBtnLocation-330)
            setIsNextButtonsVisible(false);

        //버튼을 한번 더 눌러도 마지막 버튼이 안보인다면
        //720px만큼 이동한다
        } else {
            setScrollValue(scrollValue + 720);
        }
    }

    return (
            <div css={S.SContainer}>
                <div css={S.SCategoryBtnListBoxs}>
                    <div
                    css={S.SHiddenScrollBox(scrollValue-370)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        {CategoryBtnList.map(CategoryBtn => (
                        <div css={S.SCategoryBtnListBox}>
                            <button css={S.SCategoryBtnList(CategoryBtn.id===selectedId)}
                                key={CategoryBtn.id}
                                onClick={() => {handleCategoryBtnClick(CategoryBtn.id, CategoryBtn.name);
                            }}>
                            {CategoryBtn.name}
                            </button>
                        </div>
                        ))}
                    </div>
                    <button css={S.SPreviousBtn(isPreviousButtonsVisible)}
                    onClick={handlePreviousBtnClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        <GrPrevious />
                    </button>
                    <button css= {S.SNextBtn(isNextButtonsVisible)}
                    onClick={handleNextBtnClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} >
                        <GrNext />
                    </button>
                </div>
            </div>
    );
}

export default CategoryCategory;