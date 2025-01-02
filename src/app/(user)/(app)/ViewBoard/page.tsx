import Header from "@/app/(user)/components/header";
import * as S from "./style.css";
<<<<<<< HEAD:src/app/user/(app)/ViewBoard/page.tsx
// import Link from "next/link";
import Footer from "@/app/user/components/footer";
=======
import Link from "next/link";
import Footer from "@/app/(user)/components/footer";
>>>>>>> 5ced47194881e04af90a3fed6a022e41bf3de656:src/app/(user)/(app)/ViewBoard/page.tsx
import Image from "next/image";
import BoardBox from "@/app/(user)/components/boardBox";

const viewBoard = () => {
  const {TitleName,SearchPlaceholder,BoardBoxImageUrl,BoardBoxTitle,BoardBoxDate}={
    TitleName:"즐거운 체험활동",
    SearchPlaceholder:"검색어를 입력해주세요.",
    BoardBoxImageUrl:"/Search.svg",
    BoardBoxTitle:"양말 목재 활동 공예~ 새학기 내 방석은 내가 짠다!",
    BoardBoxDate:"2024.12.13"
  }
  const BoardBoxArray = Array.from({length:9});

  return (
    <>
    <Header />
      <div className={S.BoardLayout}>
        <div className={S.BoardTitle}>
            <p>{TitleName}</p>
            <div className={S.BoardTitleBottom}>
                <div className={S.BoardTitleText}>전체 <div className={S.BoardTitleNumber}>{13}</div>건</div>
                <div className={S.BoardSearchBox}>
                    <input name="BoardSearch" className={S.BoardTitleInput} type="text" placeholder={SearchPlaceholder} />
                    <Image src="/Search.svg" alt="SearchIcon" width={16} height={16}></Image>
                </div>
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
            <div className={S.BoardBoxSelectNumbers}>
              1
            </div>
            <div>
              2
            </div>
            <div className={S.BoardBoxSlideButton}>
              <Image src="/Arrow.svg" alt="ArrowIcon" width={10} height={16}></Image>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default viewBoard;
