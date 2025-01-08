"use client";

import * as S from "./style.css";
import { useState } from "react";
import Header from "@/app/admin/components/header";
import Upload from "@/app/admin/components/boardUpload";

const Category = () => {
  const [inputs, setInputs] = useState({
    name: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    content: false,
  });

  const { name, content } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });

    // 글자 초과만 실시간으로 검증
    const maxLength = name === "name" ? 12 : 30;
    setErrors({
      ...errors,
      [name]: value.length > maxLength, // 초과 여부만 반영
    });
  };

  const handleSubmit = () => {
    const newErrors = {
      name: name.length === 0 || name.length > 12,
      content: content.length === 0 || content.length > 30,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      // 에러가 있으면 반환
      return;
    }

    // 성공 처리 로직
    console.log("성공적으로 생성되었습니다!");
  };

  return (
    <>
      <Header />
      <div className={S.CategoryLayout}>
        {/* 카테고리 입력 */}
        <div className={S.InputLayout}>
          <input
            name="name"
            value={name}
            placeholder="카테고리명을 입력해주세요."
            className={S.CategoryInput}
            onChange={handleChange}
          />
          <div
            className={`${S.CountInput} ${
              errors.name ? S.CountInputError : ""
            }`}
          >
            {name.length}/12
          </div>
        </div>
        <div
          className={errors.name ? `${S.Line} ${S.LineError}` : S.Line}
        ></div>
        {errors.name && (
          <div className={S.ErrorMessage}>
            {name.length === 0
              ? "카테고리를 입력해주세요."
              : "글자 수를 초과했습니다."}
          </div>
        )}

        {/* 설명 입력 */}
        <div className={S.InputLayout}>
          <input
            name="content"
            value={content}
            placeholder="간단한 설명을 작성해주세요."
            className={S.CategoryInput}
            onChange={handleChange}
          />
          <div
            className={`${S.CountInput} ${
              errors.content ? S.CountInputError : ""
            }`}
          >
            {content.length}/30
          </div>
        </div>
        <div
          className={errors.content ? `${S.Line} ${S.LineError}` : S.Line}
        ></div>
        {errors.content && (
          <div className={S.ErrorMessage}>
            {content.length === 0
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
