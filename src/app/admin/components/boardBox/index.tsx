import * as S from "./style.css";
import Image from "next/image";

const BoardBox = ({
  ImageUrl,
  Title,
  Date,
}: {
  ImageUrl: string;
  Title: string;
  Date: string;
}) => {
  return (
    <div className={S.BoardBoxContainer}>
      <Image
        className={S.BoardBoxImage}
        src={ImageUrl}
        alt="BoardBoxImage"
        width={385}
        height={250}
        priority={true}
      ></Image>
      <div className={S.BoardBoxTexts}>
        <div className={S.BoardBoxTitle}>{Title}</div>
        <div className={S.BoardBoxDate}>{Date}</div>
      </div>
    </div>
  );
};

export default BoardBox;
