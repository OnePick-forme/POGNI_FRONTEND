import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const DetailLayout=style({
    width:"100%",
    padding:"0 10%",
})

export const DetailShow=style({
    width:"100%",
    display:"flex",
    flexDirection:"column",
    padding:"0 60px 0 0",
})

export const DetailTitle=style({
    display:"flex",
    justifyContent:"space-between",
    padding:"59px 0 15px 0",
    borderBottom:`2px solid ${theme.gray[200]}`
})

export const DetailTitleText=style({
    fontSize:"28px",
    fontFamily: "Pretendard",
    fontWeight:"400",
    color:theme.gray[900]
})

export const DetailTitleDate=style({
    fontSize:"24px",
    fontFamily: "Pretendard",
    fontWeight:"400",
    color:theme.gray[500]
})

export const DetailContainer=style({
    display:"flex",
    flexDirection:"column",
    width:"100%",
    padding:"50px 0 0 0",
})

export const DetailTexts=style({
    display:"flex",
    flexDirection:"column",
    flexWrap: "wrap",
    whiteSpace:"pre-wrap",
    fontSize:"22px",
    fontFamily: "Pretendard",
    fontWeight:"500",
    padding:"0 0 42px 0",
})

export const DetailImage=style({
    padding:"0 0 328px 0",
})