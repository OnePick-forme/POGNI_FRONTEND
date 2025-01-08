import * as S from "./style.css";
import Link from "next/link";

const Upload = ({ onClick }: { onClick: () => void }) => {
  // const Upload = () => {
  return (
    <div className={S.UploadLayout}>
      <Link href={"/admin/main"} className={S.UploadBack}>
        나가기
      </Link>
      <div className={S.UploadButton} onClick={onClick}>
        생성하기
      </div>
    </div>
  );
};

export default Upload;
