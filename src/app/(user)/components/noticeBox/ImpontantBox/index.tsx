import * as S from "./style.css";
import Link from "next/link";
// Impontant가 1이면 고정 2이면 중요

const ImpontantBox = ({Important}:{Important:number}) => {
    if(Important==1){
        return(
            <div className={S.FixedBox}>
                고정
            </div>
        );
    }
    if(Important==2){
        return(
            <div className={S.ImportantBox}>
                중요
            </div>
        )
    }
};

export default ImpontantBox;
