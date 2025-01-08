import React, { useState } from "react";
import * as S from "./style.css";
import Link from "next/link";

const NoticeUpload = ({ onClick }: { onClick: () => void }) => {
  const [isFixSelected, setIsFixSelected] = useState(false);
  const [isImportantSelected, setIsImportantSelected] = useState(false);

  const toggleFix = () => {
    setIsFixSelected((prev) => !prev);
  };

  const toggleImportant = () => {
    setIsImportantSelected((prev) => !prev);
  };

  return (
    <div className={S.UploadLayout}>
      <Link href={"/admin/notice"} className={S.UploadBack}>
        나가기
      </Link>
      <div className={S.ButtonLayout}>
        <div className={S.Button} onClick={toggleFix}>
          <div className={isFixSelected ? S.FixSelected : S.Fix}></div>
          <div className={S.FixTitle}>고정</div>
        </div>
        <div className={S.Button} onClick={toggleImportant}>
          <div
            className={isImportantSelected ? S.ImportantSelected : S.Fix}
          ></div>
          <div className={S.ImportantTitle}>중요</div>
        </div>

        <div className={S.UploadButton} onClick={onClick}>
          생성하기
        </div>
      </div>
    </div>
  );
};

export default NoticeUpload;
