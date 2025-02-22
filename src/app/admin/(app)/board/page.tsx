"use client";

import * as S from "./style.css";
import Footer from "@/app/admin/components/footer";
import Image from "next/image";
import BoardBox from "@/app/(user)/components/boardBox";
import Header from "@/app/admin/components/header";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

// Post 타입 정의
interface Post {
  imageUrl?: string;
  title: string;
  date: string;
}

const Board = () => {
  const [CategoryData, setCategoryData] = useState({
    name: "",
    content: "",
  });

  const [BoardData, setBoardData] = useState([{
    id: Number,
    title: "",
    content: "",
    date: "",
    img: ""
  }]);

  const searchParams = useSearchParams();
  const index = searchParams.get('index');
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const year = date.getFullYear(); // 연도
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 +1)
    const day = String(date.getDate()).padStart(2, "0"); // 일
    
    return `${year}.${month}.${day}`; // 원하는 형식으로 반환
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const index = searchParams.get("index"); // searchParams에서 index를 가져옵니다.
        if (index) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/hashtag/${index}`, // URL 수정
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setCategoryData(response.data); // CategoryData 업데이트
          // setPosts(response.data.posts || []); // 게시물 데이터를 받아와서 업데이트
        }
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    const fetchBoardData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/hashtag/${index}/posts`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setBoardData(response.data);
        console.log("불러온 데이터:", response.data);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    fetchBoardData();
    fetchData();
  }, []);
  const {
    SearchPlaceholder,
  } = {
    SearchPlaceholder: "검색어를 입력해주세요.",
  };


  return (
    <>
      <Header />
      <div className={S.BoardLayout}>
        <div className={S.BoardTitle}>
          <p className={S.Title}>{CategoryData.name}</p>
          <div>수정</div>
          <div>삭제</div>
          <div className={S.WriteButton} onClick={()=>{window.location.href = `/admin/write?index=${index}`;}}>
            글작성
          </div>
        </div>

        <div className={S.BoardTitleBottom}>
          <div className={S.BoardTitleText}>

            전체 <div className={S.BoardTitleNumber}>{BoardData.length}</div>건

          </div>
          <div className={S.BoardSearchBox}>
            <input
              name="BoardSearch"
              className={S.BoardTitleInput}
              type="text"
              placeholder="검색어를 입력해주세요."
            />
            <Image
              src="/Search.svg"
              alt="SearchIcon"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className={S.BoardBoxList}>

          {BoardData.map((data, index) => (
            <BoardBox
              key={index}
              ImageUrl={data.img || "/gray.png"} // img가 없으면 기본 이미지 사용
              Date={formatDate(data.date)}
              Title={data.title}

            />
          ))}
        </div>
{/* 
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
              />
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Board;