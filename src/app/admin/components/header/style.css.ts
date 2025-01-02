import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const HeaderLayout = style({
  display: "flex",
  padding: "0 10%",
  width: "100%",
  height: "86px",
  alignItems: "center",
  borderBottom: `1px solid ${theme.gray[150]}`,
});

export const HeaderTitle = style({
  display: "flex",
  fontFamily: "Jal_Onuel",
  fontSize: "26px",
  color: theme.green,
});

export const HeaderSubTitle = style({
  display: "flex",
  fontFamily: "pretendard",
  justifyContent: "center",
  fontSize: "20px",
  gap: "24px",
  marginLeft: "auto",
});
