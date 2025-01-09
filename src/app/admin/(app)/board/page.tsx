"use client";
import * as S from "./style.css";
import Link from "next/link";
import Footer from "@/app/admin/components/footer";
import Image from "next/image";
import BoardBox from "@/app/(user)/components/boardBox";
import Header from "@/app/admin/components/header";
import { useSearchParams } from 'next/navigation';
import { useState,useEffect } from "react";
import axios from "axios";

const Board = () => {
  const [CategoryData, setCategoryData] = useState({
    name: "",
    content: "",
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/hashtag/${index}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setCategoryData(response.data);
        console.log("불러온 데이터:", response.data);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };
    const index = searchParams.get('index');
    fetchData();
  }, []);
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
          <Link href={"/admin/write"} className={S.WriteButton}>
            글작성
          </Link>
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
