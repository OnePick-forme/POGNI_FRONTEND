import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const MainImages=style({
    width:"100%",
})

export const CategoryLayout=style({
    width:"100%",
    display:"flex",
    padding:"7vw 10% 11vw 10%",
    gap:"40px 7%",
    flexWrap: "wrap",
})

export const OverViewLayout = style({
    width:"100%",
    display:"flex",
    padding:"0 10%",
    gap:"70px",
})

export const OverViewTitle=style({
    display:"flex",
    gap:"8px"
})

export const OverViewTitleText=style({
    fontSize:"30px",
    fontFamily: "Pretendard",
    fontWeight:"600",
    color:theme.gray[900]
})

export const OverViewTitleGreenBox=style({
    width:"8px",
    height:"8px",
    backgroundColor:theme.green
})