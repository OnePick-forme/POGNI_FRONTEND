import * as S from "./style.css";
import Link from "next/link";

const Plusbox = () => {
  return (
    <Link className={S.CategoryBox} href={"/admin/category"}>
      <div className={S.CategoryTitle}>추가하기</div>
    </Link>
  );
};

export default Plusbox;
