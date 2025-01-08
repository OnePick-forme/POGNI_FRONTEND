"use client";
import * as S from "./style.css";
import Header from "@/app/admin/components/header";
import Upload from "@/app/admin/components/boardUpload";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Direction = () => {
  const [formData, setFormData] = useState({
    address: "",
    information: "",
    contact: "",
    openingHour: "",
    road: "",
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const addData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/location/save`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {

    }
  };

  useEffect(() => {
    const selectedAddress = searchParams.get("selectedAddress") || "";
    setFormData((prev) => ({ ...prev, address: selectedAddress }));
  }, [searchParams]);

  const handleSearchClick = () => {
    router.push("/admin/map");
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
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <div className={S.AddressLine}></div>
            </div>
            <button className={S.AddressButton} onClick={handleSearchClick}>
              검색
            </button>
          </div>
        </div>
        {/* 나머지 입력 필드들 */}
        <div className={S.Box}>
          <div className={S.Title}>추가 정보</div>
          <input
            placeholder="추가 정보를 입력해주세요."
            className={S.input}
            onChange={(e) =>
              setFormData({ ...formData, information: e.target.value })
            }
          />
          <div className={S.Lines}></div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>연락처</div>
          <input
            placeholder="연락처를 입력해주세요."
            className={S.input}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          <div className={S.Lines}></div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>운영시간</div>
          <input
            placeholder="운영시간을 입력해주세요."
            className={S.input}
            onChange={(e) =>
              setFormData({ ...formData, openingHour: e.target.value })
            }
          />
          <div className={S.Lines}></div>
        </div>
        <div className={S.Box}>
          <div className={S.Title}>오시는 길</div>
          <input
            placeholder="간단한 설명을 입력해주세요."
            className={S.input}
            onChange={(e) => setFormData({ ...formData, road: e.target.value })}
          />
          <div className={S.Lines}></div>
        </div>
      </div>
      <Upload onClick={addData} />
    </>
  );
};

export default Direction;
