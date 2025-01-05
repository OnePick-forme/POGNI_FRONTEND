// NewsBox.tsx
import * as S from "./style.css";

const NewsBox = ({
  Type,
  Title,
  Date,
  ImageUrl,
}: {
  Type: string;
  Title: string;
  Date: string;
  ImageUrl: string;
}) => {
  return (
    <div className={S.NewsBox}>
      <img className={S.Image} src={ImageUrl} alt="Tidings Image" />
      <div className={S.Type}>{Type}</div>
      <div className={S.Title}>{Title}</div>
      <div className={S.Line} />
      <div className={S.Text}>{Date}</div>
    </div>
  );
};

export default NewsBox;
