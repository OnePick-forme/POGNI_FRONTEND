import Header from "@/app/user/components/header";
import * as S from "./style.css";
// import Link from "next/link";
import Footer from "@/app/user/components/footer";
import Image from "next/image";
import BoardBox from "@/app/user/components/boardBox";

const Board = () => {
  const {
    TitleName,
    SearchPlaceholder,
    BoardBoxImageUrl,
    BoardBoxTitle,
    BoardBoxDate,
  } = {
    TitleName: "즐거운 체험활동",
    SearchPlaceholder: "검색어를 입력해주세요.",
    BoardBoxImageUrl: "/Search.svg",
    BoardBoxTitle: "양말 목재 활동 공예~ 새학기 내 방석은 내가 짠다!",
    BoardBoxDate: "2024.12.13",
  };
  const BoardBoxArray = Array.from({ length: 9 });

  return (
    <>
      <Header />
      <div className={S.BoardLayout}>
        <div className={S.BoardTitle}>
          <p className={S.Title}>{TitleName}</p>
          <div>수정</div>
          <div>삭제</div>
          <div className={S.WriteButton}>글작성</div>
        </div>

        <div className={S.BoardTitleBottom}>
          <div className={S.BoardTitleText}>
            전체 <div className={S.BoardTitleNumber}>{13}</div>건
          </div>
          <div className={S.BoardSearchBox}>
            <input
              name="BoardSearch"
              className={S.BoardTitleInput}
              type="text"
              placeholder={SearchPlaceholder}
            />
            <Image
              src="/Search.svg"
              alt="SearchIcon"
              width={16}
              height={16}
            ></Image>
          </div>
        </div>

        <div className={S.BoardBoxList}>
          {BoardBoxArray.map((_, index) => (
            <BoardBox
              key={index}
              ImageUrl={BoardBoxImageUrl}
              Date={BoardBoxDate}
              Title={BoardBoxTitle}
            />
          ))}
        </div>
        <div className={S.BoardBoxSlide}>
          <div className={S.BoardBoxNumbers}>
            <div className={S.BoardBoxSelectNumbers}>1</div>
            <div>2</div>
            <div className={S.BoardBoxSlideButton}>
              <Image
                src="/Arrow.svg"
                alt="ArrowIcon"
                width={10}
                height={16}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Board;
