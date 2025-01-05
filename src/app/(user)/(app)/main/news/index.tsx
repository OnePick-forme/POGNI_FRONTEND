// News.tsx
import NewsBox from "@/app/(user)/components/newsBox";
import * as S from "./style.css";

const News = () => {
  const { Title, Text } = {
    Title: "에코포니의 소식",
    Text: "앞으로도 달려나갈 에코포그니의 소식을 전합니다.",
  };

  const tidingsData = [
    {
      Type: "전체",
      Title: "양말 목재 활동 공예~ 새학기 내...",
      Date: "2024.03.07",
    },
    {
      Type: "전체",
      Title: "할인 행사",
      Date: "2025.01.10",
    },
    {
      Type: "공지사항",
      Title: "서버 점검 안내",
      Date: "2025.01.15",
    },
    {
      Type: "이벤트",
      Title: "커뮤니티 챌린지",
      Date: "2025.01.20",
    },
    {
      Type: "이벤트",
      Title: "커뮤니티 챌린지",
      Date: "2025.01.20",
    },
    {
      Type: "이벤트",
      Title: "커뮤니티 챌린지",
      Date: "2025.01.20",
    },
  ];

  return (
    <>
      <div className={S.NewsLayout}>
        <div className={S.Text}>
          <div className={S.HashTag}>#</div>
          <div className={S.NewsTitle}>{Title}</div>
        </div>
        <div className={S.NewsText}>{Text}</div>

        <div className={S.ImageLayout}>
          {tidingsData.map((tiding, index) => (
            <NewsBox
              ImageUrl="https://modo-phinf.pstatic.net/20210515_222/1621045773894VFECT_JPEG/mosaUvZ5fS.jpeg?type=w720"
              key={index}
              Type={tiding.Type}
              Title={tiding.Title}
              Date={tiding.Date}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
