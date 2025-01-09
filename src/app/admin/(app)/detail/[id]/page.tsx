"use client";

import Header from "@/app/admin/components/header";
import * as S from "./style.css";
import Footer from "@/app/(user)/components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

// Post 데이터 타입 정의
interface PostData {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl?: string;
}

const Detail = () => {
  const { id } = useParams(); // URL의 id 파라미터 가져오기
  const [postData, setPostData] = useState<PostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/post/${id}`, // id 기반 데이터 요청
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPostData(response.data);
        setIsLoading(false); // 로딩 상태 업데이트
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>; // 로딩 상태 처리
  }

  if (!postData) {
    return <p>게시글 데이터를 찾을 수 없습니다.</p>; // 데이터 없음 처리
  }

  const { title, date, content, imageUrl } = postData;

  return (
    <>
      <Header />
      <div className={S.DetailLayout}>
        <div className={S.DetailShow}>
          <div className={S.DetailTitle}>
            <div className={S.DetailTitleText}>{title}</div>
            <div className={S.DetailEdit}>
              <div>수정</div>
              <div>삭제</div>
            </div>
          </div>

          <div className={S.DetailContainer}>
            <div className={S.DetailTitleDate}>{date}</div>
            <div className={S.DetailTexts}>{content}</div>

            <div className={S.DetailImage}>
              {imageUrl ? (
                <Image src={imageUrl} alt={title} width={590} height={416} />
              ) : (
                <Image
                  src="/Search.svg"
                  alt="Default Image"
                  width={590}
                  height={416}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
