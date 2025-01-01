import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const BoardBoxContainer=style({
    width:"32%",
    display:"flex",
    flexDirection:"column",
});

export const BoardBoxImage=style({
    width:"100%",
    height: "250px",
    borderRadius:"15px",
    objectFit:"cover"
})

export const BoardBoxTexts=style({
    width:"100%",
    display:"flex",
    flexDirection:"column",
    padding:"15px 0 0 0",
    gap:"15px"
})

export const BoardBoxTitle = style({
    fontSize:"22px",
    fontFamily: "Pretendard-Medium",
    color:theme.gray[900],
})

export const BoardBoxDate = style({
    fontSize:"20px",
    fontFamily: "Pretendard-Regular",
    color:theme.gray[500],
})