import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const FixedBox =style({
    padding:"0.5% 0.5%",
    backgroundColor:theme.gray[300],
    color:theme.white,
    fontFamily:"Pretendard",
    fontWeight:"500",
    fontSize:"20px",
    borderRadius:"5px"
})

export const ImportantBox =style({
    padding:"0.5% 0.5%",
    backgroundColor:theme.red,
    color:theme.white,
    fontFamily:"Pretendard",
    fontWeight:"500",
    fontSize:"20px",
    borderRadius:"5px"
})
