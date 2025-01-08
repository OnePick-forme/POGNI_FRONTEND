"use client";

import { useEffect } from "react";
import * as S from "./style.css";

const Load = () => {
  const { Title, Text } = {
    Title: "오시는 길",
    Text: "에코포그니는로 오시는 길",
  };
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    mapScript.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(35.19481, 129.1029),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 특정 위치를 정의 (예: 서울의 중심 좌표)
        const position = new window.kakao.maps.LatLng(35.19481, 129.1029);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: position, // 마커 위치 지정
        });

        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <div className={S.TidingsLayout}>
        <div className={S.Text}>
          <div className={S.HashTag}>#</div>
          <div className={S.TidingTitle}>{Title}</div>
        </div>

        <div className={S.TidingText}>{Text}</div>
        <div
          id="map"
          style={{
            width: "100%",
            height: "350px",
          }}
        ></div>
        <div className={S.Address}>
          부산 동래구 연안로59번길 99 (한국빌딩 1층)
        </div>
        <div className={S.Load}>
          <div className={S.LoadTitle}>오시는 길</div>
          <div className={S.LoadContent}>
            부산시 경전철 안락역에서 하차, 강변뜨라채 105동옆 안락떡방앗간
            골목30미터. 버스는 동래-해운대 길 안락한전 하차
          </div>

          <div className={S.LoadInfo}>
            <div>주차 가능</div>
            <div>월 화 목 금 - 오전 10시~오후 05시</div>
            <div>051-507-6961</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Load;
