import Header from "@/app/user/components/header";
import * as S from "./style.css";
// import Link from "next/link";
import Footer from "@/app/user/components/footer";
import Image from "next/image";

const ViewDeatil = () => {
  const {Title,Date,Text}={
    Title:"양말 목재 활동 공예~ 새학기 내 방석은 내가 짠다!",
    Date:"2024.03.07",
    Text:"이번 체험 활동은 정말 특별했어요! \n학생들이 처음엔 양말 목재라는 재료에 낯설어하셨지만, 금세 흥미를 느끼고 즐겁게 몰입하는 모습이 인상 깊었어요."
  }

  return (
    <>
    <Header />
    <div className={S.DetailLayout}>
        <div className={S.DetailShow}>
            <div className={S.DetailTitle}>
                <div className={S.DetailTitleText}>
                    {Title}
                </div>
                <div className={S.DetailTitleDate}>
                    {Date}
                </div>
            </div>
            <div className={S.DetailContainer}>
                <div className={S.DetailTexts}>
                    {Text}
                </div>
                <div className={S.DetailImage}>
                <Image src="/Search.svg" alt="SearchIcon" width={590} height={416}></Image>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default ViewDeatil;
