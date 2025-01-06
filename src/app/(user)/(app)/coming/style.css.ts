import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const ComingLayout =style({
    width:"100%",
    padding:"0 10%",
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column"
});

export const ComingTitle=style({
    width:"100%",
    padding:"58px 0 33px 0",
    borderBottom :`1px solid ${theme.gray[600]}`,
    fontSize:"36px",
    fontFamily:"Jal_Onuel",
});

export const ComingMapContainer=style({
    width:"100%",
    padding:"33px 0 0 0",
});

export const ComingMaps=style({
    width:"100%",
    height:"524px"
});

export const ComingTexts=style({
    display:"flex",
    flexDirection:"column",
    gap:"40px"
});

export const ComingMainAddress=style({
    fontSize:"30px",
    fontFamily: "Pretendard",
    fontWeight:"500",
    color:theme.gray[900]
});

export const ComingComents=style({
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    fontSize:"24px",
    fontFamily: "Pretendard",
    fontWeight:"500",
    color:theme.gray[800]
});

export const ComingLogoText=style({
    alignItems:"center",
    display:"flex",
    gap:"12px",
})

export const ComingComing=style({
    display:"flex",
    flexDirection:"column",
    gap:"12px",
})
export const ComingComingTitle=style({
    fontSize:"24px",
    fontFamily: "Pretendard",
    fontWeight:"500",
    color:theme.gray[500],
    padding:"0 0 8px 0",
    borderBottom:`2px solid ${theme.gray[200]}`
})

export const ComingText=style({
    fontSize:"22px",
    fontFamily: "Pretendard",
    fontWeight:"500",
    color:theme.gray[800],
    padding:"0 0 100px 0",
})