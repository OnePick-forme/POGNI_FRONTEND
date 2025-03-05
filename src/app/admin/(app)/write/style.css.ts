import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const WriteLayout = style({
  height: "100vh",
  width: "100%",
  padding: "0 10%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const WriteTitle = style({
  display: "flex",
  fontFamily: "Pretendard-Medium",
  fontSize: "28px",
  border: "none",
  outline: "none",
  marginTop: "56px",
  zIndex: "20",
  width: "100%",
});

export const CustomToolbar = style({
  display: "flex",
  border: "none",
});

export const CustomToolbarButton = style({
  fontSize: "14px",
  padding: "0px 10px 0 0",
  border: "none",
  marginTop: "8px",
});

export const WriteLine = style({
  display: "flex",
  width: "35%",
  padding: "1.5px",
  marginBottom: "5px",
  backgroundColor: theme.gray[300],
});

export const WriteEditer = style({
  marginTop: "12px",
  padding: "0",
});

export const Line = style({
  marginTop: "20px",
  display: "flex",
  width: "100%",
  padding: "1px",
  backgroundColor: theme.gray[200],
});
