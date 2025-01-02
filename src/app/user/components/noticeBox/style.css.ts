import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const NoticeBoxConatiner =style({
    width:"100%",
    padding:"20px 0 0 0",
    borderTop:`1px solid ${theme.gray[150]}`,
    display:"flex",
    flexDirection:"column",
    gap:"7px"
})

export const NoticeBoxTitle=style({
    display:"flex",
    gap:"14px",

})

export const NoticeTitleText=style({
    minWidth:"30%",
    fontFamily:"Pretendard",
    fontWeight:"500",
    color:theme.gray[900],
    fontSize:"26px",
})

export const NoticeBoxDate =style({
    fontFamily:"Pretendard",
    fontWeight:"500",
    color:theme.gray[400],
    fontSize:"20px",
})