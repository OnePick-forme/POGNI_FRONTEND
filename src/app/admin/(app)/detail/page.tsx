import Header from "@/app/admin/components/header";
import * as S from "./style.css";
import Footer from "@/app/(user)/components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { Title, Date, Text } = {
    Title: "양말 목재 활동 공예~ 새학기 내 방석은 내가 짠다!",
    Date: "2024.03.07",
    Text: "이번 체험 활동은 정말 특별했어요! \n학생들이 처음엔 양말 목재라는 재료에 낯설어하셨지만, 금세 흥미를 느끼고 즐겁게 몰입하는 모습이 인상 깊었어요.",
  };

  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/hashtag/post/{id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={S.DetailLayout}>
        <div className={S.DetailShow}>
          <div className={S.DetailTitle}>
            <div className={S.DetailTitleText}>{Title}</div>
            <div className={S.DetailEdit}>
              <div>수정</div>
              <div>삭제</div>
            </div>
          </div>

          <div className={S.DetailContainer}>
            <div className={S.DetailTitleDate}>{Date}</div>
            <div className={S.DetailTexts}>{Text}</div>

            {/* postData가 존재하면 데이터를 출력 */}
            {postData ? (
              <div className={S.DetailFetchedData}>
                <h3>Fetched Data:</h3>
                <pre>{JSON.stringify(postData, null, 2)}</pre>
              </div>
            ) : (
              <p>Loading data...</p>
            )}

            <div className={S.DetailImage}>
              <Image
                src="/Search.svg"
                alt="SearchIcon"
                width={590}
                height={416}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
