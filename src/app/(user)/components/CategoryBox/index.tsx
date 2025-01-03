import * as S from "./style.css";
import Link from "next/link";

const CategoryBox = ({Title,Text}:{Title:string,Text:string}) => {
  return (
    <div className={S.CategoryBox}>
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
