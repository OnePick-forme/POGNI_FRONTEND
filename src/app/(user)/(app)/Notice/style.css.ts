import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const NoticeLayout =style({
    width:"100%",
    padding:"0 10%",

})

export const NoticeTitle=style({
    width:"100%",
    padding:"58px 0 20px 0",
    borderBottom :`1px solid ${theme.gray[600]}`,
    fontSize:"36px",
    fontFamily:"Jal_Onuel",
})

export const NoticeList=style({
    width:"100%",
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    padding:"0 0 140px 0"
})