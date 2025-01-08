import * as S from "./style.css";
import Link from "next/link";

const Header = ({ hasBackground }: { hasBackground: boolean }) => {
  return (
    <div className={hasBackground ? S.HeaderLayout : S.NoneHeaderLayout}>
      <div className={hasBackground ? S.HeaderTitle : S.NoneHeaderTitle}>
        여성과나눔
      </div>
      <div className={hasBackground ? S.HeaderSubTitle : S.NoneHeaderSubTitle}>
        <Link href="/Notice">공지사항</Link>
        <Link href="/coming">오시는길</Link>
      </div>
    </div>
  );
};

export default Header;
