import * as S from "./style.css";

const CategoryBox = ({ Title, Text, index }: { Title: string; Text: string; index: number }) => {
  const handleClick = () => {
    window.location.href = `/admin/board?index=${index}`;
  };

  return (
    <div className={S.CategoryBox} onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className={S.CategoryWrap}>
        <div className={S.CategoryTitle}>
          {Title}
        </div>
        <div className={S.CategoryText}>
          {Text}
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
