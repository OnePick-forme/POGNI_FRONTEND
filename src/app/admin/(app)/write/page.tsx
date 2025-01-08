"use client";
import Link from "next/link";
import Header from "@/app/admin/components/header";
import * as S from "./style.css";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import BoardUpload from "@/app/admin/components/boardUpload";
import { useSearchParams } from 'next/navigation';

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold" title="굵게"></button>
    <button className="ql-italic" title="기울임"></button>
    <button className="ql-underline" title="밑줄"></button>
    <button className="ql-strike" title="취소선"></button>
    <button className="ql-link" title="링크"></button>
    <button className="ql-image" title="이미지"></button>
  </div>
);

const Write = () => {
  const [value, setValue] = useState(""); // 게시글 내용
  const [title, setTitle] = useState(""); // 게시글 제목
  const searchParams = useSearchParams();
  const index = searchParams.get('index');

  const handleSubmit = async () => {
    if (!title || !value) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", value); // HTML 내용 포함
    formData.append("date", new Date().toISOString().split("T")[0]); // yyyy-mm-dd 형식

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/hashtag/post/save`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("서버 응답:", response.data);
      alert("게시글이 성공적으로 저장되었습니다!");
    } catch (error) {
      console.error("게시글 저장 실패:", error);
      alert("게시글 저장에 실패했습니다.");
    }
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "image",
  ];

  return (
    <>
      <Header />
      <div className={S.WriteLayout}>
        <input
          className={S.WriteTitle}
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={S.WriteLine} />
        <CustomToolbar />
        <div className={S.Line} />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className={S.WriteEditer}
          modules={modules}
          formats={formats}
        />
      </div>
      <BoardUpload onClick={handleSubmit} />
    </>
  );
};

export default Write;
