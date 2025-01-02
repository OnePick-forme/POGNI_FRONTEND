import Header from "@/app/(user)/components/header";
import * as S from "./style.css";
import Link from "next/link";
import Footer from "@/app/(user)/components/footer";
import Image from "next/image";

const Coming = () => {
  const {MainAddress,OtherText,TellNumber,ComingText,Time}={
    MainAddress:"부산 동래구 연안로59번길 99 한국빌딩 1층",
    OtherText:"주차 가능",
    TellNumber:"051-507-6961, 051-507-6963",
    Time:"월 화 목 금 - 오전 10시~오후 05시",
    ComingText:"부산시 경전철 안락역에서 하차, 강변뜨라채 105동옆 안락떡방앗간 골목30미터. 버스는 동래-해운대 길 안락한전 하차"
  }

  return (
    <>
    <Header />
    <div className={S.ComingLayout}>
        <div className={S.ComingTitle}>
            오시는 길
        </div>
        <div className={S.ComingMapContainer}>
            <div className={S.ComingMaps}>

            </div>
            <div className={S.ComingTexts}>
                <div className={S.ComingMainAddress}>
                    {MainAddress}
                </div>
                <div className={S.ComingComents}>
                    <div className={S.ComingLogoText}>
                        <Image alt="TellIcon" src="/Parking.svg" width={24} height={24}></Image>
                        {OtherText}
                    </div>
                    <div className={S.ComingLogoText}>
                        <Image alt="TellIcon" src="/Timer.svg" width={24} height={24}></Image>
                        {ComingText}
                    </div>
                    <div className={S.ComingLogoText}>
                        <Image alt="TellIcon" src="/Tell.svg" width={24} height={24}></Image>
                        {TellNumber}
                    </div>
                </div>
                <div className={S.ComingComing}>
                    <div className={S.ComingComingTitle}>
                        오시는 길
                    </div>
                    <div className={S.ComingText}>
                        {ComingText}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Coming;
