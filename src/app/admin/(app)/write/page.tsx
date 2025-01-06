"use client";

import Header from "@/app/admin/components/header";
import * as S from "./style.css";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Upload from "../../components/upload";

const CustomToolbar = () => (
  <div id="toolbar" className={S.Toolbar}>
    <button className="ql-bold" title="굵게 (B)">
      B
    </button>
    <button className="ql-italic" title="기울임꼴 (I)">
      I
    </button>
    <button className="ql-underline" title="밑줄 (U)">
      U
    </button>
    <button className="ql-strike" title="취소선 (S)">
      S
    </button>
    <button className="ql-link" title="링크">
      🔗
    </button>
    <button className="ql-image" title="이미지">
      🖼️
    </button>
  </div>
);

const Write = () => {
  const [value, setValue] = useState("");

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
      <Upload />
    </>
  );
};

export default Write;
