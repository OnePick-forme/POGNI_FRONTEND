import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const OverViewLayout = style({
    width:"100%",
    display:"flex",
    padding:"0 10%",
    justifyContent:"space-between"
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

export const OverViewFlex=style({
    display:"flex"
})

export const OverViewText=style({
    fontSize:"26px",
    fontFamily: "Pretendard",
    fontWeight:"300",
    color:theme.gray[900]
})


export const OverViewTextBold=style({
    fontSize:"26px",
    fontFamily: "Pretendard",
    fontWeight:"600",
    color:theme.gray[900]
})