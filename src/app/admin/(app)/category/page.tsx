"use client";

import * as S from "./style.css";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js useRouter import
import Header from "@/app/admin/components/header";
import Upload from "@/app/admin/components/boardUpload";
import axios from "axios";

const Category = () => {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    content: false,
  });

  const router = useRouter(); // useRouter 사용

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 상태 업데이트
    setFormData({ ...formData, [name]: value });

    // 글자 초과만 실시간 검증
    const maxLength = name === "name" ? 12 : 30;
    setErrors({
      ...errors,
      [name]: value.length > maxLength,
    });
  };

  const handleSubmit = () => {
    const { name, content } = formData;
    const newErrors = {
      name: name.length === 0 || name.length > 12,
      content: content.length === 0 || content.length > 30,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // 성공 처리 로직
    addData();
  };

  const addData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/hashtag/save`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("응답 데이터:", response.data);
      router.push("/admin/main"); // 성공 후 이동
    } catch (error) {
      console.error("API 요청 중 오류:", error);
    }
  };

  return (
    <>
      <Header />
      <div className={S.CategoryLayout}>
        <div className={S.InputLayout}>
          <input
            name="name"
            value={formData.name}
            placeholder="카테고리명을 입력해주세요."
            className={S.CategoryInput}
            onChange={handleChange}
          />
          <div
            className={`${S.CountInput} ${
              errors.name ? S.CountInputError : ""
            }`}
          >
            {formData.name.length}/12
          </div>
        </div>
        <div
          className={errors.name ? `${S.Line} ${S.LineError}` : S.Line}
        ></div>
        {errors.name && (
          <div className={S.ErrorMessage}>
            {formData.name.length === 0
              ? "카테고리를 입력해주세요."
              : "글자 수를 초과했습니다."}
          </div>
        )}

        {/* 설명 입력 */}
        <div className={S.InputLayout}>
          <input
            name="content"
            value={formData.content}
            placeholder="간단한 설명을 작성해주세요."
            className={S.CategoryInput}
            onChange={handleChange}
          />
          <div
            className={`${S.CountInput} ${
              errors.content ? S.CountInputError : ""
            }`}
          >
            {formData.content.length}/30
          </div>
        </div>
        <div
          className={errors.content ? `${S.Line} ${S.LineError}` : S.Line}
        ></div>
        {errors.content && (
          <div className={S.ErrorMessage}>
            {formData.content.length === 0
              ? "설명을 입력해주세요."
              : "글자 수를 초과했습니다."}
          </div>
        )}
      </div>
      <Upload onClick={handleSubmit} />
    </>
  );
};

export default Category;
