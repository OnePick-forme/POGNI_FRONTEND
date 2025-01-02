import Header from "@/app/user/components/header";
import * as S from "./style.css";
import Link from "next/link";
import Footer from "@/app/user/components/footer";
import Image from "next/image";
import ImpontantBox from "./ImpontantBox";

const NoticeBox = ({Title,Date,Important}:{Title:string,Date:string,Important:number}) => {
  return (
    <div className={S.NoticeBoxConatiner}>
        <div className={S.NoticeBoxTitle}>
            <div className={S.NoticeTitleText}>
                {Title}
            </div>
            <ImpontantBox Important={Important} />
        </div>
        <div className={S.NoticeBoxDate}>
            {Date}
        </div>
    </div>
  );
};

export default NoticeBox;
