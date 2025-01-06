import { style } from "@vanilla-extract/css";
import theme from "@/ui/style/theme.css";

export const HeaderLayout = style({
  zIndex: "1",
  position: "fixed",
  top: "0px",
  left: "0px",
  display: "flex",
  padding: "0 10%",
  width: "100%",
  height: "86px",
  alignItems: "center",
  borderBottom: `1px solid ${theme.gray[150]}`,
  backgroundColor: theme.white,
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

export const NoneHeaderLayout = style({
  zIndex: "1",
  position: "fixed",
  top: "0px",
  left: "0px",
  display: "flex",
  padding: "0 10%",
  width: "100%",
  height: "86px",
  alignItems: "center",
});

export const NoneHeaderTitle = style({
  display: "flex",
  fontFamily: "Jal_Onuel",
  fontSize: "26px",
  color: theme.white,
});

export const NoneHeaderSubTitle = style({
  display: "flex",
  fontFamily: "pretendard",
  justifyContent: "center",
  fontSize: "20px",
  gap: "24px",
  marginLeft: "auto",
  color: theme.white,
});
