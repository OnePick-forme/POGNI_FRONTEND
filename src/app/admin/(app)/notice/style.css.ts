import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const NoticeLayout = style({
  width: "100%",
  padding: "0 10%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const NoticeTitle = style({
  width: "100%",
  fontSize: "36px",
  flexDirection: "row",
  fontFamily: "Jal_Onuel",
});

export const NoticeList = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "0 0 140px 0",
});

export const NoticeHeader = style({
  flexDirection: "row",
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  padding: "58px 0 20px 0",
});

export const WriteButton = style({
  display: "flex",
  fontSize: "20px",
  width: "123px",
  height: "45px",
  backgroundColor: theme.green,
  color: theme.white,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
});
