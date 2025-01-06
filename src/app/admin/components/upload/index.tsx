import * as S from "./style.css";

// const Upload = ({ onClick }: { onClick: () => void }) => {
const Upload = () => {
  return (
    <div className={S.UploadLayout}>
      <div className={S.UploadBack}>나가기</div>
      <div className={S.UploadButton}>생성하기</div>
    </div>
  );
};

export default Upload;
