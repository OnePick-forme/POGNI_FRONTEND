import Header from "@/app/(user)/components/header";
import * as S from "./style.css";
import Link from "next/link";
import Footer from "@/app/(user)/components/footer";
import NoticeBox from "../../components/noticeBox";

const Notice = () => {
  return (
    <>
      <Header />
      <div className={S.NoticeLayout}>
        <div className={S.NoticeHeader}>
        <div className={S.NoticeTitle}>공지사항</div>
        <Link href={"/admin/noticewrite"} className={S.WriteButton}>
          추가하기
        </Link>
        </div>
        <div className={S.NoticeList}>
          <NoticeBox
            Date="2024.03.21"
            Important={1}
            Title="포근이슬 관련 허가증"
          />
          <NoticeBox
            Date="2024.03.21"
            Important={0}
            Title="포근이슬 관련 허가증"
          />
          <NoticeBox
            Date="2024.03.21"
            Important={2}
            Title="포근이슬 관련 허가증"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notice;
