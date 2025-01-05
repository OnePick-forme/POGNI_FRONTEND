import { keyframes, style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const EggFonyTextLayout=style({
    width:"100%",
    padding:"10% 10% 0 10%",
})

export const EggFonyText=style({
    display:"flex",
    gap:"12px"
})

export const EggFonyShap=style({
    fontSize:"38px",
    fontFamily: "Pretendard",
    fontWeight:"900",
    color:theme.green
})

export const EggFonyTextBold=style({
    fontSize:"38px",
    fontFamily: "Pretendard",
    fontWeight:"600",
    color:theme.black
})

export const EggFonyTexts=style({
    padding:"10px 0 28px 0",
    fontSize:"20px",
    fontFamily: "Pretendard",
    fontWeight:"400",
    color:theme.black
})

export const EggFonyImageLayout = style({
    width: '100%',
    height: '22vw',
    display: 'flex',
    gap: '20px',
    overflow: 'hidden',
  });
export const slide = keyframes({
    '0%': {
      transform: 'translateX(0)'
    },
    '100%': {
      transform: 'translateX(-100%)'
    }
  });
  export const slideTrack = style({
    display: 'flex',
    gap: '20px',
    animation: `${slide} 100s linear infinite`,
  });
  
  export const EggImage = style({
    height: '22vw',
    width: 'auto',
    flexShrink: 0,
  });