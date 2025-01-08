import * as S from "./style.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={S.HeaderLayout}>
      <div className={S.HeaderTitle}>여성과나눔</div>
      <div className={S.HeaderSubTitle}>
        <Link href="/admin/notice">공지사항</Link>
        <Link href="/admin/direction">오시는길</Link>
      </div>
    </div>
  );
};

export default Header;
