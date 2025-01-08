import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const NewsLayout = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "10% 0 0 10%",
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

export const NewsTitle = style({
  fontSize: "38px",
  fontFamily: "Pretendard",
  fontWeight: "600",
  color: theme.black,
});

export const NewsText = style({
  padding: "10px 0 28px 0",
  fontSize: "20px",
  fontFamily: "Pretendard",
  fontWeight: "400",
  color: theme.black,
});

export const ImageLayout = style({
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  gap: "16px",
  alignItems: "center",
  whiteSpace: "nowrap",
  width: "100%",
  height: "250px",
  paddingBottom: "16px", // 스크롤바 공간 확보
  boxSizing: "border-box",
  scrollBehavior: "smooth", // 부드러운 스크롤
  scrollbarWidth: "none", // Firefox: 스크롤바 숨김
  msOverflowStyle: "none", // IE/Edge: 스크롤바 숨김
});
