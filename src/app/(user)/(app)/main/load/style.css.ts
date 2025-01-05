import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const TidingsLayout = style({
  display: "flex",
  width: "100%",
  padding: "8% 10% 0 10%",
  flexDirection: "column",
});

export const Text = style({
  display: "flex",
  gap: "12px",
});

export const HashTag = style({
  fontSize: "38px",
  fontFamily: "Pretendard",
  fontWeight: "900",
  color: theme.green,
});

export const TidingTitle = style({
  fontSize: "38px",
  fontFamily: "Pretendard",
  fontWeight: "600",
  color: theme.black,
});

export const TidingText = style({
  padding: "10px 0 28px 0",
  fontSize: "20px",
  fontFamily: "Pretendard",
  fontWeight: "400",
  color: theme.black,
});

export const ImageLayout = style({
  width: "100%",
  height: "22vw",
  display: "flex",
  gap: "20px",
  overflow: "hidden",
  padding: "0 10%",
});

export const EggImage = style({
  height: "22vw",
  width: "auto",
  flexShrink: 0,
});

export const Address = style({
  display: "flex",
  fontFamily: "pretendard",
  fontSize: "30px",
  fontWeight: "400",
  padding: "34px 0 34px 0",
});

export const Load = style({
  display: "flex",
  fontFamily: "pretendard",
  fontSize: "30px",
  fontWeight: "400",
  flexDirection: "column",
});

export const LoadTitle = style({
  display: "flex",
  fontFamily: "pretendard",
  fontSize: "26px",
  fontWeight: "600",
  color: theme.green,
});

export const LoadContent = style({
  display: "flex",
  fontFamily: "pretendard",
  fontSize: "24px",
  fontWeight: "400",
  padding: "0 0 27px 0",
});

export const LoadInfo = style({
  display: "flex",
  fontFamily: "pretendard",
  fontSize: "24px",
  fontWeight: "400",
  flexDirection: "column",
  padding: "0 0 200px 0",
  gap:"8px"
});
