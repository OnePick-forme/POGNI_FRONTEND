import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const CategoryBox=style({
    padding:"24px 32px ",
    width:"28%",
    height:"10vw",
    border:`1px solid ${theme.gray[200]}`,
    borderRadius:"5px"
})
export const CategoryWrap=style({
    
    display:"flex",
    flexDirection:"column",
    gap:"14px",
})
export const CategoryTitle=style({
    fontSize:"24px",
    fontFamily: "Pretendard",
    fontWeight:"500",
    color:theme.gray[900]
})

export const CategoryText=style({
    fontSize:"20px",
    fontFamily: "Pretendard",
    fontWeight:"400",
    color:theme.gray[900]
})