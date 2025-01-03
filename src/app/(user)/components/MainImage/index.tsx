"use client";

import * as S from "./style.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const MainImage = () => {
    const {MainImageTitle,MainImageText2,MainImageText3,MainImageText4,MainImageText5}={
        MainImageTitle:["부모님의 바쁜 일정을 위해","우리 전통 속에서 찾는 즐거움","다가가는 특별한 경험"],
        MainImageText2:["아이들에게 안전하고 즐거운 시간을","전래놀이","놀이로 소통하고 즐거움으로 연결합니다."],
        MainImageText3:["찾아가는 베이비시터단","로 함께 만드는 소중한 추억","마음을 여는 체험활동"],
        MainImageText4:["이 함께합니다.","아이들의 마음에 웃음을 선물합니다.","이 시작됩니다."],
        MainImageText5:["우리의 돌봄이 당신의 안심이 됩니다.","전통의 숨결로 이어가는 따뜻한 시간","함께 웃으며 성장하는 시간"]
    }
    const [selectImage,setSelectImage]=useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectImage((prev) => (prev === 2 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    if(selectImage==0){
        return (
            <div className={S.MainImageSlide}>
                <img src="/MainImage/BabySeater.png" alt="mainImage" className={S.MainImage}/>
                <div className={S.MainImageTexts}>
                    <div className={S.MainImageTitle}>{MainImageTitle[0]}</div>
                    <div className={S.MainImageText}>{MainImageText2[0]}</div>
                    <div className={S.MainImageBoaTe}>
                        <div className={S.MainImageTextBold}>{MainImageText3[0]}</div>
                        <div className={S.MainImageText}>{MainImageText4[0]}</div>
                    </div>
                    <div className={S.MainImageTextlettle}>{MainImageText5[0]}</div>
                </div>
                <div className={S.MainIcon}>
                    <Image alt="icon" src="/MainImage/ddang/first.svg" width={47} height={10}></Image>
                </div>
            </div>
        )
    }
    if(selectImage==1){
        return (
            <div className={S.MainImageSlide}>
                <img src="/MainImage/jeonrea.png" alt="mainImage" className={S.MainImage}/>
                <div className={S.MainImageTexts}>
                    <div className={S.MainImageTitle}>{MainImageTitle[1]}</div>
                    
                    <div className={S.MainImageBoaTe}>
                        <div className={S.MainImageTextBold}>{MainImageText2[1]}</div>
                        <div className={S.MainImageText}>{MainImageText3[1]}</div>
                    </div>
                    <div className={S.MainImageText}>{MainImageText4[1]}</div>
                    <div className={S.MainImageTextlettle}>{MainImageText5[1]}</div>
                </div>
                <div className={S.MainIcon}>
                    <Image alt="icon" src="/MainImage/ddang/second.svg" width={47} height={10}></Image>
                </div>
            </div>
        )
    }
    if(selectImage==2){
        return (
            <div className={S.MainImageSlide}>
                <img src="/MainImage/enjoy.png" alt="mainImage" className={S.MainImage}/>
                <div className={S.MainImageTexts}>
                    <div className={S.MainImageTitle}>{MainImageTitle[2]}</div>
                    <div className={S.MainImageText}>{MainImageText2[2]}</div>
                    <div className={S.MainImageBoaTe}>
                        <div className={S.MainImageTextBold}>{MainImageText3[2]}</div>
                        <div className={S.MainImageText}>{MainImageText4[2]}</div>
                    </div>
                    <div className={S.MainImageTextlettle}>{MainImageText5[2]}</div>
                </div>
                <div className={S.MainIcon}>
                    <Image alt="icon" src="/MainImage/ddang/thrid.svg" width={47} height={10}></Image>
                </div>
            </div>
        )
    }
  
};

export default MainImage;
