import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const MainImageSlide=style({
    width:"100%",
    position:"relative",
})

export const MainImage=style({
    width:"100%",
    objectFit:"cover",

})

export const MainImageTexts=style({
    position:"absolute",
    left:"10%",
    top:"25%",
});

export const MainImageTitle=style({
    fontSize:"40px",
    fontFamily: "pretendard",
    fontWeight:"300",
    color:theme.white,
    padding:"0 0 2% 0"
})
export const MainImageBoaTe=style({
    display:"flex",
    padding:"2% 0 0 0"
})
export const MainImageText=style({
    fontSize:"48px",
    fontFamily: "pretendard",
    fontWeight:"300",
    color:theme.white
})

export const MainImageTextBold=style({
    fontSize:"48px",
    fontFamily: "pretendard",
    fontWeight:"600",
    color:theme.white,
})

export const MainImageTextlettle=style({
    fontSize:"20px",
    fontFamily: "pretendard",
    fontWeight:"300",
    color:theme.white,
    padding:"2% 0 0 0"
})

export const MainIcon=style({
    position:"absolute",
    left:"10%",
    bottom:"10%",
})