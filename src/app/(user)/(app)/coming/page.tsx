"use client";
import Header from "@/app/(user)/components/header";
import * as S from "./style.css";
import Footer from "@/app/(user)/components/footer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Coming = () => {
  const [data, setData] = useState({
    address: "",
    information: "",
    contact: "",
    openingHour: "",
    road: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/hashtag/post/save`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
        console.log("불러온 데이터:", response.data);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    fetchData();
  }, []); // 빈 배열을 사용해 컴포넌트 마운트 시 1회 실행

  const { MainAddress, OtherText, TellNumber, ComingText, Time } = {
    MainAddress: data.address,
    OtherText: data.information,
    TellNumber: data.contact,
    Time: data.openingHour,
    ComingText: data.road,
  };

  return (
    <>
      <Header />
      <div className={S.ComingLayout}>
        <div className={S.ComingTitle}>오시는 길</div>
        <div className={S.ComingMapContainer}>
          <div className={S.ComingMaps}></div>
          <div className={S.ComingTexts}>
            <div className={S.ComingMainAddress}>{MainAddress}</div>
            <div className={S.ComingComents}>
              <div className={S.ComingLogoText}>
                <Image
                  alt="TellIcon"
                  src="/Parking.svg"
                  width={24}
                  height={24}
                ></Image>
                {OtherText}
              </div>
              <div className={S.ComingLogoText}>
                <Image
                  alt="TellIcon"
                  src="/Timer.svg"
                  width={24}
                  height={24}
                ></Image>
                {Time}
              </div>
              <div className={S.ComingLogoText}>
                <Image
                  alt="TellIcon"
                  src="/Tell.svg"
                  width={24}
                  height={24}
                ></Image>
                {TellNumber}
              </div>
            </div>
            <div className={S.ComingComing}>
              <div className={S.ComingComingTitle}>오시는 길</div>
              <div className={S.ComingText}>{ComingText}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coming;
