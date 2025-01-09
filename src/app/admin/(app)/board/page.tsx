"use client";

import * as S from "./style.css";
import Link from "next/link";
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
  const [posts, setPosts] = useState<Post[]>([]); // 게시물 데이터의 타입을 정의

  const searchParams = useSearchParams();

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
          setPosts(response.data.posts || []); // 게시물 데이터를 받아와서 업데이트
        }
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    fetchData(); // 함수 호출
  }, [searchParams]); // searchParams가 변경될 때마다 fetchData를 호출

  const {
    name: TitleName,

  } = CategoryData;

  const BoardBoxArray: Post[] = posts.length > 0 ? posts : [{ title: "기본 제목", date: "2024.12.13" }];

  return (
    <>
      <Header />
      <div className={S.BoardLayout}>
        <div className={S.BoardTitle}>
          <p className={S.Title}>{TitleName}</p>
          <div>수정</div>
          <div>삭제</div>
          <Link href="/admin/write" className={S.WriteButton}>
            글작성
          </Link>
        </div>

        <div className={S.BoardTitleBottom}>
          <div className={S.BoardTitleText}>
            전체 <div className={S.BoardTitleNumber}>{posts.length}</div>건
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
          {BoardBoxArray.map((post, index) => (
            <BoardBox
              key={index}
              ImageUrl={post.imageUrl || "/Search.svg"} // 게시물의 이미지 URL이 없으면 기본 값 사용
              Date={post.date || "2024.12.13"} // 게시물의 날짜가 없으면 기본 날짜 사용
              Title={post.title || "양말 목재 활동 공예~ 새학기 내 방석은 내가 짠다!"} // 제목 기본값
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