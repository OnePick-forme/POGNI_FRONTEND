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
  id: string; // 게시글 ID 추가
  imageUrl?: string;
  title: string;
  date: string;
}

const Board = () => {
  const [CategoryData, setCategoryData] = useState({
    name: "",
    content: "",
  });
  const [posts, setPosts] = useState<Post[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const index = searchParams.get("index");
        console.log("index:", index); // index 값 확인
        if (index) {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/hashtag/${index}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("response.data:", response.data); // 서버 응답 데이터 확인
          setCategoryData(response.data);
          setPosts(response.data.posts || []);
        } else {
          console.warn("index 값이 없습니다.");
        }
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
        alert("게시글 데이터를 불러오는 데 실패했습니다.");
      }
    };

    fetchData();
  }, [searchParams]);

  const { name: TitleName } = CategoryData;

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
            <Image src="/Search.svg" alt="SearchIcon" width={16} height={16} />
          </div>
        </div>

        <div className={S.BoardBoxList}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.id}
                href={`/detail/${post.id}`} // 상세페이지 경로
              >
                <BoardBox
                  ImageUrl={post.imageUrl || "/Search.svg"}
                  Date={post.date || "2024.12.13"}
                  Title={post.title || "기본 제목"}
                />
              </Link>
            ))
          ) : (
            <p>현재 게시글이 없습니다.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Board;
