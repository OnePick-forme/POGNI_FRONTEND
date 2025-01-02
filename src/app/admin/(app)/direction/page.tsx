"use client";

import * as S from "./style.css";
import Header from "@/app/admin/components/header";
import Upload from "@/app/admin/components/upload";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Direction = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Fetch the selected address from query params
    const selectedAddress = searchParams.get("selectedAddress") || "";
    setAddress(selectedAddress);
  }, [searchParams]);

  const handleSearchClick = () => {
    router.push("/map");
  };

  return (
    <>
      <Header />
      <div className={S.DirectionsLayout}>
        <h1 className={S.DirectionTitle}>오시는 길</h1>
        <div className={S.Line}></div>
        <div className={S.Box}>
          <h2 className={S.Title}>주소</h2>
          <div className={S.AddressSearch}>
            <div className={S.AddressInfo}>
              <input
                placeholder="주소를 찾기 위해 검색해주세요."
                className={S.AddressInput}
                value={address}
                readOnly
              />
              <div className={S.AddressLine}></div>
            </div>
            <button className={S.AddressButton} onClick={handleSearchClick}>
              검색
            </button>
          </div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>추가 정보</div>
          <input placeholder="추가 정보를 입력해주세요." className={S.input} />
          <div className={S.Lines}></div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>연락처</div>
          <input placeholder="연락처를 입력해주세요." className={S.input} />
          <div className={S.Lines}></div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>운영시간</div>
          <input placeholder="운영시간을 입력해주세요." className={S.input} />
          <div className={S.Lines}></div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>오시는 길</div>
          <input
            placeholder="간단한 설명을 입력해주세요."
            className={S.input}
          />
          <div className={S.Lines}></div>
        </div>
      </div>
      <Upload onClick={()=>{}}/>
    </>
  );
};

export default Direction;
